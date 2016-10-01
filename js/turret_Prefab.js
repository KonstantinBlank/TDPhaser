function turret_Prefab (pName, pDamage, pAttackspeed, pRange)
{
    var _Name = pName;
    var _Damage = pDamage;
    var _AttackSpeed = pAttackspeed;
    var _Range = pRange; // als Radius

    var _DamagePreis = 10;
    var _SpeedPreis = 10;
    var _RangePreis = 10;


    this.findEnemy = function()
    {
        //findet enemy
        //ruft attackEnemy auf und übergibt pEnemy
    }

    this.attackEnemy = function(pEnemy)
    {
        pEnemy.dealDmg(_Damage);
    }

    //upgrades
        this.upgrade = function(pStat)
        {
          switch(pStat){
            case 1:
              if(class_player.getCurrency() >= _DamagePreis){
                class_player.reduceCurrency(_DamagePreis);
                this._Damage ++;
              }
              break;
            case 2:
              this._AttackSpeed ++;
              break;
            case 3:
              this._Range ++;
              break;
            default:
            break;
          }
        };






    this.teste = function()
    {
        console.log(_Name);
    };
};
