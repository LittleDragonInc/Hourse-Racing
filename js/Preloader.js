
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

		preload: function () {

	//	These are the assets we loaded in Boot.js
	//	A nice sparkly background and a loading progress bar
	this.background = this.add.sprite(0, 0, 'preloaderBackground');
	this.preloadBar = this.add.sprite(0, 0, 'preloaderBar');

	//	This sets the preloadBar sprite as a loader sprite.
	//	What that does is automatically crop the sprite from 0 to full-width
	//	as the files below are loaded in.
	this.load.setPreloadSprite(this.preloadBar);

	//	Here we load the rest of the assets our game needs.
	//	As this is just a Project Template I've not provided these assets, swap them for your own.
	this.load.image('titlepage', 'images/hourseRaces.png');
	this.load.image('black', 'images/black.png');

	this.load.image('bearButton', 'images/building.png');
	this.load.image('playButton', 'images/linux_start.png');
	this.load.image('launch','images/fire.png');

	this.load.image('land','images/land.png');
	this.load.image('air','images/air.png');
	this.load.image('reward','images/reward.png');
	this.load.image('hourse','images/hourse.png');
	this.load.image('h1','images/h1.png');
	this.load.image('h2','images/h2.png');
	this.load.image('h3','images/h3.png');
	this.load.image('h4','images/h4.png');
	this.load.image('h5','images/h5.png');
	this.load.image('h6','images/h6.png');
	this.load.image('h7','images/h7.png');



	this.load.image('hourse2','images/hourse2.png');
	this.load.image('car','images/car.png');

	this.load.image('oran','images/oran.png');
	this.load.image('straw','images/straw.png');
	this.load.image('spaceship','images/spaceship.png');

	this.load.image('end','images/end1.png');
	this.load.audio('win','images/winner.ogg')
	this.load.audio('titleMusic', 'images/Voyage.ogg');


	//	this.load.bitmapFont('desyrel', 'fonts/desyrel.png', 'fonts/desyrel.xml');
	//	+ lots of other required assets here

},

create: function () {

	//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
	this.preloadBar.cropEnabled = false;

},

update: function () {

	//	You don't actually need to do this, but I find it gives a much smoother game experience.
	//	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
	//	You can jump right into the menu if you want and still play the music, but you'll have a few
	//	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
	//	it's best to wait for it to decode here first, then carry on.

	//	If you don't have any music in your game then put the game.state.start line into the create function and delete
	//	the update function completely.

	if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
	{
		this.ready = true;
		this.music = this.add.audio('titleMusic',1,true);
		this.music.play('',0,1,true);

		this.game.state.start('MainMenu');
	}

}

};
