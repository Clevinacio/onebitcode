const Character = require("./Character");

class Thief extends Character {
  constructor(name, health, strength, defense) {
    super(name, health, strength, defense);
  }
  attack(target) {
    const damage = Math.max(0, this.strength - target.defense) * 2;
    target.health -= damage;
    return damage;
  }
}

module.exports = Thief;
