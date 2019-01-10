
var config = {
    type:Phaser.WEBGL, 
    width:  window.innerWidth,
    height: window.innerHeight-94,
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

