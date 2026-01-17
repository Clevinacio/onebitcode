class Character {
  constructor(name, health, strength, defense) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.defense = defense;
  }

  attack(target) {
    const damage = Math.max(0, this.strength - target.defense);
    target.health -= damage;
    return damage;
  }
}

module.exports = Character;
