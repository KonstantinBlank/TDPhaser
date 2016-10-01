/**
 * Created by Schlag on 01.07.2016
 */
var thegame = function(game){


  var map;
  var layer;
//  var _ListOfTurrets = new List();
  var _Player = new class_player(this, "KKJLD");
  this._TowerListe = [];
  var _nicht_bebaubar;
  var cursors;
  var marker;

};



thegame.prototype = {

  create : function(){

    //  Because we're loading CSV map data we have to specify the tile size here or we can't render it
       this.map = this.game.add.tilemap('map', 32, 32);

       //  Now add in the tileset
       this.map.addTilesetImage('tiles');

       //  Create our layer
       layer = this.map.createLayer(0);

       //  Resize the world
       layer.resizeWorld();

       //  Allow cursors to scroll around the map
       cursors = this.game.input.keyboard.createCursorKeys();

       //Adds 32*32 marker on curser position
       marker = this.game.add.graphics();
       marker.lineStyle(2, 0xffffff, 1);
       marker.drawRect(0, 0, 32, 32);
       this.game.input.addMoveCallback(this.updateMarker, this);

       this.game.input.onDown.add(this.getTileProperties, this);
       this.game.input.onDown.add(this.setzeTower, this);

       this.game.physics.startSystem(Phaser.Physics.ARCADE);



},


update: function () {


},

setzeTower : function(){

      var x = layer.getTileX(this.game.input.activePointer.worldX);
      var y = layer.getTileY(this.game.input.activePointer.worldY);
      var index = x+"-"+y;
      if(this.map.getTile(x,y,layer).index != 967 && this.map.getTile(x,y,layer).index != 990 && this.map.getTile(x,y,layer).index != 989 && this._TowerListe[index] == undefined)
      {
        console.log("Tower gebaut");
        var newTower = this.game.add.sprite(x*32,y*32,"saggitaurus");
        this._TowerListe[index] = newTower;
      }
      else {
      this._nicht_bebaubar = this.game.add.text((this.game.world.width)-650,this.game.world.centerY,'Kann dort nicht gebaut werden!',{font : '25px Roman', fill: '#272421'});
      }
},

getTileProperties : function () {

    var x = layer.getTileX(this.game.input.activePointer.worldX);
    var y = layer.getTileY(this.game.input.activePointer.worldY);

    var tile = this.map.getTile(x, y, layer);

    tile.properties.wibble = true;
    console.log(x+ ";" + y);
},

updateMarker : function () {

    marker.x = layer.getTileX(this.game.input.activePointer.worldX) * 32;
    marker.y = layer.getTileY(this.game.input.activePointer.worldY) * 32;

},



   upgrade : function(pTurret, pStat)
   {
     switch(pStat)
     {
      case 1://Schaden erhöhen
         if(pTurret.get_DamagePrice() <= _Player.getCurrency())
         {
           pTurret.upgrade(pStat);
           _Player.reduceCurrency(pTurret.get_DamagePrice());
         }
        break;

      case 2://Speed erhöhen
      if(pTurret.get_SpeedPrice() <= _Player.getCurrency())
      {
        pTurret.upgrade(pStat);
        _Player.reduceCurrency(pTurret.get_SpeedPrice());
      }
        break;

      case 3://Range erhöhen
      if(pTurret.get_RangePrice() <= _Player.getCurrency())
      {
        pTurret.upgrade(pStat);
        _Player.reduceCurrency(pTurret.get_RangePrice());
      }
        break;

      default:
        break;
     }
   }
};



  /*  create : function(){

        //Steuerung und Physik reinladen
        cursors = this.game.input.keyboard.createCursorKeys();
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        //BackgroundTile hinzufuegen
        bgTileSprite = this.game.add.tileSprite(0, 0, 1000, 800, 'bgStage');

        //Sprite hinzufuegen und auf Spieler setzen
        player = this.game.add.sprite(this.game.world.centerX,this.game.world.height-200,'playerRocket');

        //Auto Animation hinzufuegen
        player.animations.add('default', [0, 1, 2, 3], 10, true);

        //Auto Animation hinzufuegen
        player.animations.play('default');

        //Player mit Physics
        this.game.physics.arcade.enable(player);

        //Player Initialwerte
        player.anchor.x = 0.5;
        player.anchor.y = 0.5;
        player.body.width = 50;
        player.body.height = 50;

        //Particle Dirtline
        emitter1 = this.game.add.emitter(this.game.world.centerX, this.game.world.centerY, 400);
        emitter1.makeParticles( [ 'turbine1', 'turbine2'] );

        //Worldbounds
        player.body.collideWorldBounds = true;


    },


    //Update Function - durchgehend kontinuirlich aufgerufen vom Spiel
    update: function () {

        //Bei Mouseclick/Touchklick das Player-Movement Dash mit Partikel Effekt
        if (this.game.input.activePointer.leftButton.isDown)
        {
                this.particleDirtLine();
                this.dash();
        }

        //Sonst durchgehend Player rotieren
        else
            this.rotatePlayer();

    },


    //Player-Rotation
    rotatePlayer : function()
    {
        player.angle +=rotationSpeed * rotateDirection;

    },

    //Player nach vorne Gas Geben 'DASH'
    dash : function()
    {
        player.angle +=0 ;
        this.game.physics.arcade.velocityFromAngle(player.angle + 90, playerDashSpeed, player.body.velocity);
    },

    //PartikelSystem für Player-Dirtlines hinter sich her ziehen
    particleDirtLine : function()
    {
        var px = player.angle;
        var py = player.angle;

        emitter1.minParticleSpeed.set(px,py);
        emitter1.maxParticleSpeed.set(px,py);

        emitter1.x = player.x;
        emitter1.y = player.y;

        emitter1.start(true, playerParticleLifetime,null,playerParticleAmount);

},
/ */
