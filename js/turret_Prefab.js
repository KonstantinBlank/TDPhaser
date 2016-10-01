turret_Prefab = function  (game,  pXCoordinate, pYCoordinate, pKey, pShots)
{
     Phaser.Sprite.call(this, game, pXCoordinate, pYCoordinate, pKey, 0);
     this.game = game;
     this._Name = "Standardturm";
     this._shots = pShots;
     this._Damage = 10;
     this._AttackSpeed = 1 * 1000;
     this._Range = 2000; // als Radius


     this._nextFire = 0;

     this._DamagePrice = 10;
     this._SpeedPrice = 10;
     this._RangePrice = 10;

     this._isNormalTower = true;
     this._isIceTower = false;
     this._isFireTower = false;
     this._isPoisonTower = false;

     this.game.add.existing(this);

     this.game.physics.enable(this);
     this.enableBody = true;

     //this.physicsBodyType = Phaser.Physics.ARCADE;
     this.body.setCircle(this._Range);
}

turret_Prefab.prototype = Object.create(Phaser.Sprite.prototype);
turret_Prefab.prototype.constructor = turret_Prefab;

turret_Prefab.prototype.create = function()
{

};

turret_Prefab.prototype.searchEnemy = function(pEnemies)
{
  this.game.physics.arcade.overlap(this, pEnemies, this.attackEnemy,null, this);
};


    turret_Prefab.prototype.attackEnemy = function(pTurret, pEnemy)
    {


        if(this.game.time.time > this._nextFire && pEnemy != null)
        {
          var shot = _shots.create(this.x,this.y,"shot");
          shot.rotation = this.game.physics.arcade.moveToObject(shot, pEnemy, 60, _nextFire);

            //pEnemy.dealDmg(this._Damage);
            this._nextFire = this.game.time.time + this._AttackSpeed;
            console.log("gefeurt" + this.game.time.time);
        }

    };

    turret_Prefab.prototype.upgrade = function(pStat)
    {
      switch(pStat)
      {
        case 1:
            this._Damage ++;
            this._DanagePrice * 2;
            this._SpeedPrice * 1.5;
            this._RangePrice * 1.5;
            break;
        case 2:
            this._AttackSpeed -= 1000;
            this._DanagePrice * 1.5;
            this._SpeedPrice * 2;
            this._RangePrice * 1.5;
            break;
        case 3:
            this._Range ++;
            this._DanagePrice * 1.5;
            this._SpeedPrice * 1.5;
            this._RangePrice * 2;
            break;
        default:
            break;
      }
    };

    turret_Prefab.prototype.get_DamagePrice = function()
    {
        return this._DamagePrice;
    };

    turret_Prefab.prototype.get_SpeedPrice = function()
    {
        return this._SpeedPrice;
    };

    turret_Prefab.prototype.get_RangePrice = function()
    {
        return this._RangePrice;
    };

    turret_Prefab.prototype.getName = function()
    {
      return this._Name;
    };

    turret_Prefab.prototype.getDamage = function()
    {
      return this._Damage;
    };

    turret_Prefab.prototype.getAttackSpeed = function()
    {
      return this._AttackSpeed;
    };
    turret_Prefab.prototype.getRange = function()
    {
      return this._Range;
    };
