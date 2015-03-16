"use strict";
var PreloadState = function(game){}

PreloadState.prototype = {
	preload: function(){
		//create loading animations
		var loading = this.game.add.sprite(this.game.world.centerX - 180, this.game.world.centerY - 30, 'load', 0);
		loading.animations.add('move', [1, 2, 3, 4, 5, 6, 7], 10, true, true);
		loading.animations.play('move');
		
		//load everything else
		this.game.load.image('menuBackground', 'assets/menuBackground.png');
		this.game.load.image('playButton', 'assets/playButton.png');
		this.game.load.image('howButton', 'assets/howButton.png');
		this.game.load.image('contButton', 'assets/contButton.png');
		this.game.load.image('sceneOne', 'assets/scene1.png');
		this.game.load.image('scene1Tiles', 'assets/s1TileSet.png');
		this.game.load.tilemap('scene1TileMap', 'assets/scene1.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.atlasJSONHash('player', 'assets/player.png', 'assets/player.json');
		this.game.load.image('playerToken', 'assets/playerToken.png');
		this.game.load.image('enemyToken', 'assets/enemyToken.png');
		this.game.load.image('levelBar', 'assets/levelBar.png');
		this.game.load.atlasJSONHash('battery', 'assets/battery.png', 'assets/battery.json');
	
	},
	create: function(){
		this.game.state.start("menu");
	}
}
