function turret_Prefab (pDamage, pAttackspeed, pRange)
{
    var _Name = "Standardturm";
    var _Damage = pDamage;
    var _AttackSpeed = pAttackspeed;
    var _Range = pRange; // als Radius

    var _DamagePrice = 10;
    var _SpeedPrice = 10;
    var _RangePrice = 10;

    var _isNormalTower = true;
    var _isIceTower = false;
    var _isFireTower = false;
    var _isPoisonTower = false;


    this.findEnemy = function()
    {
        //findet enemy
        //ruft attackEnemy auf und übergibt pEnemy
    };

    this.attackEnemy = function(pEnemy)
    {
        if(this._isNormalTower)
        {
          pEnemy.dealDmg(this._Damage;
        }

    };

    this.

    //upgrades
        this.upgrade = function(pStat)
        {
          switch(pStat){
            case 1:
                this._Damage ++;
                this._DanagePrice * 2;
                this._SpeedPrice * 1.5;
                this._RangePrice * 1.5;
              break;
            case 2:
              this._AttackSpeed ++;
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

        this.get_DamagePrice()
        {
            return this._DamagePrice;
        };

        this.get_SpeedPrice()
        {
            return this._SpeedPrice;
        };

        this.get_RangePrice()
        {
            return this._RangePrice;
        };
        this.getName()
        {
          return this._Name;
        };




    this.teste = function()
    {
        console.log(_Name);
    };
};
