function turret_Prefab (pName, pDamage, pAttackspeed, pRange)
{
    var _Name = pName;
    var _Damage = pDamage;
    var _AttackSpeed = pAttackspeed;
    var _Range = pRange; // als Radius

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
        this.upgradeDamage = function()
        {
            _Damage++;
            
        }

        this.uprageRange = function()
        {
            _Range++;
        }

        this.upgradeAttackSpeed = function()
        {
            _AttackSpeed++;
        }














    this.teste = function()
    {
        console.log(_Name);
    };
};
