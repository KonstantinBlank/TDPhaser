/**
 * Created by Schlag on 01.07.2016
 */

var preload = function(game){
};

preload.prototype = {
    preload: function(){

        //Loadingbar
        var loadingBar = this.add.sprite(this.world.centerX,this.world.centerY,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);

        //backgrounds tiles etc vorladen
        this.game.load.image("bgTitleScreen","assets/background/background_titlescreen.png");

        this.game.load.image("bgStage", "assets/background/bg_stage.png");

        this.game.load.spritesheet("replay", "assets/background/button_replay.png",230,130);
        this.game.load.spritesheet("play", "assets/background/button_play.png",200,200);

        this.game.load.spritesheet("mute","assets/background/button_mute.png",50,50);
        this.game.load.spritesheet("pause","assets/background/button_pause.png",50,50);
        this.game.load.image("unpause","assets/background/view_unpause.png");

        //this.game.load.image("tutorial","assets/background/tutorial.png");
        this.game.load.spritesheet("tutshow","assets/background/button_tutorial.png",230,130);

        this.game.load.image("life","assets/background/lifeIcon.png");
        this.game.load.image("highscore","assets/background/view_highscore.png");
        this.game.load.image("highscoreingame","assets/background/view_highscore_ig.png");
        this.game.load.image("lifebg","assets/background/view_lifes.png");


        //Player-Enemy-Powerups
        this.game.load.spritesheet("playerRocket","assets/player/speedship.png",64,64);

        this.game.load.spritesheet("enemyMine", "assets/enemies/mine.png",48,48);
        this.game.load.spritesheet("enemyBomb", "assets/enemies/alienbomb.png",48,48);

        this.game.load.spritesheet("powerShield", "assets/powerups/schild.png", 32, 32);
        this.game.load.spritesheet("powerBoost", "assets/powerups/boost.png", 32, 32);

        //Particles
        this.game.load.image("turbine1", "assets/particles/turbinesprite1.png");
        this.game.load.image("turbine2", "assets/particles/turbinesprite2.png");

        this.game.load.image("boost1", "assets/particles/boostsprite1.png");
        this.game.load.image("boost2", "assets/particles/boostsprite2.png");
        this.game.load.image("boost3", "assets/particles/boostsprite3.png");

        this.game.load.image("explodeMine", "assets/particles/mineCollision.png");
        this.game.load.image("explodeBomb", "assets/particles/bombCollision.png");

        //Audio
        //GameTitle / GameOver Background Sound
        this.game.load.audio('sound_bgloop', ['assets/sounds/loop_menu.mp3','assets/sounds/loop_menu.ogg']);
        this.game.load.audio('sound_bgloop2', ['assets/sounds/loop_level1.mp3','assets/sounds/loop_level1.ogg']);
        
        //ButtonClick Sound
        this.game.load.audio('sound_buttonclick', ["assets/sounds//buttonsound.mp3","assets/sounds/buttonsound.ogg"]);


    },
    create: function(){
        this.game.state.start("GameTitle");
    }
};
