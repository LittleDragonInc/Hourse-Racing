BasicGame.Preloader = function (game) {

    this.background = null;
    this.preloadBar = null;
    this.music = null;
    this.ready = false;

};

BasicGame.Preloader.prototype = {

    preload: function () {

        this.background = this.add.sprite(0, 0, 'preloaderBackground');
        this.preloadBar = this.add.sprite(0, 0, 'preloaderBar');


        this.load.setPreloadSprite(this.preloadBar);


        this.load.image('titlepage', 'images/hourseRaces.png');
        this.load.image('black', 'images/black.png');

        this.load.image('bearButton', 'images/building.png');
        this.load.image('shop', 'images/buildingb.png');
        this.load.image('playClassic', 'images/linux_start.png');
        this.load.image('launch', 'images/fire.png');

        this.load.image('land', 'images/land.png');
        this.load.image('air', 'images/air.png');
        this.load.image('reward', 'images/reward.png');
        this.load.image('hourse', 'images/hourse.png');
        this.load.image('h1', 'images/h1.png');
        this.load.image('h2', 'images/h2.png');
        this.load.image('h3', 'images/h3.png');
        this.load.image('h4', 'images/h4.png');
        this.load.image('h5', 'images/h5.png');
        this.load.image('h6', 'images/h6.png');
        this.load.image('h7', 'images/h7.png');
        this.load.image('grassman', 'images/grassman.png');
        this.load.image('cave', 'images/cave.png');
        this.load.image('chute', 'images/chute.png');
        this.load.image('moon', 'images/moon.png');
        this.load.image('mountain', 'images/mountain.png');
        this.load.image('house', 'images/home.png');

        this.load.image('chopper', 'images/chopper.png');
        this.load.image('motocycle', 'images/motocycle.png');

        this.load.image('hourse2', 'images/hourse2.png');
        this.load.image('car', 'images/car.png');

        this.load.image('oran', 'images/oran.png');
        this.load.image('straw', 'images/straw.png');
        this.load.image('spaceship', 'images/spaceship.png');

        this.load.image('end', 'images/end1.png');
        this.load.audio('win', 'images/winner.ogg')
        this.load.image('shopBackground', 'images/shopBackground.png');
        this.load.audio('titleMusic', 'images/fishy.ogg');


        this.load.tilemap('mountainJ', 'images/mountain.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.tilemap('moonJ', 'images/moonm.json', null, Phaser.Tilemap.TILED_JSON);

        this.load.tilemap('caveJ', 'images/cave.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.tilemap('classicJ', 'images/classic.json', null, Phaser.Tilemap.TILED_JSON);

        this.load.image('test_map', 'images/air.png');
        this.load.image('moonm', 'images/moonm.png');
        this.load.image('cavem', 'images/cavem.png');
        this.load.image('mountainm', 'images/mountainm.png');
        this.load.image('classicm', 'images/classicm.png');
        this.load.image('moonmm', 'images/moonmm.png');
        this.load.image('cavemm', 'images/cavemm.png');
        this.load.image('mountainmm', 'images/mountainmm.png');
        this.load.image('classicmm', 'images/classicmm.png');


        this.load.image('sun', 'images/sun.png');
        this.load.image('c1', 'images/clouds.png');
        this.load.image('c2', 'images/cloud2.png');

        this.load.image('c3', 'images/cloud3.png');

    },

    create: function () {

        this.preloadBar.cropEnabled = false;

    },

    update: function () {

        if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)

        {
            this.ready = true;
            this.music = this.add.audio('titleMusic', 1, true);
            this.music.play('', 0, 1, true);

            this.game.state.start('MainMenu');
        }

    }

};