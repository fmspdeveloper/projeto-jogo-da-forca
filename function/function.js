import input from 'readline-sync';
import listaDeFrutas from '../model/model.js';

function selecionarFrutaAleatoria() {
  const palavraEscolhida = listaDeFrutas[Math.floor(Math.random() * listaDeFrutas.length)].toLowerCase();
  let tentativas = 6;
  let letrasTentadas = [];

  console.log("----Jogo da Forca----");

  const primeiraLetra = palavraEscolhida.charAt(0);
  const underline = "_".repeat(palavraEscolhida.length - 1);
  let palavraOculta = primeiraLetra + underline;

  function atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida) {
    let palavraOcultaArray = palavraOculta.split('');
    for (let i = 0; i < palavraEscolhida.length; i++) {
      if (letraDigitada === palavraEscolhida.charAt(i)) {
        palavraOcultaArray[i] = letraDigitada;
      }
    }
    return palavraOcultaArray.join('');
  }

  function validarLetraDigitada(letraDigitada) {
    if (letraDigitada.length === 1 && letraDigitada.match(/[a-zA-Z]/)) {
      return true;
    } else {
      console.log("Digite apenas uma letra.");
      return false;
    }
  }

  let statusJogo = 'Em andamento';
  while (statusJogo === 'Em andamento' && tentativas > 0) {
    console.log("\nFruta: " + palavraOculta);
    console.log("Tentativas restantes: " + tentativas);
    console.log("Letras tentadas: " + letrasTentadas.join(', '));

    const letraDigitada = input.question("Digite uma letra: ").toLowerCase();

    if (!validarLetraDigitada(letraDigitada)) {
      continue;
    }

    if (letrasTentadas.includes(letraDigitada)) {
      console.log("Você já tentou esta letra!");
      continue;
    }

    letrasTentadas.push(letraDigitada);

    if (palavraEscolhida.includes(letraDigitada)) {
      console.log("Você acertou a letra!");
      palavraOculta = atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida);

      if (palavraOculta === palavraEscolhida) {
        statusJogo = 'Ganhou';
      }
    } else {
      console.log("Você errou a letra!");
      tentativas--;

      if (tentativas === 0) {
        statusJogo = 'Perdeu';
      }
    }
  }

  if (statusJogo === 'Ganhou') {
    console.log("\nParabéns! Você acertou a fruta: " + palavraEscolhida);
  } else {
    console.log("\nGame over! A fruta era: " + palavraEscolhida);
  }
}

export default selecionarFrutaAleatoria;
