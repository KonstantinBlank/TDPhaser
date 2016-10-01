enemyclass = function ()
{

var _path = null;
  this._waypoint = 0;
  this._speed = 0;
  this._hp = 0;
  this._dmg = 0;
  this.x = 0;
  this.y = 0;

}

  enemyclass.prototype = {



    create : function(pSpeed, pHp, pDmg /*,sprite*/){

      console.log("Hello World");
      _speed = pSpeed;
      _hp = pHp;
      _dmg  = pDmg;
      //_sprite = sprite;
      _path = [/*[144,16],*/[144,144],[880,144],[880,368],[144,368],[144,400],[880,400],[880,496]];
    },

    update : function(){
      /*  if(this._sprite.position.x <= _targetx && this._sprite.position.y.truncate <= _targety)
        {
          this._sprite.body.velocity.x = 0;
          this._sprite.body.velocity.y = 0;
        } */
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
    },

    getYCoordinate : function()
    {
      return this.y;
    },

    dealDmg : function (pDamage)
    {
      _hp = _hp - pDamage;
      if(_hp <= 0)
      {
        destroy();
      }

    },

    checkPath : function (enemy)
    {
       for (var i = 0; i < _path.length; i++)
       {
         if (enemy.position.y >= _path[i,2])
         {
           if(enemy.position.x >= _path[i,1])
           {
             this._waypoint = i + 1;
           }
         }
       }
       console.log(this._waypoint);
       /*if(enemy.body.velocity.x > 0 && enemy.position.x >= _path[_waypoint,1])
       {
         enemy.position.x = _path[_waypoint,1];
         enemy.position.y = _path[_waypoint,2];

         enemy.body.velocity.x = 0;
         enemy.body.velocity.y = 10;
       }
       else  if(enemy.body.velocity.y > 0 && enemy.position.y >= _path[_waypoint,2])
       {
         enemy.position.x = _path[_waypoint,1];
         enemy.position.y = _path[_waypoint,2];
         _waypoint = _waypoint + 1;
         enemy.body.velocity.x = 10;
         enemy.body.velocity.y = 0;
       }
       else  if(enemy.body.velocity.x < 0 && enemy.position.y <= _path[_waypoint,1])
       {
         enemy.position.x = _path[_waypoint,1];
         enemy.position.y = _path[_waypoint,2];
         _waypoint = _waypoint + 1;
         enemy.body.velocity.x = 0;
         enemy.body.velocity.y = 10;
       }
       else  if(enemy.body.velocity.y < 0 && enemy.position.y <= _path[_waypoint,2])
       {
         enemy.position.x = _path[_waypoint,1];
         enemy.position.y = _path[_waypoint,2];
         _waypoint = _waypoint + 1;
         enemy.body.velocity.x = 10;
         enemy.body.velocity.y = 0;
       } */
       if (this._waypoint % 2 == 0)
       {
         if (this._waypoint % 4 == 0)
         {
           enemy.body.velocity.x = -40;
           enemy.body.velocity.y = 0;
         }
          enemy.body.velocity.x = 40;
          enemy.body.velocity.y = 0;
       }
       else {
         enemy.body.velocity.x = 0;
         enemy.body.velocity.y = 40;
       }
    }
};
