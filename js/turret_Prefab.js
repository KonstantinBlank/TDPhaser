function turret_Prefab (game, pDamage, pAttackspeed, pRange)
{
     this.game = game;
     this._Name = "Standardturm";
     this._Damage = pDamage;
     this._AttackSpeed = pAttackspeed * 1000;
     this._Range = pRange; // als Radius

     this._nextFire = 0;


     this._DamagePrice = 10;
     this._SpeedPrice = 10;
     this._RangePrice = 10;

     this._isNormalTower = true;
     this._isIceTower = false;
     this._isFireTower = false;
     this._isPoisonTower = false;

}

turret_Prefab.prototype = {

    findEnemy : function()
    {
        //findet enemy
        //ruft attackEnemy auf und übergibt pEnemy
    },

    attackEnemy : function(pEnemy)
    {
        if(this.game.time.time > this._nextFire && pEnemy != null)
        {
          pEnemy.dealDmg(this._Damage);
          this._nextFire = this.game.time.time + this._AttackSpeed;
          console.log("gefeurt" + this.game.time.time);
        }

    },

    upgrade : function(pStat)
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
    },

    get_DamagePrice : function()
    {
        return this._DamagePrice;
    },

    get_SpeedPrice : function()
    {
        return this._SpeedPrice;
    },

    get_RangePrice : function()
    {
        return this._RangePrice;
    },
    getName : function()
    {
      return this._Name;
    },
    getDamage : function()
    {
      return this._Damage;
    },
    getAttackSpeed : function()
    {
      return this._AttackSpeed;
    },
    getRange : function()
    {
      return this._Range;
    }
};
