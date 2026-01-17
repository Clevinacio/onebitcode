const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const warrior = new Warrior("Conan", 150, 30, 20, 15);
const thief = new Thief("Garrett", 100, 25, 10);
const mage = new Mage("Merlin", 80, 15, 5, 40);

// show initial states
console.log(
  `${warrior.name} - Health: ${warrior.health}, Strength: ${warrior.strength}, Defense: ${warrior.defense}, ShieldPoints: ${warrior.shieldPoints}, Instance: ${warrior.instance}`,
);
console.log(
  `${thief.name} - Health: ${thief.health}, Strength: ${thief.strength}, Defense: ${thief.defense}`,
);
console.log(
  `${mage.name} - Health: ${mage.health}, Strength: ${mage.strength}, Defense: ${mage.defense}, Magic Points: ${mage.magicPoints}`,
);

console.log("\n--- Battle Start ---\n");

// simulate some actions for warrior

console.log(
  `${warrior.name} attacks ${thief.name} and deals ${warrior.attack(thief)} damage.`,
);
console.log(`${thief.name} has ${thief.health} health left.`);

warrior.toggleInstance();
console.log(`${warrior.name} switches to Defense mode.`);
console.log(`${warrior.name}'s defense is now ${warrior.defense}.`);

console.log(
  `${warrior.name} attempts to attack ${mage.name} but is in Defense mode and deals ${warrior.attack(mage)} damage.`,
);
console.log(`${mage.name} has ${mage.health} health left.`);

console.log(
  `${mage.name} attacks ${warrior.name} and deals ${mage.attack(warrior)} damage.`,
);
console.log(`${warrior.name} has ${warrior.health} health left.`);

console.log("\n--- Battle End ---\n");

// reset health for next simulation
warrior.health = 150;
thief.health = 100;
mage.health = 80;

// simulate some actions for thief

console.log("\n--- Battle Start ---\n");

console.log(
  `${thief.name} attacks ${warrior.name} and deals ${thief.attack(warrior)} damage.`,
);
console.log(`${warrior.name} has ${warrior.health} health left.`);

console.log(
  `${thief.name} attacks ${mage.name} and deals ${thief.attack(mage)} damage.`,
);
console.log(`${mage.name} has ${mage.health} health left.`);

console.log("\n--- Battle End ---\n");

// reset health for next simulation
warrior.health = 150;
thief.health = 100;
mage.health = 80;

// simulate some actions for mage

console.log("\n--- Battle Start ---\n");

console.log(
  `${mage.name} attacks ${thief.name} and deals ${mage.attack(thief)} damage.`,
);
console.log(`${thief.name} has ${thief.health} health left.`);

console.log(`${mage.name} heals ${thief.name} for ${mage.heal(thief)} health.`);
console.log(`${thief.name} has ${thief.health} health now.`);

console.log(
  `${mage.name} attacks ${warrior.name} and deals ${mage.attack(warrior)} damage.`,
);
console.log(`${warrior.name} has ${warrior.health} health left.`);

console.log("\n--- Battle End ---\n");

// show final states
console.log(
  `${warrior.name} - Health: ${warrior.health}, Strength: ${warrior.strength}, Defense: ${warrior.defense}, ShieldPoints: ${warrior.shieldPoints}, Instance: ${warrior.instance}`,
);
console.log(
  `${thief.name} - Health: ${thief.health}, Strength: ${thief.strength}, Defense: ${thief.defense}`,
);
console.log(
  `${mage.name} - Health: ${mage.health}, Strength: ${mage.strength}, Defense: ${mage.defense}, Magic Points: ${mage.magicPoints}`,
);
