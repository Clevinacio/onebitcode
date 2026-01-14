const boardRegions = document.querySelectorAll('#board span')
const vBoard = []
let turnPlayer = ''

function updateTitle() {
  const playerInput = document.getElementById(turnPlayer)
  document.getElementById('turn-player').innerText = playerInput.value
}

function initializeGame() {
  // Inicializa o tabuleiro virtual
  vBoard.length = 0
  vBoard.push(['', '', ''])
  vBoard.push(['', '', ''])
  vBoard.push(['', '', ''])
  
  turnPlayer = 'player1'
  document.querySelector('h2').innerHTML = 'Vez de: <span id="turn-player"></span>'
  updateTitle()
  
  // Limpa o tabuleiro e remove as classes
  boardRegions.forEach(function (element) {
    element.classList.remove('winner')
    element.innerText = ''
    element.style.cursor = 'pointer'
    element.addEventListener('click', handleBoardClick)
  })
  
  document.getElementById('result-message').innerText = ''
}

function getWinRegions() {
  const winRegions = []
  if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
    winRegions.push("0.0", "0.1", "0.2")
  if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
    winRegions.push("1.0", "1.1", "1.2")
  if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
    winRegions.push("2.0", "2.1", "2.2")
  if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
    winRegions.push("0.0", "1.0", "2.0")
  if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
    winRegions.push("0.1", "1.1", "2.1")
  if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
    winRegions.push("0.2", "1.2", "2.2")
  if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
    winRegions.push("0.0", "1.1", "2.2")
  if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
    winRegions.push("0.2", "1.1", "2.0")
  return winRegions
}

function disableBoard() {
  boardRegions.forEach(function (element) { 
    element.removeEventListener('click', handleBoardClick)
    element.style.cursor = 'default'
  })
}

function handleWin(regions) {
  regions.forEach(function (region) {
    document.querySelector('[data-region="' + region + '"]').classList.add('winner')
  })
  const playerName = document.getElementById(turnPlayer).value
  document.querySelector('h2').innerHTML = playerName + ' venceu!'
  document.getElementById('result-message').innerText = 'Parabéns!'
  disableBoard()
}

function handleBoardClick(ev) {
  const span = ev.currentTarget
  const region = span.dataset.region // N.N
  const rowColumnPair = region.split('.') // ["N", "N"]
  const row = rowColumnPair[0]
  const column = rowColumnPair[1]
  
  if (turnPlayer === 'player1') {
    span.innerText = 'X'
    vBoard[row][column] = 'X'
  } else {
    span.innerText = 'O'
    vBoard[row][column] = 'O'
  }
  
  span.removeEventListener('click', handleBoardClick)
  
  const winRegions = getWinRegions()
  if (winRegions.length > 0) {
    handleWin(winRegions)
  } else if (vBoard.flat().includes('')) {
    turnPlayer = turnPlayer === 'player1' ? 'player2' : 'player1'
    updateTitle()
  } else {
    document.querySelector('h2').innerHTML = 'Empate!'
    document.getElementById('result-message').innerText = 'Deu velha!'
  }
}

// Botão Iniciar Jogo
document.getElementById('start-btn').addEventListener('click', function () {
    const player1 = document.getElementById('player1').value
    const player2 = document.getElementById('player2').value

    if(player1 && player2) {
        document.getElementById('setup').classList.add('hidden')
        document.getElementById('game-container').classList.remove('hidden')
        initializeGame()
    } else {
        alert("Por favor, informe o nome dos dois jogadores.")
    }
})

// Botão Reiniciar Jogo
document.getElementById('restart-btn').addEventListener('click', initializeGame)
