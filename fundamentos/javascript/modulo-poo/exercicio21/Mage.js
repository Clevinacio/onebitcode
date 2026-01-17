const Character = require("./Character");

class Mage extends Character {
  constructor(name, health, strength, defense, magicPoints) {
    super(name, health, strength, defense);
    this.magicPoints = magicPoints;
  }

  attack(target) {
    const damage = Math.max(
      0,
      this.strength + this.magicPoints - target.defense,
    );
    target.health -= damage;
    return damage;
  }

  heal(target) {
    const healAmount = this.magicPoints * 2;
    target.health += healAmount;
    return healAmount;
  }
}

module.exports = Mage;
