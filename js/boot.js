/**
 * Created by Schlag on 01.07.2016
 */
var boot = function(game){
};

boot.prototype = {
    preload: function(){
        this.game.load.image("loading","assets/background/loading.png");

    },
    create: function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        var test = new enemyclass ();
        test.create(0,0,0);
        console.log(test.getDmg());

        //this.scale.setScreenSize();
        this.game.state.start("Preload");
    }
};
