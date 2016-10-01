enemyclass = function (_speed, _hp, _dmg)
{
  var speed = _speed;
  var hp = _hp;
  var dmg  = _dmg;

  this.setSpeed = function(newSpeed)
  {
    speed = newSpeed;
  }

  this.getDmg = function()
  {
    return dmg;
  }

  this.dealDmg = function (damage)
  {
    hp = hp - damage;
    if(hp <= 0)
    {
      destroy();
    }
  }
}
