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

this.updateLevel = function(){
  if(this.Experience >= this._Level*100){
    (this._Level*100)-this.Experience;
    this._Level += 1;
  }
};

this.update = function(pExpUpdate,pCurrencyUpdate){
  this._Experience += pExpUpdate;
  this._Currency += pCurrencyUpdate;
  updateLevel();
};

this.dying = function(){
  this._isAlive = false;
};

this.revive = function(){
  this._isAlive = true;
};


//Abilities

    this.chooseAbility = function(pAbilityNumber, pNewAbility){
        this._Abilities[pAbilityNumber] = pNewAbility;
    };

    this.useAbility = function (pAbilityNumber) {
      this.Abilities[pAbilityNumber].use();
    };
