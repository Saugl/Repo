
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#87CEEB',
    physics: {
        default: 'arcade',
        arcade: { gravity: { y: 0 }, debug: true }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let shooter;

function preload() {
    this.load.image('shooter', 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Red_circle.svg');
}

function create() {
    shooter = this.physics.add.image(400, 550, 'shooter').setDisplaySize(40, 40);
    shooter.setCollideWorldBounds(true);

    this.input.on('pointerdown', (pointer) => {
        const dx = pointer.x - shooter.x;
        const dy = pointer.y - shooter.y;
        shooter.setVelocity(dx * 2, dy * 2);
    });
}

function update() {
    if (shooter.y < -50 || shooter.y > 650) {
        shooter.setPosition(400, 550);
        shooter.setVelocity(0, 0);
    }
}
