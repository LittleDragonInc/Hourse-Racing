BasicGame.bearBuilding = function(game) {
	this.gameButton = null;
	this.oran = null;
	this.straw = null;
};

BasicGame.bearBuilding.prototype = {

		create:function(pointer) {
	this.add.sprite(0, 0, 'black');
	this.gameButton = this.add.button(50, 200, 'playButton', this.startGame, this);
	this.oran = this.add.button(475,25, 'oran', this.startCar, this);
	this.straw = this.add.button(175, 25, 'straw', this.startSpaceship, this);

},

startGame: function (pointer) {
	this.game.state.start('Game');
},
startCar: function (pointer) {
	this.game.state.start('Car');

},
startSpaceship: function (pointer) {

	this.game.state.start('Spaceship');

}
}
