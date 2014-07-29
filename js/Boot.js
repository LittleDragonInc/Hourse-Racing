BasicGame = {};

BasicGame.Boot = function (game) {
    c = "hourse"; //current hourse
    d = "mountainm"; //current map
    e = 'mountainJ'; //current map
    f = 0; //speed
    g = 0; //gravity, related to weight
    a = 0; //acceleration mod
};

BasicGame.Boot.prototype = {

    preload: function () {

        this.load.image('preloaderBackground', 'images/loading_secure.png');
        this.load.image('preloaderBar', 'images/loading.png');

    },

    create: function () {

        this.game.input.maxPointers = 1;

        this.game.stage.disableVisibilityChange = true;

        if (this.game.device.desktop) {
            this.game.stage.scale.pageAlignHorizontally = true;

        } else {

            this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
            this.game.stage.scale.minWidth = 270;
            this.game.stage.scale.minHeight = 100;
            this.game.stage.scale.maxWidth = 800;
            this.game.stage.scale.maxHeight = 300;
            this.game.stage.scale.forceLandscape = true;
            this.game.stage.scale.pageAlignHorizontally = true;
            this.game.stage.scale.setScreenSize(true);
        }

        this.game.state.start('Preloader');

    }

};