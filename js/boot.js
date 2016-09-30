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
        //this.scale.setScreenSize();
        this.game.state.start("Preload");
    }
};
