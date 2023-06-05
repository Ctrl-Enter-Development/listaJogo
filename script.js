let jogadores = [];

function adicionarJogador() {
  const playerNameInput = document.getElementById('playerName');
  const jogador = playerNameInput.value.trim();

  if (jogador === '') {
    alert('Por favor, insira um nome válido.');
    return;
  }

  jogadores.push(jogador);
  playerNameInput.value = '';
}

function organizarTimes() {
  if (jogadores.length < 11) {
    alert('Por favor, insira pelo menos 11 jogadores.');
    return;
  }

  const timesContainer = document.getElementById('timesContainer');
  timesContainer.innerHTML = '';

  let jogadoresDisponiveis = [...jogadores];

  while (jogadoresDisponiveis.length >= 3) {
    const timeA = selecionarJogadores(jogadoresDisponiveis);
    const timeB = selecionarJogadores(jogadoresDisponiveis);

    const vencedor = realizarJogo(timeA, timeB);

    const jogadorASubstituir = vencedor === 'timeA' ? timeB[0] : timeA[0];
    jogadoresDisponiveis.push(jogadorASubstituir);

    exibirTimes(timeA, timeB);
  }
}

function selecionarJogadores(jogadoresDisponiveis) {
  const time = [];

  for (let i = 0; i < 3; i++) {
    const jogadorIndex = Math.floor(Math.random() * jogadoresDisponiveis.length);
    const jogador = jogadoresDisponiveis[jogadorIndex];
    time.push(jogador);
    jogadoresDisponiveis.splice(jogadorIndex, 1);
  }

  return time;
}

function realizarJogo(timeA, timeB) {
  // Lógica do jogo - você pode implementar sua própria lógica de jogo aqui

// Exemplo de lógica simples: o time A sempre vence
return ‘timeA’;
}

function exibirTimes(timeA, timeB) {
const timesContainer = document.getElementById(‘timesContainer’);
const timeAContainer = document.createElement(‘div’);
const timeBContainer = document.createElement(‘div’);

timeAContainer.className = ‘time col-md-5’;
timeBContainer.className = ‘time col-md-5’;

timeAContainer.textContent = ‘Time A: ’ + timeA.join(’, ’);
timeBContainer.textContent = ‘Time B: ’ + timeB.join(’, ’);

timesContainer.appendChild(timeAContainer);
timesContainer.appendChild(timeBContainer);
}
