var MonkeyDefense = {};

MonkeyDefense.Boot = function (game) {};

MonkeyDefense.Boot.prototype = {
    preload: function () {
        this.load.image('MonkeyDefenseTitle', 'ImageAssets/monkeydefensetitle.png');
        this.load.image('preloadBar', 'ImageAssets/PreloaderBar.png');
        
    },
        
    create: function () {
		this.input.maxPointers = 10;
		this.stage.disableVisibilityChange = false;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.minWidth = 857;
		this.scale.minHeight = 960;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.stage.forcePortrait = true;
		this.scale.setScreenSize(true);

		this.input.addPointer();
		this.stage.backgroundColor = '#FFFFCC';
        
        this.state.start('Preloader');
	}
    
};
    
        


