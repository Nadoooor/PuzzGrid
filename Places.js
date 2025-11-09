AFRAME.registerComponent('correct', {
    schema: {
        where: { type: 'vec3', default: { x: 0, y: 0, z: 0 } }
    },

    init: function () {
        this.el.addEventListener('obbcollisionstarted', e => {
            const collidedEntity = e.detail.withEl;
        
            collidedEntity.removeAttribute('ammo-body');
            collidedEntity.removeAttribute('ammo-shape');
            collidedEntity.setAttribute('position', this.data.where);
            console.log("Moved entity to correct position: ", collidedEntity.getAttribute('id'));

        });

                this.el.addEventListener('obbcollisionended', e => {
            const collidedEntity = e.detail.withEl;
        
            collidedEntity.setAttribute('ammo-body', 'type: dynamic');
            collidedEntity.setAttribute('ammo-shape', 'type: box');

        });
    },
});