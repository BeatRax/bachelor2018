class Example1 extends Phaser.Scene {
    constructor() {
        super({ key: "Example1" });
    }

    preload() {



        this.load.image('backdrop', '../img/assets/Progression screen.png');
        this.load.spritesheet('dude',
            '../img/assets/dude.png',
            { frameWidth: 32, frameHeight: 48 }
        );
        this.load.spritesheet('dude-hat',
            '../img/assets/dude-hat.png',
            { frameWidth: 32, frameHeight: 48 }
        );
    }

    create() {
        // firebase.initializeApp({
        //     apiKey: "AIzaSyBB5FrvVkgwLiRw0-oBG0s2sd5SlffYeTI",
        //     authDomain: "usedtoys-e4d2b.firebaseapp.com",
        //     databaseURL: "https://usedtoys-e4d2b.firebaseio.com",
        //     projectId: "usedtoys-e4d2b"
        // });
        // var db = firebase.firestore();
        // db.settings({
        //     timestampsInSnapshots: true
        // });
        // // Showproducts
        // // Get user details

        // var docRef = db.collection("users").doc("39lZ0QEbiUay5fTEvVeUaXSVFik1").collection("GameDetails").doc('game');

        // docRef.get().then(function (doc) {
        //     var userLevel = doc.data().level;
        //     console.log("users level is: " + userLevel);

        // }).catch(function (error) {
        //     console.log("Error getting document:", error);
        // });
        const userLevel = 0;
        // var playerLevel = 1;
        var levels = {
            1: {
                x: 661,
                y: 1762
            },
            2: {
                x: 375,
                y: 1574
            },
            3: {
                x: 839,
                y: 1324
            },
            4: {
                x: 345,
                y: 1072
            },
            5: {
                x: 853,
                y: 840
            },
            6: {
                x: 675,
                y: 562
            },
            7: {
                x: 209,
                y: 466
            },
            8: {
                x: 559,
                y: 142
            },
        }


        //   this.player = this.add.sprite(levels[doc.data().level].x, levels[doc.data().level].y, 'dude');
        this.image = this.add.image(0, 0, 'backdrop').setOrigin(0);
        // this.image.setScale(600);
        this.player = this.add.sprite(661, 1762, 'dude');
        // this.player = this.physics.add.image(0, 0, 'dude');
        // var thisPlayer = this.player = this.add.sprite(661, 1762, 'dude');
        // this.player = this.add.sprite(661, 1762, 'dude');
        this.player.setScale(2);
        // this.cameras.main.setBounds(-1920, 1920, 0, 1080);
        // this.world.setBounds(-1920, 0, 1920, 3240);
        // this.player.setCollideWorldBounds(true);
        // this.cameras.main.setSize(window.innerHeight, window.innerWidth);
        this.cameras.main.setBounds(0, 0, 1080, 1920);
        // this.cameras.main.setBounds(0, 0, 1920, 1080);
        this.cameras.main.fadeIn(1500);
        this.cameras.main.startFollow(this.player, true, 0.4, 0.4);
        // this.cameras.main.startFollow(this.player, true);
        this.cameras.main.zoom = 1;

        this.key_UP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.key_DOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.key_RIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.key_LEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 5,
            repeat: -1
        });




        this.anims.create({
            key: 'left-hat',
            frames: this.anims.generateFrameNumbers('dude-hat', { start: 0, end: 3 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'turn-hat',
            frames: [{ key: 'dude-hat', frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right-hat',
            frames: this.anims.generateFrameNumbers('dude-hat', { start: 5, end: 8 }),
            frameRate: 5,
            repeat: -1
        });



        this.input.keyboard.on('keyup', function (event) {

            if (event.key == "1") {
                this.player.anims.play('right');
                var tween = this.tweens.add({
                    targets: this.player,
                    x: 661,
                    y: 1762,
                    duration: 2000,
                    ease: "Linear",
                    easeParams: [1.5, 0.5],
                    delay: 200,
                    onComplete: function (src, tgt) {
                        this.targets[0].anims.stop();
                        this.targets[0].anims.play('turn');
                    }
                });
            }
            if (event.key == "2") {
                this.player.anims.play('left');
                var tween = this.tweens.add({
                    targets: this.player,
                    x: 375,
                    y: 1574,
                    duration: 2000,
                    ease: "Linear",
                    easeParams: [1.5, 0.5],
                    delay: 200,
                    onComplete: function (src, tgt) {
                        this.targets[0].anims.stop();
                        this.targets[0].anims.play('turn');
                    }
                });
            }
            if (event.key == "3") {
                this.player.anims.play('right');
                var tween = this.tweens.add({
                    targets: this.player,
                    x: 839,
                    y: 1324,
                    duration: 2000,
                    ease: "Linear",
                    easeParams: [1.5, 0.5],
                    delay: 200,
                    onComplete: function (src, tgt) {
                        this.targets[0].anims.stop();
                        this.targets[0].anims.play('turn');
                    }
                });
            }
            if (event.key == "4") {
                this.player.anims.play('left');
                var tween = this.tweens.add({
                    targets: this.player,
                    x: 345,
                    y: 1072,
                    duration: 2000,
                    ease: "Linear",
                    easeParams: [1.5, 0.5],
                    delay: 200,
                    onComplete: function (src, tgt) {
                        this.targets[0].anims.stop();
                        this.targets[0].anims.play('turn');
                    }
                });
            }
            if (event.key == "5") {
                this.player.anims.play('right');
                var tween = this.tweens.add({
                    targets: this.player,
                    x: 853,
                    y: 840,
                    duration: 2000,
                    ease: "Linear",
                    easeParams: [1.5, 0.5],
                    delay: 200,
                    onComplete: function (src, tgt) {
                        this.targets[0].anims.stop();
                        this.targets[0].anims.play('turn');
                    }
                });
            }
            if (event.key == "6") {
                this.player.anims.play('left');
                var tween = this.tweens.add({
                    targets: this.player,
                    x: 675,
                    y: 562,
                    duration: 2000,
                    ease: "Linear",
                    easeParams: [1.5, 0.5],
                    delay: 200,
                    onComplete: function (src, tgt) {
                        this.targets[0].anims.stop();
                        this.targets[0].anims.play('turn');
                    }
                });
            }
            if (event.key == "7") {
                this.player.anims.play('left');
                var tween = this.tweens.add({
                    targets: this.player,
                    x: 209,
                    y: 466,
                    duration: 2000,
                    ease: "Linear",
                    easeParams: [1.5, 0.5],
                    delay: 200,
                    onComplete: function (src, tgt) {
                        this.targets[0].anims.stop();
                        this.targets[0].anims.play('turn');
                    }
                });
            }
            if (event.key == "8") {
                this.player.anims.play('right');
                var tween = this.tweens.add({
                    targets: this.player,
                    x: 559,
                    y: 142,
                    duration: 2000,
                    ease: "Linear",
                    easeParams: [1.5, 0.5],
                    delay: 200,
                    onComplete: function (src, tgt) {
                        this.targets[0].anims.stop();
                        this.targets[0].anims.play('turn');
                    }
                });

            }
        }, this);




        this.helloButton = this.add.text(window.innerWidth-80,window.innerHeight-130, "level up!").setScrollFactor(0).setFontSize(15).setColor('#ffffff');
        this.helloButton.setInteractive();
        this.helloButton.on("pointerdown", this.levelUp, this);

        this.ChangeScreen = this.add.text(0,window.innerHeight-130, "Avatar Screen").setScrollFactor(0).setFontSize(15).setColor('#ffffff');
        this.ChangeScreen.setInteractive()
        .on('pointerdown', function() {
            this.scene.start("Example2");
        }, this);
    }


    levelUp(userLevel) {
        console.log(userLevel);
        this.player.anims.play('left');
        var tween = this.tweens.add({
            targets: this.player,
            x: 375,
            y: 1574,
            duration: 2000,
            ease: "Linear",
            easeParams: [1.5, 0.5],
            delay: 200,
            onComplete: function (src, tgt) {
                this.targets[0].anims.stop();
                this.targets[0].anims.play('turn');
                console.log(this);
                var items = "Du har låst op for tingen:\nGrøn kasket\nGå til avatarskærm for at prøve dem!";

                // var text2 = game.add.text(100, 300, haiku2,  { font: "32px Arial", fill: '#ffffff', backgroundColor: 'rgba(0,255,0,0.25)' });
                this.parent.scene.add.text(this.targets[0].x-100, this.targets[0].y, items, { font: "15px Impact", backgroundColor: 'rgba(0,0,0,0.5)' });
                // this.add.text(this.player.x, this.player.y, "Du har låst op for ...", { font: "40px Impact" });

            }
        });

    }

    update(delta) {
        // var cam = this.cameras.main;
        // console.log(cam.midPoint.X, cam.midPoint.Y);
        // this.helloButton.x = this.player.x - 120;
        // this.helloButton.y = this.player.y - 100;

        // this.ChangeScreen.x = this.player.x - 120;
        // this.ChangeScreen.y = this.player.y + 100;
        // console.log(this.hest);

        // console.log(this.player.x, this.player.y);s

        if (this.key_UP.isDown) {
            this.cameras.main.y += 100;

        }
        if (this.key_DOWN.isDown) {
            this.cameras.main.y -= 100;
        }
        if (this.key_RIGHT.isDown) {
            this.cameras.main.x += 100;
            // this.player.anims.play('right');
        }
        if (this.key_LEFT.isDown) {
            this.cameras.main.x -= 100;
            // this.player.anims.play('left');
        }
        // text.setText([
        //     'ScrollX: ' + cam.scrollX,
        //     'ScrollY: ' + cam.scrollY,
        //     'MidX: ' + cam.midPoint.x,
        //     'MidY: ' + cam.midPoint.y
        // ]);
    }


}