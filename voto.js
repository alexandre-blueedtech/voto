var prompt = require("prompt-sync")();

let Gabriel = 0;
let Alexandre = 0;
let Thiago = 0;
let votoEmBranco = 0;
let votoNulo = 0;

function exibirResultado() {
  console.log(`O voto total do primeiro candidato foi de ${Gabriel}`);
  console.log(`O voto total do segundo candidato foi de ${Alexandre} `);
  console.log(`O voto total do terceiro candidato foi de ${Thiago}`);
  console.log(`O voto total em branco foi de ${votoEmBranco}`);
  console.log(`o voto total em nulo foi de ${votoNulo}`);
}
var quantidade = prompt(
  "Quantas pessoas irão verificar se podem votar ou não? "
);
for (i = 1; i <= quantidade; i++) {
  var escolha;
  var idade = prompt(`Qual é a sua idade, pessoa de número ${i}? `);
  if (idade >= 18) {
    escolha = "OBRIGATÓRIA";
    console.log(`Sua escolha de voto é: ${escolha}`);
  } else if (idade <= 17 && idade >= 16) {
    escolha = "OPCIONAL";
    console.log(`Sua escolha de voto é: ${escolha}`);
  } else {
    escolha = "NEGADA";
    console.log(`Sua escolha de voto é: ${escolha}`);
  }

  if (escolha == "NEGADA") {
    console.log("Você não pode votar");
  } else if (escolha == "OPCIONAL") {
    while (true) {
      let pergunta = prompt("Você deseja votar? ");
      pergunta = pergunta.toUpperCase();
      if (pergunta == "SIM" || pergunta == "NÃO" || pergunta == "NAO") {
        if (pergunta == "SIM") {
          voto();
          break;
        } else {
          console.log("Você escolheu não votar");
          break;
        }
      } else {
        console.log("Digite SIM ou NÃO");
      }
    }
  } else {
    voto();
    break;
  }

  function voto() {
    votar: while (true) {
      let votar = prompt(
        "Qual candidato voce deseja escolher : GABRIEL, ALEXANDRE, THIAGO, VOTAR EM BRANCO OU NULO "
      );
      votar = votar.toUpperCase();
      if (
        votar == "GABRIEL" ||
        votar == "ALEXANDRE" ||
        votar == "THIAGO" ||
        votar == "VOTAR EM BRANCO" ||
        votar == "NULO"
      ) {
        if (votar == "GABRIEL") {
          Gabriel += 1;
          break votar;
        } else if (votar == "ALEXANDRE") {
          Alexandre += 1;
          break votar;
        } else if (votar == "THIAGO") {
          Thiago += 1;
          break votar;
        } else if (votar == "VOTAR EM BRANCO") {
          votoEmBranco += 1;
          break votar;
        } else {
           votoNulo += 1;
          break votar;
        }
      } else {
        console.log("Digite UMA DAS OPÇÕES como resposta.");
      }
    }
  }
}
exibirResultado();