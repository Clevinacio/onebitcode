const spaceships = [];

function addSpaceship(name: string, pilot: string, crewLimit: number) {
  const spaceship = {
    name,
    pilot,
    crewLimit,
    crew: [],
    inMission: false,
  };
  spaceships.push(spaceship);

  return spaceship;
}

function findSpaceship(name: string) {
  let spaceship: {
    name: string;
    pilot: string;
    crewLimit: number;
    crew: string[];
    inMission: boolean;
  };

  spaceship = spaceships.find((ship) => ship.name === name);

  return spaceship;
}

function addCrewMember(
  member: string,
  spaceship: { name: string; crewLimit: number; crew: string[] },
) {
  if (spaceship.crew.length >= spaceship.crewLimit) {
    alert("Limite de tripulantes atingido!");
  } else {
    spaceship.crew.push(member);
    alert(`Tripulante ${member} adicionado na ${spaceship.name} com sucesso!`);
  }
}

function sendInMission(spaceship: {
  name: string;
  crewLimit: number;
  crew: string[];
  inMission: boolean;
}) {
  if (spaceship.inMission) {
    alert(`A nave ${spaceship.name} já está em missão!`);
  } else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
    alert(
      `A nave ${spaceship.name} não possui tripulantes para iniciar a missão!`,
    );
  } else {
    spaceship.inMission = true;
    alert(`A nave ${spaceship.name} foi enviada para a missão com sucesso!`);
  }
}

function firstMenuOption() {
  const name = prompt("Digite o nome da nave:");
  const pilot = prompt("Digite o nome do piloto:");
  const crewLimit = Number(prompt("Digite o limite de tripulantes:"));

  const confirmation = confirm(
    `Confirma o cadastro da nave ${name} com piloto ${pilot} e limite de tripulantes ${crewLimit}?`,
  );

  if (confirmation) {
    const newSpaceship = addSpaceship(name, pilot, crewLimit);
    alert(
      `Nave ${newSpaceship.name} cadastrada com sucesso! Piloto: ${newSpaceship.pilot}, Limite de tripulantes: ${newSpaceship.crewLimit}`,
    );
  } else {
    alert("Cadastro de nave cancelado.");
  }
}

function secondMenuOption() {
  const member = prompt("Digite o nome do tripulante:");
  const spaceshipName = prompt("Digite o nome da nave:");

  const spaceship = findSpaceship(spaceshipName);
  if (spaceship) {
    addCrewMember(member, spaceship);
  } else {
    alert(`Nave ${spaceshipName} não encontrada!`);
  }
}

function thirdMenuOption() {
  const spaceshipName = prompt("Digite o nome da nave:");

  const spaceship = findSpaceship(spaceshipName);
  if (spaceship) {
    sendInMission(spaceship);
  } else {
    alert(`Nave ${spaceshipName} não encontrada!`);
  }
}

function fourthMenuOption() {
  let spaceshipList = "Naves cadastradas:\n";

  spaceships.forEach(
    (ship: {
      name: string;
      pilot: string;
      crew: string[];
      crewLimit: number;
      inMission: boolean;
    }) => {
      spaceshipList += `Nome: ${ship.name}, Piloto: ${ship.pilot}, Tripulantes: ${ship.crew.length}/${ship.crewLimit}, Em missão: ${ship.inMission ? "Sim" : "Não"}\n`;
    },
  );

  alert(spaceshipList);
}

let userOption = 0;

do {
  const menu = `Menu:
1. Cadastrar nave
2. Adicionar tripulante
3. Enviar nave para missão
4. Listar naves
5. Sair
Digite o número da opção desejada:`;

  userOption = Number(prompt(menu));

  switch (userOption) {
    case 1:
      firstMenuOption();
      break;
    case 2:
      secondMenuOption();
      break;
    case 3:
      thirdMenuOption();
      break;
    case 4:
      fourthMenuOption();
      break;
    case 5:
      alert("Saindo do programa...");
      break;
    default:
      alert("Opção inválida! Tente novamente.");
  }
} while (userOption !== 5);
