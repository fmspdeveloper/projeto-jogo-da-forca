import input from 'readline-sync';
import listaDeFrutas from '../model/model.js';

function selecionarFrutaAleatoria(){
  const numeroAleatorio = Math.floor(Math.random() * listaDeFrutas.length);
  const frutaSelecionada = listaDeFrutas[numeroAleatorio];
  const QtdeLetras = frutaSelecionada.length;
  console.log("----Jogo da Forca----");
  console.log("A fruta selecionada tem " + QtdeLetras + " letras");

  let letrasCorretas = [];
  let letrasErradas = [];
  let tentativas = 4;
  let acertou = false;

  while (tentativas > 0 && !acertou) {
    console.log("Tentativas restantes: " + tentativas);
    console.log("Letras corretas: " + letrasCorretas.join(", "));
    console.log("Letras erradas: " + letrasErradas.join(", "));
    console.log("Digite uma letra:");
    let letra = input.question().toLowerCase();

    if (letrasCorretas.includes(letra) || letrasErradas.includes(letra)) {
      console.log("Você já tentou essa letra. Tente outra.");
      continue;
    }

    if (frutaSelecionada.toLowerCase().includes(letra)) {
      letrasCorretas.push(letra);
      console.log("Você acertou uma letra!");
    } else {
      letrasErradas.push(letra);
      tentativas--;
      console.log("Letra errada. Tente novamente.");
    }

    acertou = frutaSelecionada.toLowerCase().split('').every(l => letrasCorretas.includes(l));
  }




}

export default selecionarFrutaAleatoria;
