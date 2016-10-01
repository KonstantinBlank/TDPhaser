enemyclass = function (pSpeed, pHp, pDmg)
{
  var _speed = 0;
  var _hp = 0;
  var _dmg = 0;
  var x = 0;
  var y = 0;
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

    dealDmg : function (pDamage)
    {
      _hp = _hp - pDamage;
      if(_hp <= 0)
      {
        destroy();
      }

    },
}
