
BasicGame.MainMenu = function (game) {
	this.playButton = null;
	this.bearButton = null;
	


};

BasicGame.MainMenu.prototype = {

		create: function (pointer) {


	//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
	//	Here all we're doing is playing some music and adding a picture and button
	//	Naturally I expect you to do something significantly better :)

	//
	this.temp;
	this.add.sprite(0, 0, 'titlepage');
	this.h1 = this.game.add.sprite(this.game.world.randomX, this.game.world.randomY, 'h1');
	this.h2 = this.game.add.sprite(this.game.world.randomX, this.game.world.randomY, 'h2');
	this.h3 = this.game.add.sprite(this.game.world.randomX, this.game.world.randomY, 'h3');
	this.h4 = this.game.add.sprite(this.game.world.randomX, this.game.world.randomY, 'h4');
	this.h5 = this.game.add.sprite(this.game.world.randomX, this.game.world.randomY, 'h5');
	this.h6 = this.game.add.sprite(this.game.world.randomX, this.game.world.randomY, 'h6');
	this.h7 = this.game.add.sprite(this.game.world.randomX, this.game.world.randomY, 'h7');
	this.hourses = [this.h1,this.h2,this.h3,this.h4,this.h5,this.h6,this.h7];
	this.looper = this.game.time.events.loop(Phaser.Timer.SECOND*2.5, this.move, this);

	this.playButton = this.add.button(50, 200, 'playButton', this.startGame, this);
	this.bearButton = this.add.button(590, 50, 'bearButton', this.bearBuilding, this);


},
move: function (pointer) {

	for (var i = 0; i <7;i++) {
		this.hourses[i].anchor.setTo(.5, 1);
		this.temp = Math.random() * 100 - Math.random() *  100;
		if (25 < this.hourses[i].x + this.temp < 775){
			if (this.temp < 0) this.hourses[i].scale.x = -1;
			else {this.hourses[i].scale.x = 1;}		
			this.hourses[i].body.velocity.x = this.temp;

		}
		this.temp = Math.random() * 100 - Math.random() *  100;

		if (25 < this.hourses[i].y + this.temp < 275){
			if (this.temp < 0) this.hourses[i].scale.y = -1;
			else {this.hourses[i].scale.y = 1;}		
			this.hourses[i].body.velocity.y = this.temp;
		}
	}
},
bearBuilding: function (pointer) {
	this.h2.destroy();
		this.h3.destroy();

			this.h4.destroy();

				this.h1.destroy();

					this.h5.destroy();
	this.h6.destroy();
	this.h7.destroy();
	this.game.state.start('bearBuilding',true,true);
	this.game.time.events.remove(this.looper);

},
startGame: function (pointer) {
	this.h2.destroy();
		this.h3.destroy();

			this.h4.destroy();

				this.h1.destroy();

					this.h5.destroy();
	this.h6.destroy();
	this.h7.destroy();
	//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)

	//	And start the actual game
	this.game.state.start('Game',true,true);
this.game.time.events.remove(this.looper);}

};
