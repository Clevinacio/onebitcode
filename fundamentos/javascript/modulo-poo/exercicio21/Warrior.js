const Character = require("./Character");

const Instance = {
  ATTACK: "Attack",
  DEFENSE: "Defense",
};

class Warrior extends Character {
  constructor(name, health, strength, defense, shieldPoints) {
    super(name, health, strength, defense);
    this.shieldPoints = shieldPoints;
    this.instance = Instance.ATTACK;
  }

  attack(target) {
    if (this.instance === Instance.ATTACK) {
      const damage = Math.max(0, this.strength - target.defense);
      target.health -= damage;
      return damage;
    }
    return 0;
  }

  toggleInstance() {
    if (this.instance === Instance.ATTACK) {
      this.instance = Instance.DEFENSE;
      this.defense += this.shieldPoints;
    } else {
      this.instance = Instance.ATTACK;
      this.defense -= this.shieldPoints;
    }
  }
}

module.exports = Warrior;
