
var config = {
    type:Phaser.CANVAS, 
    width:  window.innerWidth,
    height: window.innerHeight-56,
    parent: 'phaser-container',
    physics: {
        default:'arcade',
        arcade: {
            gravity: {
                y: 300
            },
            debug: false
        }
    },
    scene: [Example1, Example2]
};
var game = new Phaser.Game(config);

