/**
* Created by Priebe on 01.10.2016
*/

//Attribute:

function class_player(game, pName){

  this._Name = pName;
  this._isAlive = true;
  this._Experience = 0;
  this._Level = 0;
  this._Currency = 30000000;
  this._Abilities = [];
  this._allAbilities = [];
}
//Methoden:

class_player.prototype = {

  create : function()
  {

  },

  update : function(pExpUpdate,pCurrencyUpdate){
    this._Experience += pExpUpdate;
    this._Currency += pCurrencyUpdate;
    updateLevel();
  },

  updateLevel : function(){
  if(this.Experience >= this._Level*100){
      (this._Level*100)-this.Experience;
      this._Level += 1;
    }
  },

getCurrency : function(){
  return this._Currency;
},

reduceCurrency : function(pPrice){
  this._Currency -= pPrice;
},

dying : function(){
  this._isAlive = false;
},

revive : function(){
  this._isAlive = true;
},


//Abilities

    chooseAbility : function(pAbilityNumber, pNewAbility){
        this._Abilities[pAbilityNumber] = pNewAbility;
    },

    useAbility : function (pAbilityNumber) {
      this.Abilities[pAbilityNumber].use();
    }
};
