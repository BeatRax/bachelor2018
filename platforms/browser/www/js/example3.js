class Example3 extends Phaser.Scene {
    constructor() {
        super({ key: "Example3" });
    }
    
    preload() {
        this.load.image('garden', '../img/assets/garden.png');
        // this.load.spritesheet('ourdude',
        //     '../img/assets/dude.png',
        //     { frameWidth: 32, frameHeight: 48 }
        // );
        this.load.spritesheet('ourdude',
            '../img/assets/boy.png',
            { frameWidth: 30.6, frameHeight: 31.8 }
        );
        this.load.spritesheet('ourgirl',
            '../img/assets/girl.png',
            { frameWidth: 30.6, frameHeight: 31.8 }
        );
        this.load.spritesheet('tree',
            '../img/assets/trees.png',
            { frameWidth: 187.6, frameHeight: 187 }
        );
        
    }

    create() {
        this.x = 70;
        this.y = 50;
        this.currentRow = 1;
        this.garden = this.add.image(0, 0, 'garden').setOrigin(0);
        // this.genderGenerator = Math.floor(Math.random() * 2) + 1;;
        // console.log(this.genderGenerator);
        // if (this.genderGenerator === 1) {
        //     this.player = this.physics.add.sprite(50, 960-960/6, 'ourdude');
        // } else {
        //     this.player = this.physics.add.sprite(50, 960-960/6, 'ourgirl');
        // }
        this.player = this.physics.add.sprite(50, 960-960/6, 'ourdude');
        console.log(this.player.texture.key);
        // this.add.image(64, 0, 'tree', 1);
        // this.add.image(128, 0, 'tree', 2);
        // this.add.image(32, 32, 'tree', 3);
        // this.add.image(96, 32, 'tree', 4);
        // this.player = this.add.sprite(300, 300, 'dude');
        // this.player = this.physics.add.sprite(580/2, 960-960/6, 'ourdude');
        this.player.body.allowGravity = false;
        this.physics.world.setBounds(30, 30, 480, 860);
        this.physics.add.collider(this.player, this.tree);
        this.player.setCollideWorldBounds(true);
        var rect = new Phaser.Geom.Rectangle(250, 200, 250, 200);
        // this.cameras.main.setBounds(0, 0, 1080, 1920);
        this.cameras.main.setBounds(0, 0, 543, 960);
        this.cameras.main.fadeIn(1500);
        this.cameras.main.startFollow(this.player, true, 0.4, 0.4);
        this.cameras.main.zoom = 1.4;
        this.cursors = this.input.keyboard.createCursorKeys();

        this.pointer = this.input.activePointer;

        // this.anims.create({
        //     key: 'runleft',
        //     frames: this.anims.generateFrameNumbers('ourdude', { start: 0, end: 3 }),
        //     frameRate: 5,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'stand',
        //     frames: [{ key: 'ourdude', frame: 4 }],
        //     frameRate: 20
        // });

        // this.anims.create({
        //     key: 'runright',
        //     frames: this.anims.generateFrameNumbers('ourdude', { start: 5, end: 8 }),
        //     frameRate: 5,
        //     repeat: -1
        // });
        this.anims.create({
            key: 'runleftgarden',
            frames: this.anims.generateFrameNumbers(this.player.texture.key, { start: 3, end: 5 }),
            frameRate: 7
        });

        this.anims.create({
            key: 'standgarden',
            frames: [{ key: this.player.texture.key, frame: 1 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'runrightgarden',
            frames: this.anims.generateFrameNumbers(this.player.texture.key, { start: 6, end: 8 }),
            frameRate: 7
        });
        this.anims.create({
            key: 'rundown',
            frames: this.anims.generateFrameNumbers(this.player.texture.key, { start: 0, end: 2 }),
            frameRate: 7
        });
        this.anims.create({
            key: 'runup',
            frames: this.anims.generateFrameNumbers(this.player.texture.key, { start: 9, end: 11 }),
            frameRate: 7
        });
        // this.game.time.events.add(Phaser.Timer.SECOND * 3, createTree, this);
        this.time.delayedCall(1000, this.createTree, [], this);
    }

    createTree() {
        // console.log(this.x,this.y);
        // console.log(this.currentRow);

        if (this.x === 470 && this.y === 750) {
            this.tree = this.add.image(this.x, this.y, 'tree', Math.floor(Math.random() * 9));
            this.tree.setScale(0.5);
            // alert("You won the game!");
            return
        }
        if (this.x === 540) { 
            this.x = 330;
            this.y += 50;
            this.currentRow++;
        } else if (this.x === 280 && this.y === 750) {
            this.x = 330;
            this.y = 50;
            this.currentRow = 1;
        } else if (this.x === 280) {
            this.x = 70;
            this.y += 50;
            this.currentRow++;
        } 
        // this.add.image(Math.floor(Math.random() * 450) + 50, Math.floor(Math.random() * 700) + 30, 'tree', Math.floor(Math.random() * 6));
        this.tree = this.add.image(this.x, this.y, 'tree', Math.floor(Math.random() * 9));
        this.tree.setScale(0.5);
        this.x += 70;
        // this.y += 50;
        this.time.delayedCall(300, this.createTree, [], this);
    }


    update() {
        if (this.player.x <= 45) {
            this.scene.start("Example2");
        }
        console.log(this.player.x),
        this.player.setVelocity(0);
        // 
        var touchX = this.pointer.x;
        var touchY = this.pointer.y;

        if (this.pointer.isDown && touchX < window.innerWidth/3 ) {
            this.player.x -= 2;
            this.player.anims.play('runleftgarden', true);
        } else if (this.pointer.isDown && touchX > window.innerWidth-window.innerWidth/3) {
            this.player.x += 2;
            this.player.anims.play('runrightgarden', true);
        } else if (this.pointer.isDown && touchY < window.innerHeight/3) {
            this.player.y -= 2;
            this.player.anims.play('runup', true);
        } else if (this.pointer.isDown && touchY > window.innerHeight-window.innerWidth/3-55) {
            this.player.y += 2;
            this.player.anims.play('rundown', true);
        } else {
            this.player.anims.play('standgarden', true);
        }
    }
}