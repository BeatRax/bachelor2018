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



        // this.load.image('room', '../img/assets/roomboy.png');
        // this.load.spritesheet('dude',
        //     '../img/assets/dude.png',
        //     { frameWidth: 32, frameHeight: 48 }
        // );
        // this.load.spritesheet('dude-hat',
        //     '../img/assets/dude-hat.png',
        //     { frameWidth: 32, frameHeight: 48 }
        // );

        this.load.image('room', '../img/assets/værelse.png');
        this.load.spritesheet('ourdude',
            '../img/assets/boy.png',
            { frameWidth: 30.6, frameHeight: 32 }
        );
        this.load.spritesheet('ourgirl',
            '../img/assets/girl.png',
            { frameWidth: 30.6, frameHeight: 32 }
        );

        this.load.spritesheet('toysoldier',
        '../img/assets/toy-soldier1.png',
        { frameWidth: 38.5, frameHeight: 65.5 }
    );
        this.load.audio('foundyou', '../img/assets/coin.wav', {
            instances: 1
        });
        this.load.image('platform', '../img/assets/platform.png');
        this.load.image('healthbar', '../img/assets/health-bar.png')
        this.load.image('funbar', '../img/assets/fun-bar.png')
    }

    create() {
        // This works
        // this.image = this.add.image(0, 1000, 'room').setOrigin(0);

        this.image = this.add.image(0, 0, 'room').setOrigin(0);
        this.health = this.add.image(500, 500, 'healthbar');
        this.health.setScale(0.4);
        this.funbar = this.add.image(500, 500, 'funbar');
        this.funbar.setScale(0.2, 0.4);
        this.foundyou = this.sound.add('foundyou', { loop: false });
        // this.foundyou = this.sound.add('foundyou');
        // this.player = this.physics.add.sprite(500, 1700, 'dude');
        
        // this.genderGenerator = Math.floor(Math.random() * 2) + 1;;
        // console.log(this.genderGenerator);
        // if (this.genderGenerator === 1) {
        //     this.player = this.physics.add.sprite(960-960/6, 424, 'ourdude');
        // } else {
        //     this.player = this.physics.add.sprite(960-960/6, 424, 'ourgirl');
        // }

        this.toy = this.physics.add.sprite(Math.floor(Math.random()*960)+30, 424, 'toysoldier');
        this.toy.setCollideWorldBounds(true);
        this.toy.setScale(0.3);

        this.player = this.physics.add.sprite(960-960/6, 424, 'ourdude');
        this.player.setGravity(0, 800);
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);


       
        // This works
        // this.cameras.main.setBounds(0, -325, 3240, 3240);
        // this.cameras.main.setBounds(0, 0, 3240, 1920);
        this.physics.world.setBounds(30, 30, 900, 410);
        // this.physics.add.collider(this.player, this.tree);
        // this.player.setCollideWorldBounds(true);
        // var rect = new Phaser.Geom.Rectangle(250, 200, 250, 200);
        this.cameras.main.setBounds(0, 0, 960, 540);
        this.cameras.main.fadeIn(1500);
        this.cameras.main.startFollow(this.player, false, 0.5, 0.5);
        this.cameras.main.zoom = 2;

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

        this.eatButton = this.add.text(window.innerWidth/2,window.innerHeight+50, "Spis mad").setScrollFactor(0).setFontSize(15).setColor('#ffffff');
        this.eatButton.setInteractive()
        .on('pointerdown', function() {
            this.time.delayedCall(0, this.heal, [], this);
        }, this);


        this.toy.setInteractive()
        .on('pointerdown', function() {
            this.toy.destroy();
            this.foundyou.play();
            this.time.delayedCall(5000, this.toysoldierRespawn, [], this);
        }, this);
        // console.log(this.health);
        // setInterval(function(health){
            
        // }, 1000);
        this.time.delayedCall(1000, this.damage, [], this);
        this.time.delayedCall(1000, this.toysoldier, [], this);
        console.log(this.cameras.main);





        this.anims.create({
            key: 'runleft',
            frames: this.anims.generateFrameNumbers(this.player.texture.key, { start: 3, end: 5 }),
            frameRate: 5
        });

        this.anims.create({
            key: 'stand',
            frames: [{ key: this.player.texture.key, frame: 1 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'runright',
            frames: this.anims.generateFrameNumbers(this.player.texture.key, { start: 6, end: 8 }),
            frameRate: 5
        });


        
        this.anims.create({
            key: 'toywalk',
            frames: this.anims.generateFrameNumbers('toysoldier', { start: 0, end: 18 }),
            frameRate: 3,
            yoyo: false,
            repeat: -1
        });

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
        this.health.scaleX-= 0.01;
        

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
    toysoldier() {
        this.toy.anims.play('toywalk');
        var timeline = this.tweens.timeline({

            targets: this.toy,
            ease: 'Linear',
            easeParams: [1.5, 0.5],
            duration: 1500,
            loop: -1,
            tweens: [{
                x: this.toy.x-25
                
            },
            {
                x: this.toy.x-25
            },
            {
                x: this.toy.x
            },
            {
                x: this.toy.x
            },]
        });
    }
    toysoldierRespawn() {
        this.funbar.scaleX += 0.05;
        console.log("respawn called");
        this.toy = this.physics.add.sprite(Math.floor(Math.random()*850)+30, 424, 'toysoldier');
        this.toy.setCollideWorldBounds(true);
        this.toy.setScale(0.5);
        this.time.delayedCall(0, this.toysoldier, [], this);
        this.toy.setInteractive()
        .on('pointerdown', function() {
            this.toy.destroy();
            this.foundyou.play();
            this.time.delayedCall(Math.floor(Math.random() * 20000), this.toysoldierRespawn, [], this);
        }, this);
    }


    update(delta) {
        if (this.player.x >= 914) {
            this.scene.start("Example3");
        }
        this.health.x = this.cameras.main.midPoint.x;
        this.health.y = this.cameras.main.midPoint.y-170;
        this.funbar.x = this.cameras.main.midPoint.x;
        this.funbar.y = this.cameras.main.midPoint.y-150;

        var touchX = this.pointer.x;
        var touchY = this.pointer.y;

        if (this.pointer.isDown && this.player.y >= 424 && touchY < window.innerHeight/3) {
            this.player.setVelocityY(-400);
        } else if (this.pointer.isDown && touchX < window.innerWidth/2) {
            this.player.setVelocityX(-150);
            this.player.anims.play('runleft', true);
            // this.player.anims.play('left', true);
        } else if (this.pointer.isDown && touchX > window.innerWidth/2) {
            this.player.setVelocityX(150);
            this.player.anims.play('runright', true);
        } else {
            this.player.setVelocityX(0);
            this.player.anims.play('stand', true);
        }

    }


}