class Example2 extends Phaser.Scene {
    constructor() {
        super(
            { 
            key: "Example2"
        });
    }

    // var conf = {
    //     width: 800,
    //     height: 600,
    //     renderer: Phaser.AUTO,
    //     parent: 'phaser-example',
    //     transparent: false,
    //     antialias: false,
    //     state: this,
    //     scaleMode: Phaser.ScaleManager.EXACT_FIT
    // };
    
    // var game = new Phaser.Game(conf);


    preload() {



        this.load.image('room', '../img/assets/roomboy.png');
        this.load.spritesheet('dude',
            '../img/assets/dude.png',
            { frameWidth: 32, frameHeight: 48 }
        );
        this.load.spritesheet('dude-hat',
            '../img/assets/dude-hat.png',
            { frameWidth: 32, frameHeight: 48 }
        );
        this.load.image('platform', '../img/assets/platform.png');
        this.load.image('healthbar', '../img/assets/health-bar.png')
    }

    create() {
        // This works
        // this.image = this.add.image(0, 1000, 'room').setOrigin(0);

        this.image = this.add.image(0, 0, 'room').setOrigin(0);
        this.health = this.add.image(500, 500, 'healthbar');
        this.player = this.physics.add.sprite(500, 1700, 'dude');
        
        // This works
        // this.physics.world.setBounds(-0, 900, 3240, 1920);
        this.physics.world.setBounds(-0, -100, 3240, 1920);

        this.player.setScale(4);
        this.player.setGravity(0, 800);
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);



        // This works
        // this.cameras.main.setBounds(0, -325, 3240, 3240);
        this.cameras.main.setBounds(0, 0, 3240, 1920);
        this.cameras.main.fadeIn(1500);
        this.cameras.main.startFollow(this.player, false, 0.5, 0.5);
        this.cameras.main.zoom = 1;

        this.cursors = this.input.keyboard.createCursorKeys();
        this.pointer = this.input.activePointer;

        this.ChangeScreen = this.add.text(0,window.innerHeight-130, "Progression Screen").setScrollFactor(0).setFontSize(15).setColor('#ffffff');
        this.ChangeScreen.setInteractive()
        .on('pointerdown', function() {
            this.scene.start("Example1");
        }, this);

        this.Clothes = this.add.text(0,window.innerHeight-160, "Grøn Kasket").setScrollFactor(0).setFontSize(15).setColor('#ffffff');
        this.Clothes.setInteractive()
        .on('pointerdown', function() {
            this.time.delayedCall(0, this.changeSprite, [], this);
        }, this);

        this.eatButton = this.add.text(window.innerWidth-80,window.innerHeight-130, "Spis mad").setScrollFactor(0).setFontSize(15).setColor('#ffffff');
        this.eatButton.setInteractive()
        .on('pointerdown', function() {
            this.time.delayedCall(0, this.heal, [], this);
        }, this);
        // console.log(this.health);
        // setInterval(function(health){
            
        // }, 1000);
        this.time.delayedCall(1000, this.damage, [], this);
        
        console.log(this.cameras.main);
    }

    heal() {
        if (this.health.scaleX <= 0) {
            this.health.scaleX += 0.5;
        } else if (this.health.scaleX >= 0.75 && this.health.scaleX < 1) {
            this.health.scaleX+=0.25;
        } else if (this.health.scaleX >= 1) {
            this.health.scaleX = 1;
        } else {
            this.health.scaleX+=0.25;
        }
    }

    damage() {
        this.health.scaleX-= 0.10;
        

        if (this.health.scaleX <= 0) {
            this.health.scaleX = 0;
        } else {
            this.time.delayedCall(5000, this.damage, [], this);
        }
        console.log(this.health.scaleX);
    }

    changeSprite() {
        if (this.player.texture.key === "dude") {
            this.player.setTexture('dude-hat');
        } else if (this.player.texture.key === "dude-hat") {
            this.player.setTexture('dude');
        }
        // this.player.loadTexture('dude-hat');
        
        // this.player = this.physics.add.sprite(500, 1700, 'dude-hat');
        

    }


    update(delta) {

        
        // if (this.health.setS)
        // setInterval(function(){
        //     this.health.width-=1;
        // }, 5000);
        

        // this.health.x = this.player.x;
        // this.health.y = this.player.y-window.innerHeight/1.5;


        this.health.x = this.cameras.main.midPoint.x;
        this.health.y = this.cameras.main.midPoint.y-window.innerHeight/2+50;

        var touchX = this.pointer.x;
        var touchY = this.pointer.y;
        // console.log("click: " + touchX, touchY);
        // console.log(window.innerHeight);
        // console.log("player: " + this.player.x, this.player.y);


        if (this.pointer.isDown && this.player.y >= 1724 && touchY < window.innerHeight/3) {
            this.player.setVelocityY(-800);
        } else if (this.pointer.isDown && touchX < window.innerWidth/2) {
            this.player.setVelocityX(-500);
            if (this.player.texture.key == "dude") {
                this.player.anims.play('left', true);
            } else if (this.player.texture.key == "dude-hat") {
                this.player.anims.play('left-hat', true);
            }
            // this.player.anims.play('left', true);
        } else if (this.pointer.isDown && touchX > window.innerWidth/2) {
            this.player.setVelocityX(500);
            if (this.player.texture.key == "dude") {
                this.player.anims.play('right', true);
            } else if (this.player.texture.key == "dude-hat") {
                this.player.anims.play('right-hat', true);
            }
        } else {
            this.player.setVelocityX(0);
            if (this.player.texture.key == "dude") {
                this.player.anims.play('turn', true);
            } else if (this.player.texture.key == "dude-hat") {
                this.player.anims.play('turn-hat', true);
            }
        }

    }


}