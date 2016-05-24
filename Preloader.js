MonkeyDefense.Preloader= function (game) {
    this.preloadBar = null;
    this.titleText = null;
    this.reader = false;
    
    
};

MonkeyDefense.Preloader.prototype = {
    
    preload: function () {
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
        this.preloadBar.anchor.setTo(0.5, 0.5);
        
        this.titleText = this.add.image(this.world.centerX, this.world.centerY - 320, 'MonkeyDefenseTitle');
        this.titleText.anchor.setTo(0.5, 0.5);
        
        this.load.image('titlescreen', 'ImageAssets/MDtitlescreen.png');
        
        this.load.bitmapFont('eightbitwonder', 'fonts/eightbitwonder.png', 'fonts/eightbitwonder.fnt');
        
        this.load.image('Gunner', 'ImageAssets/monkeygunner.png');
        
        this.load.image('Enemy', 'ImageAssets/Evilmonkey.png');
        
        this.load.image('Bullet', 'ImageAssets/Coconuts.png');
        
        this.load.image('Background', 'ImageAssets/map.png');
    },
 
    create: function () {
        this.preloadBar.cropEnabled = false;
        
    },
  
    update: function() {
        this.ready = false;
        this.state.start('StartMenu');
    } 
    
};