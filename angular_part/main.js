'use strict';

angular.module('superheroApp', [])
  .controller('SuperheroController', SuperheroController);

function SuperheroController() {
  this.name = "Deadpool";
  this.abilities = [
    {name: 'regeneration', value: 5},
    {name: 'power', value: 3},
    {name: 'strategy', value: 2},
    {name: 'weapon skill', value: 1}
  ];
  this.calculateTotal();
}

SuperheroController.prototype.addSkillLevel = function(index) {
  this.abilities[index].value += 1;
  this.total += 1;
};

SuperheroController.prototype.reduceSkillLevel = function(index) {
  this.abilities[index].value -= 1;
  this.total -= 1;
};

SuperheroController.prototype.calculateTotal = function() {
  this.total = 0;
  for (var i = 0; i < this.abilities.length; i++) {
    this.total += this.abilities[i].value;
  }
};