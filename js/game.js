window.onload = function() {
    
    "use strict";
    function Game() {}
    
    Game.prototype = {
    	    start: function() {
    
    	    	    var game = new Phaser.Game( 1280, 640, Phaser.CANVAS, 'game' );
    	    	    game.state.add('boot', BootState);
    	    	    game.state.add('preload', PreloadState);
    	    	    game.state.add('menu', MenuState);
    	    	    game.state.add('level1', Level1State);
    	    	    game.state.add('gameOver', GameOverState);
    	    	    
    
    	    	    game.state.start('boot');
    	    }
    }
};
