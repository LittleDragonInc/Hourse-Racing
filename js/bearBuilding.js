BasicGame.bearBuilding = function (game) {
    this.gameButton = null;
    this.oran = null;
    this.straw = null;
    var text;

};

BasicGame.bearBuilding.prototype = {

    create: function (pointer) {
        this.add.sprite(0, 0, 'shopBackground');

        vehicle = this.add.sprite(1920 / 2 - 100, 400, 'mountain');
        horse = this.add.sprite(1920 / 2 - 300, 600, 'hourse');

        horse.speed = 5;
        horse.accel = 5;
        horse.weight = 0;

        this.s1 = this.game.add.text(1920 / 2 - 100, 175, 'selected vehicle:', {
            font: "24px Arial",
            fill: "#FFFFFF",
            align: "center"
        });
        this.s2 = this.game.add.text(1920 / 2 - 100, 275, 'selected map:', {
            font: "24px Arial",
            fill: "#FFFFFF",
            align: "center"
        });
        this.s = this.game.add.text(1920 / 2 - 100, 200, c.charAt(0).toUpperCase() + c.slice(1), {
            font: "24px Arial",
            fill: "#FFFFFF",
            align: "center"
        });
        this.m = this.game.add.text(1920 / 2 - 100, 300, d.charAt(0).toUpperCase() + d.slice(1, -1), {
            font: "24px Arial",
            fill: "#FFFFFF",
            align: "center"
        });
        this.grassButton = this.add.button(1920 / 2 - 100, 700, 'grassman', this.startTesting, this);
        this.add.button(600, 250, 'car', this.MakeCar, this);
        this.add.button(400, 550, 'spaceship', this.MakeSpaceship, this);
        this.add.button(525, 400, 'chopper', this.MakeChopper, this);
        this.add.button(550, 700, 'motocycle', this.MakeMotocycle, this);
        this.add.button(600, 850, 'hourse', this.MakeHourse, this);
        this.add.button(1200, 150, 'moon', this.MakeMoon, this);
        this.add.button(1200, 406, 'mountain', this.MakeMountain, this);
        this.add.button(1200 + 256, 406, 'playClassic', this.MakeClassic, this);

        this.add.button(1200, 662, 'cave', this.MakeCave, this);


    },

    MakeCar: function (pointer) {

        c = 'car';
        this.s.content = c.charAt(0).toUpperCase() + c.slice(1)
        horse.kill();
        horse = this.add.sprite(1920 / 2 - 200, 600, 'car');
        f = 5; //speed
        g = 10; //gravity, related to weight
        a = .4; //accel
    },

    MakeSpaceship: function (pointer) {
        c = 'spaceship';
        this.s.content = c.charAt(0).toUpperCase() + c.slice(1)

        horse.kill();
        horse = this.add.sprite(1920 / 2 - 200, 600, 'spaceship');
        f = 10; //speed
        g = 100; //gravity, related to weight
        a = .1; //accel
    },
    MakeMotocycle: function (pointer) {
        c = 'motocycle';
        this.s.content = c.charAt(0).toUpperCase() + c.slice(1)

        horse.kill();
        horse = this.add.sprite(1920 / 2 - 200, 600, 'motocycle');
        f = 15; //speed
        g = 0; //gravity, related to weight
        a = .5; //accel
    },
    MakeChopper: function (pointer) {
        c = 'chopper';
        this.s.content = c.charAt(0).toUpperCase() + c.slice(1)

        horse.kill();
        horse = this.add.sprite(1920 / 2 - 200, 600, 'chopper');
        f = 25; //speed
        g = 200; //gravity, related to weight
        a = .2; //accel
    },
    MakeHourse: function (pointer) {
        c = 'hourse';
        this.s.content = c.charAt(0).toUpperCase() + c.slice(1)

        horse.kill();
        horse = this.add.sprite(1920 / 2 - 200, 600, 'hourse');
    },
    MakeMoon: function (pointer) {
        d = 'moonm';
        e = 'moonJ';
        this.m.content = d.charAt(0).toUpperCase() + d.slice(1, -1)

        vehicle.kill();
        vehicle = this.add.sprite(1920 / 2 - 100, 400, 'moon');
    },
    MakeMountain: function (pointer) {
        d = 'mountainm';
        e = 'mountainJ';
        this.m.content = d.charAt(0).toUpperCase() + d.slice(1, -1)

        vehicle.kill();
        vehicle = this.add.sprite(1920 / 2 - 100, 400, 'mountain');
    },
    MakeCave: function (pointer) {
        e = 'caveJ';
        d = 'cavem';
        this.m.content = d.charAt(0).toUpperCase() + d.slice(1, -1)

        vehicle.kill();
        vehicle = this.add.sprite(1920 / 2 - 100, 400, 'cave');
    },
    MakeClassic: function (pointer) {
        e = 'classicJ';
        d = 'classicm';
        this.m.content = d.charAt(0).toUpperCase() + d.slice(1, -1)

        vehicle.kill();
        vehicle = this.add.sprite(1920 / 2 - 100, 400, 'playClassic');
    },
    startGame: function (pointer) {
        this.game.state.start('Game');
    },
    startCar: function (pointer) {
        this.game.state.start('Car');

    },
    startSpaceship: function (pointer) {

        this.game.state.start('Spaceship');

    },
    startTesting: function (pointer) {

        this.game.state.start('Track', true, true);
    }
}