BasicGame.Track = function (game) {};
BasicGame.Track.prototype = {
    create: function (pointer) {
	
		//next few lines for map setup
        this.game.world.setBounds(0, 0, 8000, 1000);
        this.map = this.game.add.tilemap(e);

        this.map.addTilesetImage('air', 'test_map');

        this.flat = this.map.createLayer('Tile Layer 1');

        this.map.setCollisionByExclusion([], true, this.flat);

        this.trackbackground = this.game.add.sprite(0, 0, d);
        var x = d + "m";
        this.trackbackground = this.game.add.sprite(4000, 0, x);
        this.started = 0;

        this.landTile = null;
        this.end = null;
        this.end2 = null;
        this.airTile = null;
        this.hourse = null;
        this.hourse2 = null;
        this.launch = null;
        this.spacebar;
        this.speed = 0;
        this.rightKey;
        this.leftKey;
        this.upKey;
        this.downKey;
        this.speedometer;
        this.gearMeter;
        this.gear = 0;
        this.shiftTimer = 0;
        this.accelTimer = 0;
        this.tiltTimer = 0;
        this.aiCount = 1;
        this.acceleration = 0;
        this.distance = 0;
        this.decel = .1;
        this.startTime = 0;
        this.victory = 0;
        this.score = 0;
        this.gamePrompt;
        this.fixed;
        this.eHeight = 32;
        this.win = 0;
        this.gearArray = [9 + f, 14 + f, 18 + f, 24 + f, 27 + f];
        this.gearAccel = [.8 + a, .6 + a, .45 + a, .3 + a, .2 + a];
        this.h1 = this.game.add.sprite(-24, 600, 'h1');
        this.h2 = this.game.add.sprite(-24, 600, 'h2');
        this.h3 = this.game.add.sprite(-24, 600, 'h3');
        this.h4 = this.game.add.sprite(-24, 600, 'h4');
        this.h5 = this.game.add.sprite(-24, 600, 'h5');
        this.h6 = this.game.add.sprite(-24, 600, 'h6');
        this.h7 = this.game.add.sprite(-30, 600, 'h7');

        this.hourse = this.game.add.sprite(0, 600, c);
        this.hourse.body.gravity.y = 550 + g;
        this.hourse.body.velocity.y = 50;
        this.hourse2 = this.game.add.sprite(0, 600, 'hourse2');
        this.hourse2.body.gravity.y = 550;
        this.hourse2.body.velocity.y = 100;
        this.h1.body.gravity.y = 550;
        this.h1.body.velocity.y = 100;
        this.h2.body.gravity.y = 550;
        this.h2.body.velocity.y = 100;
        this.h3.body.gravity.y = 550;
        this.h3.body.velocity.y = 100;
        this.h4.body.gravity.y = 550;
        this.h4.body.velocity.y = 100;
        this.h5.body.gravity.y = 550;
        this.h5.body.velocity.y = 100;
        this.h6.body.gravity.y = 550;
        this.h6.body.velocity.y = 100;
        this.h7.body.gravity.y = 550;
        this.h7.body.velocity.y = 100;
        this.winner;
        this.winTime;
        this.sun = this.game.add.sprite(this.game.world.randomX, 0, 'sun');
        this.chute = this.game.add.sprite(-500, -500, 'chute');
        this.c1 = this.game.add.sprite(this.game.world.randomX, 50, 'c1');
        this.c2 = this.game.add.sprite(this.game.world.randomX, 50, 'c2');
        this.c3 = this.game.add.sprite(this.game.world.randomX, 50, 'c3');
        this.inanimate = [this.c1, this.c2, this.c3, this.sun];
        this.inanimate = [this.c1, this.c2, this.c3, this.sun];

        this.hourseArray = [this.hourse, this.hourse2, this.h1, this.h2, this.h3, this.h4, this.h5, this.h6, this.h7];
        this.hourseYposition = [this.hourse.y, this.hourse2.y, this.h1.y, this.h2.y, this.h3.y, this.h4.y, this.h5.y, this.h6, this.h7.y];


        this.tilt = [0];
        this.end = this.game.add.sprite(7800, 0, 'end');
        this.end.body.gravity.y = 250;
        this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
        this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        this.speedometer = this.game.add.text(1920 / 2 - 550, 100, 'Speed: 0', {
            font: "24px Arial",
            fill: "#C0C0C0",
            align: "center"
        });
        this.speedometer.fixedToCamera = true;

        this.score = this.game.add.text(1920 / 2 - 100, 1080 / 2, '', {
            font: "128px Arial",
            fill: "#FFFF00",
            align: "center"
        });

        this.score.fixedToCamera = true;
        this.gearMeter = this.game.add.text(1920 / 2 - 100, 100, 'Gear: 1', {
            font: "24px Arial",
            fill: "#C0C0C0",
            align: "center"
        });
        this.gearMeter.fixedToCamera = true;

        this.gamePrompt = this.game.add.text(1920 / 2 + 350, 100, '', {
            font: "24px Arial",
            fill: "#FF0000",
            align: "center"
        });
        this.gamePrompt.fixedToCamera = true;
        this.winPrompt = this.game.add.text(1920 / 2, 300, '', {
            font: "24px Arial",
            fill: "#FF0000"

        });
        this.winPrompt.fixedToCamera = true;

        this.victory = this.game.add.audio('win', 1, true);
    },
    update: function (pointer) {

        this.game.physics.collide(this.hourse, this.end, this.collisionHandler3, null, this);
        this.game.physics.collide(this.hourse2, this.end, this.collisionHandler3, null, this);

        this.game.physics.collide(this.h1, this.end, this.collisionHandler3, null, this);
        this.game.physics.collide(this.h2, this.end, this.collisionHandler3, null, this);
        this.game.physics.collide(this.h3, this.end, this.collisionHandler3, null, this);
        this.game.physics.collide(this.h4, this.end, this.collisionHandler3, null, this);
        this.game.physics.collide(this.h5, this.end, this.collisionHandler3, null, this);
        this.game.physics.collide(this.h6, this.end, this.collisionHandler3, null, this);
        this.game.physics.collide(this.h7, this.end, this.collisionHandler3, null, this);

        this.game.physics.collide(this.hourse2, this.flat);
        this.game.physics.collide(this.end, this.flat);

        if (this.started == 0)
            for (var i = 0; i < this.hourseArray.length; i++) this.hourseYposition[i] = this.hourseArray[i].y;

        this.game.physics.collide(this.h1, this.flat);
        this.game.physics.collide(this.h2, this.flat);
        this.game.physics.collide(this.h3, this.flat);
        this.game.physics.collide(this.h4, this.flat);
        this.game.physics.collide(this.h5, this.flat);
        this.game.physics.collide(this.h6, this.flat);
        this.game.physics.collide(this.h7, this.flat);

        this.game.physics.collide(this.hourse, this.flat);

        if (this.game.time.now > this.accelTimer) {
            this.decel = .01 * this.speed;
			//non hourse npc movements
            for (var i = 0; i != this.inanimate.length; i++)
                this.inanimate[i].x = this.inanimate[i].x + Math.random() * 10 + Math.random() * -10;

            this.game.camera.focusOn(this.hourse);
            if (this.game.time.now > this.tiltTimer) {
			//tilting
                for (var i = 0; i < this.hourseArray.length; i++) {
                    if (this.hourseYposition[i] != this.hourseArray[i].y) {
                        if (this.hourseYposition[i] > this.hourseArray[i].y) {
                            this.hourseArray[i].angle = -20;
                        } else {
                            this.hourseArray[i].angle = 20;
                        }
                        this.hourseYposition[i] = this.hourseArray[i].y;

                    } else {
                        this.hourseArray[i].angle = 0;
                    }

                }
                this.tiltTimer = this.game.time.now + 50;

            }
			
            if (this.startTime != 0)
                for (var i = 1; i != this.hourseArray.length; i++) {
                    this.hourseArray[i].x = this.hourseArray[i].x + Math.random() * (40 + (f * 1.5) - (a * 10));
                }
            if (this.speed > 0) {
			//various arrow key actions
                if ((this.speed - this.decel) < 0) {
                    this.speed = 0;
                } else {
                    this.speed = this.speed - this.decel;
                }
            }
            if (this.rightKey.isDown && this.win == 0) {
                if (this.startTime == 0) {
                    this.startTime = this.game.time.now;
                    this.started = 1;
                }
                if (this.speed < this.gearArray[this.gear]) {
                    this.acceleration = this.speed + this.gearAccel[this.gear];
                    this.speed = this.acceleration;
                    this.distance = this.distance + this.acceleration;
                } else if (this.speed > this.gearArray[this.gear]) {
                    this.speed = this.gearArray[this.gear];
                    this.acceleration = this.speed;
                    this.distance = this.distance + this.acceleration;
                    if (this.gear != 4) this.gamePrompt.content = "UP TO SHIFT";
                } else {
                    this.acceleration = this.speed + this.decel;
                    this.speed = this.speed + this.decel;
                    this.distance = this.distance + this.acceleration;
                }
            } else {
                this.acceleration = this.speed;
                this.distance = this.distance + this.acceleration;
            }
            if (this.leftKey.isDown && this.win == 0) {
                this.chute.x = this.hourse.x - 100;
                this.chute.y = this.hourse.y - 300;
                if (this.hourse.body.onFloor()) {
                    this.hourse.body.gravity.y = 250;
                    this.speed = this.speed * .5;
                } else {
                    this.hourse.body.gravity.y = 0;
                    if (this.speed < 30) {
                        this.speed = this.speed + .5;
                    }
                    this.hourse.body.velocity.y = 100;

                }
            }
            if (this.leftKey.isUp && this.win == 0) {
                this.chute.x = -500;
                this.chute.y = -500;
                this.hourse.body.gravity.y = 550;
                this.hourse.body.velocity.y = 100;
            }
            this.hourse.x = this.distance;
            this.speedometer.content = 'Speed: ' + Number(this.speed).toFixed(1);
            this.accelTimer = this.game.time.now + 100;

        }
        if (this.upKey.isDown && this.game.time.now > this.shiftTimer && this.win == 0) {
            this.gamePrompt.content = "";
            if (this.gear < 4) {
                this.gear = this.gear + 1;
                this.gearMeter.content = 'Gear: ' + (this.gear + 1);
                this.shiftTimer = this.game.time.now + 500;
            }
        }
        if (this.downKey.isDown && this.game.time.now > this.shiftTimer && this.win == 0) {
            this.gamePrompt.content = "SPEED LOWERED";
            if (this.gear > 0) {
                this.gear = this.gear - 1;
                if (this.speed > this.gearArray[this.gear]) {
                    this.speed = this.gearArray[this.gear];
                }
                this.gearMeter.content = 'Gear: ' + (this.gear + 1);
                this.shiftTimer = this.game.time.now + 500;
            }
        }

    },
    quitGame: function (pointer) {

        this.game.state.start('MainMenu', true, true);
    },
    collisionHandler3: function (h) {
	//win conditions
        if (h == this.hourse) {
            this.win = 1;
            this.speed = 0;
            this.winner = c.charAt(0).toUpperCase() + c.slice(1);
            if (this.aiCount == 1) {
                this.f = this.gamePrompt.font;
                this.f.fill = '#00FF00';
                this.gamePrompt.setStyle(this.f);
                this.gamePrompt.content = "You Win";
                this.gearMeter.content = "";
                this.speedometer.content = "";

            } else {
                this.gamePrompt.content = "You Lost"
                this.gamePrompt.destroy;
                this.gearMeter.content = "";
                this.speedometer.content = "";

            }
            this.add.button(8000 - 1700, 550, 'house', this.quitGame, this);

        } else {

            this.winner = "Artificial Hourse Number" + this.aiCount;
            this.aiCount = this.aiCount + 1;
        }
        this.winTime = Number((this.game.time.now - this.startTime) / 1000).toFixed(1);
        this.winPrompt.content = this.winPrompt.content + "\n" + this.winTime + " " + this.winner;
        this.end.x = 7800;
        console.log(this.end.y);
        this.explosions = this.game.add.sprite(7800 + this.eHeight, this.end.y + 725, 'launch');

        this.eHeight = this.eHeight + 32;
        h.kill();
        this.victory.play('', 0, 1, false);
    }
};