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
        var test = new enemyclass (0,0,0);


        var turret = new turret_Prefab("eis", 10, 2, 20);
        turret.teste();

        console.log(test.getDmg());

        //this.scale.setScreenSize();
        this.game.state.start("Preload");
    }
};
