MonkeyDefense.Game = function (game) {
    this.Hero;
    this.totalEnemy;
    this.enemygroup;
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
        //this.buildHero();
        
        
    },
   
   
    
    buildHero: function () {
        
        
        
    },
    
      buildEnemies: function() {
        this.enemeygroup = this.add.group();
        for(var i=0; i<this.totalEnemies; i++) {
            var r = this.enemygroup.create(this.rnd.integerInRange(0, this.world.width), this.rnd.realInRange(-1500, 0), 'enemy', 'Enemy0000');
            var scale = this.rnd.realInRange(1.0, 1.0);
            r.scale.x = scale;
            r.scale.y = scale;
            this.physics.enable(r, Phaser.Physics.ARCADE);
            r.enableBody = true;
            r.body.velocity.y = this.rnd.integerInRange(200, 400);
            r.animations.add('Fall');
            r.animations.play('Fall', 24, true);
            //r.checkWorldBounds = true;
            //r.events.onOutOfBounds.add(this.resetRock, this);

    
    
    
    
    }	
    
     
        
},
 update: function () {
     
},
    
};
    

    
 