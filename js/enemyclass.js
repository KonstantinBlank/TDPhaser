enemyclass = function (pSpeed, pHp, pDmg)
{
  var _speed = pSpeed;
  var _hp = pHp;
  var _dmg  = pDmg;

  this.setSpeed = function(newSpeed)
  {
    _speed = newSpeed;
  }

  this.getDmg = function()
  {
    return _dmg;
  }

  this.dealDmg = function (pDamage)
  {
    _hp = _hp - pDamage;
    if(_hp <= 0)
    {
      destroy();
    }
  }
}
