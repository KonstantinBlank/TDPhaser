/**
 * Created by Schlag on 01.07.2016
 */
var gameover = function(game){
};

gameover.prototype = {
    create: function(){
        isBoosted = false;
        isShielded = false;


        //Background Image
        this.game.add.sprite(0,0,"bgTitleScreen",this);
        //Highscore Image View hinzufuegen
        this.game.add.sprite(this.game.world.centerX-175,35,"highscore");


        //ScoreText Hinzufuegen
        var scoreText = this.game.add.text(this.game.world.centerX-90, 90, '0', { font: "36px Roboto", fill: "white", align: "center",stroke:"black",strokeThickness:3});
        scoreText.setText('Score: ' + pointCounter);

        //ReplayButton Hinzufuegen
        var replayButton = this.game.add.button(this.world.centerX,this.world.centerY,"replay",this.playTheGame,this,1,0,2);
        replayButton.anchor.setTo(0.5,0.5);

        //Sound
        sound_bg = this.game.add.audio("sound_bgloop",1,true);
        sound_bg.play('',0,1,true);

        sound_button = this.game.add.audio("sound_buttonclick",1,false);


        //MuteButton
        muteButton = this.game.add.button(this.world.width-25,30,"mute",this.muteGame,this,1,0,2);
        muteButton.anchor.setTo(0.5,0.5);



    },
    playTheGame: function(){
        sound_bg.stop();
        sound_button.play('',0,1,false);
        this.game.state.start("TheGame");
    },
    //Mute Button
    muteGame : function()
    {

        if(sound_bg.isPlaying == true)
        {
            sound_bg.stop();
        }
        else
        {

            sound_bg.play('',0,0.5,true);
        }

    }
};
