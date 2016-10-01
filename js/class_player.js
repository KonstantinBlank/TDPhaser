/**
* Created by Priebe on 01.10.2016
*/

//Attribute:

class_player = function(game, pName){

  this._Name = pName;
  this._isAlive = true;
  this._Experience = 0;
  this._Level = 0;
  this._Currency = 0;

      this._Abilities = [];
      this._allAbilities = [];
};


//Methoden:

player.prototype.updateLevel = function(){
  if(this.Experience >= this._Level*100){
    (this._Level*100)-this.Experience;
    this._Level += 1;
  }
};

player.prototype.update = function(pExpUpdate,pCurrencyUpdate){
  this._Experience += pExpUpdate;
  this._Currency += pCurrencyUpdate;
  updateLevel();
};

player.prototype.dying = function(){
  this._isAlive = false;
};

player.prototype.revive = function(){
  this._isAlive = true;
};


//Abilities

    player.prototype.chooseAbility = function(pAbilityNumber, pNewAbility){
        this._Abilities[pAbilityNumber] = pNewAbility;
    };

    player.prototype.useAbility = function (pAbilityNumber) {
      this.Abilities[pAbilityNumber].use();
    };
