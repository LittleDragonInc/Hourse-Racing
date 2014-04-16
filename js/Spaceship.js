
BasicGame.Spaceship = function (game) {


};

BasicGame.Spaceship.prototype = {

		create: function (pointer) {
	this.landTile;
	this.end;
	this.end2;
	this.airTile;
	this.hourse;
	this.hourse2;
	this.launch;
	this.spacebar;
	this.speed = 0;
	this.rightKey;
	this.upKey;
	this.downKey;
	this.speedometer;
	this.gearMeter;
	this.gear = 0;
	this.shiftTimer = 0;
	this.accelTimer = 0;
	this.acceleration = 0;
	this.distance = -188;
	this.decel = .1;

	this.startTime = 0;
	this.victory = 0;
	this.score = 0;
	this.gamePrompt;
	this.win = 0;

	this.gearArray = [30,50,75,100,125];		
	this.gearAccel = [10,7,5,3,1];
	this.airTile = this.game.add.tileSprite( 0,0,800,300,'air');
	this.landTile = this.game.add.tileSprite( 0,236,800,300,'land');

	this.hourse = this.game.add.sprite(500,240,'spaceship');
	this.hourse2 = this.game.add.sprite(0,236,'hourse2');

	this.end = this.game.add.sprite(784,268,'end');
	this.end2 = this.game.add.sprite(784,236,'end');
	this.spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

	this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
	this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);


	this.speedometer = this.game.add.text(96, 32, 'Speed: 0', { font: "18px Arial", fill: "#ffffff", align: "center" });
	this.score = this.game.add.text(336-32, 32+32, '', { font: "64px Arial", fill: "#FFFF00", align: "center" });
	this.gearMeter = this.game.add.text(364, 32, 'Gear: 1', { font: "18px Arial", fill: "#ffffff", align: "center" });
	this.gamePrompt = this.game.add.text(562, 32, '', { font: "18px Arial", fill: "#FF0000", align: "center" });

	this.victory = this.game.add.audio('win',1,true);



},

update: function (pointer) {


	this.game.physics.collide(this.hourse, this.end, this.collisionHandler, null,this);
	this.game.physics.collide(this.hourse2, this.end2, this.collisionHandler2, null,this);

	if (this.game.time.now > this.accelTimer){
		if (this.startTime != 0)

			this.hourse2.x = this.hourse2.x + 9;
		if (this.speed >0 ){
			if ((this.speed- this.decel) < 0)
			{
				this.speed = 0;
			}
			else {
				this.speed = this.speed - this.decel;
			}
		}


		if (this.rightKey.isDown || this.game.input.pointer1.isDown){
			if (this.startTime ==0) 
				this.startTime = this.game.time.now;


			if (this.speed < this.gearArray[this.gear]   ){
				this.acceleration  = 	   this.speed + this.gearAccel[this.gear];
				this.speed =  this.acceleration;
				this.distance = this.distance + this.acceleration;

			}
			else if (this.speed > this.gearArray[this.gear])
			{
				this.speed = this.gearArray[this.gear];
				this.acceleration = this.speed;
				this.distance = this.distance + this.acceleration;
				if (this.gear != 4)
					this.gamePrompt.content = "UP TO SHIFT";
			}

			else 
			{

				this.acceleration = this.speed + this.decel;
				this.speed = this.speed + this.decel;
				this.distance = this.distance + this.acceleration;

			}

		}
		else 
		{


			this.acceleration = this.speed;
			this.distance = this.distance + this.acceleration;

		}

		this.hourse.x = this.distance/2;
		this.speedometer.content = 'Speed: ' + Number(this.speed).toFixed(1);
		this.accelTimer = this.game.time.now + 100;
	}
	if (this.upKey.isDown && this.game.time.now > this.shiftTimer){
		this.gamePrompt.content = "";
		console.log("what");

		if (this.gear <4)
		{

			this.gear = this.gear + 1;
			this.gearMeter.content = 'Gear: ' + (this.gear+1);
			this.shiftTimer = this.game.time.now + 500;
		}

	}
	if (this.downKey.isDown && this.game.time.now > this.shiftTimer){
		this.gamePrompt.content = "SPEED LOWERED";

		if (this.gear > 0 )
		{
			this.gear = this.gear - 1;
			this.gearMeter.content = 'Gear: ' + (this.gear+1);
			this.shiftTimer = this.game.time.now + 500;

		}
	}

},

quitGame: function (pointer) {


	//	Here you should destroy anything you no longer need.
	//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

	//	Then let's go back to the main menu.

	this.game.state.start('MainMenu',true,true);

},
collisionHandler : function(pointer) {
	this.score.content = "Score:\n" + Number((this.game.time.now-this.startTime)/1000).toFixed(1);
	if (this.win == 1) 
		this.gamePrompt.content = "You Lost";

	else {
		this.f = this.gamePrompt.font;
		this.f.fill = '#00FF00';
		this.gamePrompt.setStyle(this.f);
		this.gamePrompt.content = "You Win";
	}
	this.end.kill();
	this.hourse.kill();

	this.speed = 0;


	this.launch = this.game.add.sprite(768,268,'launch');
	this.victory.play('',0,1,false);
	this.reward = this.add.button(50, 75, 'reward', this.quitGame, this);
},

collisionHandler2 : function(pointer) {
	this.win = 1;
	this.launch = this.game.add.sprite(768,232,'launch');
	this.victory.play('',0,1,false);

	this.hourse2.kill();
	this.end2.kill();
}

};

