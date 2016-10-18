/**
 * Created by Schlag on 01.07.2016
 * neue Version nach logauskommentiert (18.10.2016)
 */
var thegame = function(game){


  var map;
  var layer;
//  var _ListOfTurrets = new List();
  this._Player = new class_player(this, "KKJLD");
  this._TowerListe = [];
  this._time = 60;
  var _nicht_bebaubar;
  var cursors;
  var marker;
  var button1;
  var button2;
  var button3;
  var text1;
  var text1_2;
  var text2;
  var text2_2;
  var text3;
  var text3_2;
  var selectedTower;
  var showButtons = false;
  var _enemyclass = null;
  var _CurrencyText;

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
       this.game.input.onDown.add(this.click, this);

       this.game.physics.startSystem(Phaser.Physics.ARCADE);

       //create waypoints

       this._path = [[144, 16],[144, 176],[912, 144],[880, 304],[112, 272],[144, 432],[912, 400],[880, 528]];
       this._waypoints = this.game.add.group();
       this._waypoints.enableBody = true;
       this._waypoints.physicsBodyType = Phaser.Physics.ARCADE;

       for (var c = 0; c < this._path.length; c++)
       {
         console.log(c);
         waypoint = this._waypoints.create() //this._path[c][0]-16,this._path[c][1]-16,null
         waypoint.enableBody = true;
        // waypoint.anchor.setTo(0.5, 0.5);
         this.game.physics.enable(waypoint, Phaser.Physics.ARCADE);

         waypoint.body.setCircle(16,this._path[c][0]-16,this._path[c][1]-16);
        // this.body.setCircle(this._Range, -this._Range + 16, -this._Range +16);
       }



      this._enemyclass = new enemyclass();
      this._enemyclass.create(0,0,0);

      this.enemies = this.game.add.physicsGroup();
      this.enemies.enableBody = true;

            this._shots = this.game.add.group();
            this._shots.enableBody = true;

            this._shots.physicsBodyType = Phaser.Physics.ARCADE;


      this.testenemy = this.enemies.create(144, 16, 'enemyeye');
      this.testenemy.anchor.setTo(0.5, 0.5);
      this.game.physics.enable(this.testenemy, Phaser.Physics.ARCADE);
      this.game.physics.enable(this.enemies, Phaser.Physics.ARCADE);
      this.testenemy.enableBody = true;

      //this.enemies.add(testenemy);
      this.update_Currency();


},

update_Currency : function()
{
  this._CurrencyText = this.game.add.text(27*32,17*32,'Gold:'+this._Player.getCurrency(),{font: '25px Roman',fill: '#A68200'});
},

killLeiste : function()
{
  if(this.showButtons)
  {
    this.button1.kill();
    this.text1.kill();
    this.text1_2.kill();
    this.button2.kill();
    this.text2.kill();
    this.text2_2.kill();
    this.button3.kill();
    this.text3.kill();
    this.text3_2.kill();
    this.showButtons = false;
  }
},



