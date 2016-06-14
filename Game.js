MonkeyDefense.Game = function (game) {
    this.Hero;
    this.totalEnemy;
    this.enemiesgroup;
};


MonkeyDefense.Game.prototype = {
    
    create: function () {
        this.gameover = false;
        this.totalHero = 1;
        this.totalEnemy = 15;
        
        this.buildWorld();
    },
    
    buildWorld: function() {
        this.add.image(0, 0, 'background');
        this.buildEnemies();
        this.buildHero();
        
        
    },
    
    update: function () {
     
 },

    
    
     buildEnemies: function() {
        this.enemiesgroup = this.add.group();
        for(var i=0; i<this.totalenemies; i++) {
            var r = this.enemiesgroup.create(this.rnd.integerInRange(this.world.width, 0 - this.world.height), this.rnd.realInRange(this.world.width + 250, 0 - this.world.width), 'ImageAssets/Evilmonkey.png');
            var scale = this.rnd.realInRange(1.0, 1.0);
           // r.scale.x = scale;
           // r.scale.y = scale;
            this.physics.enable(r, Phaser.Physics.ARCADE);
            r.enableBody = true;
            r.body.velocity.x = this.rnd.integerInRange(-300, -500);
           // r.animations.add('Fall');
            //r.animations.play('Fall', 24, true);
            //r.checkWorldBounds = true;
            //r.events.onOutOfBounds.add(this.resetEnemy, this);
        }
    
    },	
    
   
    buildHero: function() {
        
        
        
    },
     
        
}  
    

    
 