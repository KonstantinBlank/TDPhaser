fuction turret_Prefab(pName, pDamage, pAttackspeed, pRange)
{
    this._Name = pName;
    this._Damage = pDamage;
    this._AttackSpeed = pAttackspeed;
    this._Range = pRange; // als Radius

    //test
    this.test = function()
    {
        var turret = new turret_Prefab(eis, 10, 2, 20) {};
        consol.log(turret);
    }

}
