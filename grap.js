AFRAME.registerComponent('grap', {
    

    init: function () {
        console.log("grap component initialized");
    this.grapping = false;
    this.cam = document.querySelector("#camera");
    this.el.addEventListener('click', e => {
        console.log("grap component clicked");
        const body = this.el.body;
        if (!body | !this.cam)return;
        const Direction = new THREE.Vector3();
        this.cam.object3D.getWorldDirection(Direction);
        this.grapping = !this.grapping;
        if (this.grapping) {
            body.setGravity(new Ammo.btVector3(0, 0, 0));
            body.activate();
        } else{
            body.setGravity(new Ammo.btVector3(0, -9.8, 0));
            body.activate();
            const thro = Direction.multiplyScalar(-1);
            body.setLinearVelocity(new Ammo.btVector3(thro.x, thro.y, thro.z));
            body.setActivationState(1);
        }
    });
    },
    
    tick: function (time, timeDelta) {
    if (!this.grapping) return;
    const body = this.el.body;
    const came = this.cam;
    if (!body | !came)return;
    console.log("grapping...");
    const camPosition = new THREE.Vector3();
    came.object3D.getWorldPosition(camPosition);
    const camAngle = new THREE.Quaternion();
    came.object3D.getWorldQuaternion(camAngle);
    const camDirection = new THREE.Vector3();
    came.object3D.getWorldDirection(camDirection);
    camPosition.add(camDirection.multiplyScalar(-2));
    const Transform = new Ammo.btTransform();
    Transform.setIdentity();
    Transform.setOrigin(new Ammo.btVector3(camPosition.x , camPosition.y , camPosition.z));
    Transform.setRotation(new Ammo.btQuaternion(camAngle.x , camAngle.y , camAngle.z , camAngle.w));
    body.setWorldTransform(Transform);
    body.activate();
    this.el.object3D.position.copy(camPosition);
    this.el.object3D.quaternion.copy(camAngle);
    }
});
