enemyclass = function (pSpeed, pHp, pDmg)
{
  this._speed = 0;
  this._hp = 0;
  this._dmg = 0;
  this.x = 0;
  this.y = 0;
}

  enemyclass.prototype = {



    create : function(pSpeed, pHp, pDmg){
      console.log("Hello World");
      _speed = pSpeed;
      _hp = pHp;
      _dmg  = pDmg;
    },

    setSpeed : function(newSpeed)
    {
      _speed = newSpeed;
    },

    getDmg : function()
    {
      return _dmg;
    },

    getXCoordinate : function()
    {
      return this.x;
    }

    getYCoordinate : function()
    {
      return this.y;
    }

    dealDmg : function (pDamage)
    {
      _hp = _hp - pDamage;
      if(_hp <= 0)
      {
        destroy();
      }

    },
}