click : function(){

      var x = layer.getTileX(this.game.input.activePointer.worldX);
      var y = layer.getTileY(this.game.input.activePointer.worldY);
      var index = x+"-"+y;
      if(this.map.getTile(x,y,layer).index != 1047 && this.map.getTile(x,y,layer).index != 979 && this.map.getTile(x,y,layer).index != 1001
          && this.map.getTile(x,y,layer).index != 2719 && this.map.getTile(x,y,layer).index != 68 && this.map.getTile(x,y,layer).index != 1184
          && this.map.getTile(x,y,layer).index != 881 && this.map.getTile(x,y,layer).index != 882 && this.map.getTile(x,y,layer).index != 883 && this.map.getTile(x,y,layer).index != 884)
      {
        this.killLeiste();

        if (this._TowerListe[index] == undefined)
        {
          if (this._Player.getCurrency() >= 100) {
            var newTower = new turret_Prefab(this.game,x*32,y*32,"saggitarius", this._shots);
            this._TowerListe[index] = newTower;
            this._Player.reduceCurrency(100);
            this._CurrencyText.kill();
            this.update_Currency();
          }
          else {
            var Fehlertext = this.game.add.text(11*32,10*32,'Nicht genügend Gold!',{font: '25px Roman',fill: '#A68200'});
            this.game.time.events.add(Phaser.Timer.SECOND * 2, function(){Fehlertext.kill();}, this);
          }
        }

        //this.game.add.sprite(this.game.world.centerX,this.game.world.height-200,'playerRocket');
        else if (this._TowerListe[index] != undefined) {
          this.showButtons = true;
          this.selectedTower = index;
          this.text1 = this.game.add.text(2*32,17*32,'Damage:'+this._TowerListe[index].getDamage(),{font: '25px Roman',fill: '#FFFFFF'});
                        this.text1_2 = this.game.add.text(7*32,17*32,'-'+this._TowerListe[index].get_DamagePrice()+'G',{font: '25px Roman',fill: '#A68200'});
          this.text2 = this.game.add.text(10*32,17*32,'Speed:'+this._TowerListe[index].getAttackSpeed(),{font: '25px Roman',fill: '#FFFFFF'});
                        this.text2_2 = this.game.add.text(15*32,17*32,'-'+this._TowerListe[index].get_SpeedPrice()+'G',{font: '25px Roman',fill: '#A68200'});
          this.text3 = this.game.add.text(18*32,17*32,'Range:'+this._TowerListe[index].getRange(),{font: '25px Roman',fill: '#FFFFFF'});
                        this.text3_2 = this.game.add.text(23*32,17*32,'-'+this._TowerListe[index].get_RangePrice()+'G',{font: '25px Roman',fill: '#A68200'});
          this.button1 =  this.game.add.sprite(6*32,17*32,'button');
          this.button2 =  this.game.add.sprite(14*32,17*32,'button');
          this.button3 =  this.game.add.sprite(22*32,17*32,'button');
        }
      }
      else if (this.map.getTile(x,y,layer).index == 68 && this.showButtons)
      {
        switch (index) {
          case "6-17":
              this.upgrade(this._TowerListe[this.selectedTower],this._Player,1);
              this._CurrencyText.kill();
              this.update_Currency();
              this.killLeiste();
            break;
            case "14-17":
                this.upgrade(this._TowerListe[this.selectedTower],this._Player,2);
                this._CurrencyText.kill();
                this.killLeiste();
                this.update_Currency();
              break;
              case "22-17":
                  this.upgrade(this._TowerListe[this.selectedTower],this._Player,3);
                  this._CurrencyText.kill();
                  this.killLeiste();
                  this.update_Currency();
                break;
          default:
        }

      }
},

getTileProperties : function () {

    var x = layer.getTileX(this.game.input.activePointer.worldX);
    var y = layer.getTileY(this.game.input.activePointer.worldY);

    var tile = this.map.getTile(x, y, layer);

    tile.properties.wibble = true;
    //console.log(x+ ";" + y);
},

updateMarker : function () {

    marker.x = layer.getTileX(this.game.input.activePointer.worldX) * 32;
    marker.y = layer.getTileY(this.game.input.activePointer.worldY) * 32;

},



