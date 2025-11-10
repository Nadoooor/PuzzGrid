AFRAME.registerComponent('correct', {
    schema: {
        where: { type: 'vec3', default: { x: 0, y: 0, z: 0 } },
        to: { type: 'int', default: 2 }
    },

    init: function () {

        this.el.addEventListener('obbcollisionstarted', e => {
            const collidedEntity = e.detail.withEl;
            const boxId = collidedEntity.getAttribute('id');
            
            if (collidedEntity.components['ammo-body'] === undefined) {
                return; 
            }

            if (boxId === "box1") {
                collidedEntity.setAttribute("id", "Obox1");
                console.log("Box 1 done.");
            } else if (boxId === "box2") {
                collidedEntity.setAttribute("id", "Obox2");
                console.log("Box 2 done.");
            } else if (boxId === "box3") {
                collidedEntity.setAttribute("id", "Obox3");
                console.log("Box 3 done.");
            } else if (boxId === "box4") {
                collidedEntity.setAttribute("id", "Obox4");
                console.log("Box 4 done.");
            } else if (boxId === "box5") {
                collidedEntity.setAttribute("id", "Obox5");
                console.log("Box 5 done.");
            }
            this.box1 = document.getElementById("Obox1");
        this.box2 = document.getElementById("Obox2");
        this.box3 = document.getElementById("Obox3");
        this.box4 = document.getElementById("Obox4");
        this.box5 = document.getElementById("Obox5");
            collidedEntity.removeAttribute('ammo-body');
            collidedEntity.removeAttribute('ammo-shape');
            collidedEntity.removeAttribute('grap');
            
            collidedEntity.setAttribute('position', this.data.where);
            collidedEntity.setAttribute('rotation', '0 0 0');
            console.log("Locked entity in position: ", boxId);
            console.log(this.box1, this.box2, this.box3, this.box4, this.box5);
        });

    },
    
    tick: function (time, timeDelta) {
        i = 0;
        this.box1 = document.getElementById("Obox1");
        this.box2 = document.getElementById("Obox2");
        this.box3 = document.getElementById("Obox3");
        this.box4 = document.getElementById("Obox4");
        this.box5 = document.getElementById("Obox5");
        if (this.box1 != null && this.box2 != null && this.box3 != null && this.box4 != null && this.box5 != null && i < 1) {
            console.log("All boxes are in correct positions! Loading Level 2.");
            i++;
            window.location.href = "Level" + this.data.to + ".html"; 
        }
    }
});