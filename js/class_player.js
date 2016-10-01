/**
* Created by Priebe on 01.10.2016
*/

//Attribute:

function class_player(game, pName){

  var _Name = pName;
  var _isAlive = true;
  var _Experience = 0;
  var _Level = 0;
  var _Currency = 30000000;
  var _Abilities = [];
  var _allAbilities = [];
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
