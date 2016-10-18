enemyclass = function ()
{

  this. _path = null;
  this._waypoint = 1;
  this._speed = 0;
  this._hp = 0;
  this._dmg = 0;
  this.x = 0;
  this.y = 0;

}

  enemyclass.prototype = {



    create : function(){

      //console.log("Hello World");
      //_sprite = sprite;
      this._path = [[144, 16, 1],[144, 144, 1],[880, 144, 1],[880, 272, 1],[144, 272, -1],[144, 400, 1],[880, 400, 1],[880, 496, 1]];
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

    dealDmg : function (pDamage, pEnemy)
    {
      if(!pEnemy.hp ) pEnemy.kill();
      pEnemy.hp -= pDamage;
      if(pEnemy.hp <= 0)
      {
        pEnemy.kill();
      }

    },

    checkPath : function (enemy)
    {
       for (this.i = 0; this.i < this._path.length; this.i++)
       {
        //  console.log(enemy.position.x +" ; " + this._path[this.i][1])
         if (enemy.position.y >= this._path[this.i][1])
         {//console.log(this.i);
           if((enemy.position.x >= this._path[this.i][0] && this._path[this.i ][2] > 0) || (enemy.position.x <= this._path[this.i][0] && this._path[this.i ][2] < 0) )
           {
             this._waypoint = this.i + 1;
           }
         }
       }
       /*if (this._waypoint == 5 && enemy.position.x >= 144)
       {
         this._waypoint = 4;
       } */
       if (this._waypoint == 2 && enemy.position.y >= 200)
       {
         this._waypoint = 4;
       }
        //console.log(this._waypoint);
       if (this._waypoint == 5 && enemy.position.y >= 400)
       {
         this._waypoint = 6;
       }
       if(this._waypoint == 8)
       {
         enemy.destroy();
         return;
       }


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
           enemy.body.velocity.x = -100;
           enemy.body.velocity.y = 0;
         }
         else {
           enemy.body.velocity.x = 100;
           enemy.body.velocity.y = 0;
         }

       }
       else {
         enemy.body.velocity.x = 0;
         enemy.body.velocity.y = 100;
       }
    }
};
