MonkeyDefense.Game = function (game) {
    this.totalEnemy
};


MonkeyDefense.Game.prototype = {
    
    create: function () {
        this.gameover = false;
        this.totalHero = 1;
        this.totalEnemy = 30;
        
        this.buildWorld();
    },
    
    buildWorld: function() {
        this.add.image(0,0, 'Background');
        this.buildEnemies();
        this.buildMainMonkey();
        
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}