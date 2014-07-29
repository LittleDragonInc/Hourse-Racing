BasicGame.MainMenu = function (game) {
    this.playButton = null;
    this.bearButton = null;
};
BasicGame.MainMenu.prototype = {
    create: function (pointer) {

        this.s3;

        this.add.sprite(0, 0, 'titlepage');
        this.h1 = this.game.add.sprite(this.game.world.randomX, this.game.world.randomY, 'h1');
        this.h2 = this.game.add.sprite(this.game.world.randomX, this.game.world.randomY, 'h2');
        this.h3 = this.game.add.sprite(this.game.world.randomX, this.game.world.randomY, 'h3');
        this.h4 = this.game.add.sprite(this.game.world.randomX, this.game.world.randomY, 'h4');
        this.h5 = this.game.add.sprite(this.game.world.randomX, this.game.world.randomY, 'h5');
        this.h6 = this.game.add.sprite(this.game.world.randomX, this.game.world.randomY, 'h6');
        this.h7 = this.game.add.sprite(this.game.world.randomX, this.game.world.randomY, 'h7');
        this.looper = this.game.time.events.loop(Phaser.Timer.SECOND * 2.5, this.move, this);
        this.grassButton = this.add.button(1920 / 2 - 80, 100, 'grassman', this.startTesting, this);
        this.add.button(1920 / 2 - 100, 500, 'shop', this.bearBuilding, this);

        this.hourses = [this.h1, this.h2, this.h3, this.h4, this.h5, this.h6, this.h7];
    },
    update: function (pointer) {
        this.s3 = this.game.add.text(1920 / 2 - 400, 800, 'HourseByte Engine 1.1 Demo Version\nNever Stop Accelerating', {
            font: "48px Arial",
            fill: "#FFFFFF",
            align: "center"
        });

    },
    move: function (pointer) {
        for (var i = 0; i < 7; i++) {
            this.hourses[i].anchor.setTo(.5, 1);
            this.tempX = Math.random() * 25 - Math.random() * 25;
            if (25 < this.hourses[i].x + this.tempX < 775) {


                this.temp = Math.random() * 25 - Math.random() * 25;
                if (25 < this.hourses[i].y + this.temp < 275) {
                    if (this.temp < 0) this.hourses[i].scale.y = -1;
                    else {
                        this.hourses[i].scale.y = 1;
                    }
                    this.hourses[i].body.velocity.y = this.temp;
                    if (this.tempX < 0) this.hourses[i].scale.x = -1;
                    else {
                        this.hourses[i].scale.x = 1;
                    }
                    this.hourses[i].body.velocity.x = this.tempX;
                }
            }

        }
    },
    startTesting: function (pointer) {
        this.h2.destroy();
        this.h3.destroy();
        this.h4.destroy();
        this.h1.destroy();
        this.h5.destroy();
        this.h6.destroy();
        this.h7.destroy();
        this.game.state.start('Track', true, true);
        this.game.time.events.remove(this.looper);
    },

    bearBuilding: function (pointer) {
        this.h2.destroy();
        this.h3.destroy();
        this.h4.destroy();
        this.h1.destroy();
        this.h5.destroy();
        this.h6.destroy();
        this.h7.destroy();
        this.game.state.start('bearBuilding', true, true);
        this.game.time.events.remove(this.looper);
    }
};