update : function (){
  //this.game.physics.arcade.overlap(this._shots, , bulletHitPlayer, null, this);



  //console.log(this.testenemy.position.x + "x ; y " + this.testenemy.position.y);

  if(this.enemies.countLiving() <= 30 && this._time <= 0)
  {
    enemy1 = this.enemies.create(144,16,'enemyeye')
    enemy1.enableBody = true;
    enemy1.body.setCircle(16,0,0);
    enemy1.anchor.setTo(0.5, 0.5);
    this.game.physics.enable(enemy1, Phaser.Physics.ARCADE);
    this._time = 60;
    enemy1.animations.add('default', [0, 1, 2, 3], 5, true);
    enemy1.animations.play('default');
    enemy1.hp = 50;
  }
  else {
    this._time = this._time -1;
  }


  var self = this;
  this.enemies.forEach(function(enemy) {

    self._enemyclass.checkPath(enemy);

  });//forEach

  //this._TowerListe.forEach(function(pTower)
  for(property in this._TowerListe)
  {
    this._TowerListe[property].searchEnemy(this.enemies);
  }

  this.game.physics.arcade.overlap(this.enemies,this._shots , this.shotHit, null, this);
  this.game.physics.arcade.overlap(this._testenemy,this._shots , this.shotHit, null, this);

},

render : function()
{
  var self  = this;
  this._waypoints.children.forEach(function(waypoint)
  {
    self.game.debug.body(waypoint);
  });

  this.enemies.children.forEach(function(enemy)
  {
    self.game.debug.body(enemy);
  });

  this._shots.children.forEach(function(shot)
  {
    self.game.debug.body(shot);
  });
/*
  var self  = this;
  this._shots.children.forEach(function(enemy)
  {
    self.game.debug.body(enemy);
  });*/

  /*
  for(property in this._TowerListe)
  {
      this.game.debug.body(this._TowerListe[property]);
  }*/


},


 shotHit : function(pEnemy, pShot)
 {
    //var Blut = this.game.add.sprite((pEnemy.position.x),(pEnemy.position.y),'explosion');
    //Blut.anchor.setTo(0.5,0.5);
    emitterHit = this.game.add.emitter(pEnemy.position.x,pEnemy.position.y,400);
    emitterHit.makeParticles('boost1');
    emitterHit.start(true, 1000, null, 15);

    this._Player.addCurrency(5);
    this._CurrencyText.kill();
    this.update_Currency();


    this._shots.remove(pShot);
    pShot.destroy();
    //this._enemyclass.dealDmg(pShot.damage, pEnemy);
    pEnemy.enableBody = false;
    this.enemies.remove(pEnemy);
    pEnemy.destroy();



    // = null;
  //  console.log("greife Gegner an");
 },



   upgrade : function(pTurret, pPlayer, pStat)
   {
     switch(pStat)
     {
      case 1://Schaden erhöhen
         if(pTurret.get_DamagePrice() <= pPlayer.getCurrency())
         {
           pPlayer.reduceCurrency(pTurret.get_DamagePrice());
           pTurret.upgrade(1);
         }
         else {
           var Fehlertext = this.game.add.text(11*32,10*32,'Nicht genügend Gold!',{font: '25px Roman',fill: '#A68200'});
           this.game.time.events.add(Phaser.Timer.SECOND * 2, function(){Fehlertext.kill();}, this);
         }
        break;

      case 2://Speed erhöhen
      if(pTurret.get_SpeedPrice() <= pPlayer.getCurrency())
      {
        pPlayer.reduceCurrency(pTurret.get_SpeedPrice());
        pTurret.upgrade(2);
      }
      else {
        var Fehlertext = this.game.add.text(11*32,10*32,'Nicht genügend Gold!',{font: '25px Roman',fill: '#A68200'});
        this.game.time.events.add(Phaser.Timer.SECOND * 2, function(){Fehlertext.kill();}, this);
      }
        break;

      case 3://Range erhöhen
      if(pTurret.get_RangePrice() <= pPlayer.getCurrency())
      {
        pPlayer.reduceCurrency(pTurret.get_RangePrice());
        pTurret.upgrade(3);
      }
      else {
        var Fehlertext = this.game.add.text(11*32,10*32,'Nicht genügend Gold!',{font: '25px Roman',fill: '#A68200'});
        this.game.time.events.add(Phaser.Timer.SECOND * 2, function(){Fehlertext.kill();}, this);
      }
        break;

      default:
        break;
     }
   }
};
