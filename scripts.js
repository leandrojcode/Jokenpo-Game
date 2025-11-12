const result = document.querySelector('.result');
const playerScore = document.querySelector('.player-score span');
const computerScore = document.querySelector('.computer-score span');
const resetBtn = document.querySelector('.reset-btn');

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let selectedChoice = null;

// Selecionar jogada do jogador (não joga ainda)
const selectChoice = (choice) => {
  selectedChoice = choice;

  // Destaque visual da escolha
  document.querySelectorAll('.buttons button').forEach(btn => {
    btn.classList.remove('selected');
  });
  document.getElementById(choice).classList.add('selected');

  result.textContent = `Você escolheu ${choice.toUpperCase()}! Clique em ▶️ Play para jogar.`;
  result.className = 'result';
};

// Jogada aleatória da máquina
const playMachine = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

// Jogar
const playGame = () => {
  if (!selectedChoice) {
    result.textContent = 'Escolha uma opção antes de apertar Play!';
    result.className = 'result';
    return;
  }

  const machineChoice = playMachine();
  console.log(`Humano: ${selectedChoice} | Máquina: ${machineChoice}`);

  result.className = 'result';

  if (selectedChoice === machineChoice) {
    result.textContent = `Empate! Ambos escolheram ${machineChoice}.`;
    result.classList.add('draw');
  } else if (
    (selectedChoice === 'paper' && machineChoice === 'rock') ||
    (selectedChoice === 'scissors' && machineChoice === 'paper') ||
    (selectedChoice === 'rock' && machineChoice === 'scissors')
  ) {
    playerScoreNumber++;
    playerScore.textContent = playerScoreNumber;
    result.textContent = `Você venceu! ${selectedChoice} ganha de ${machineChoice}.`;
    result.classList.add('win');
  } else {
    computerScoreNumber++;
    computerScore.textContent = computerScoreNumber;
    result.textContent = `Você perdeu! ${machineChoice} ganha de ${selectedChoice}.`;
    result.classList.add('lose');
  }

  // Resetar destaque
  document.querySelectorAll('.buttons button').forEach(btn => {
    btn.classList.remove('selected');
  });
  selectedChoice = null;
};

// Reset
resetBtn.addEventListener('click', () => {
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScore.textContent = '0';
  computerScore.textContent = '0';
  result.textContent = '';
  result.className = 'result';
  selectedChoice = null;
  document.querySelectorAll('.buttons button').forEach(btn => {
    btn.classList.remove('selected');
  });
});


