const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Usar rl.question para obter as notas do usuário
rl.question("Digite a primeira nota: ", function(nota1) {
  nota1 = parseFloat(nota1); // Converter a entrada para um número de ponto flutuante

  rl.question("Digite a segunda nota: ", function(nota2) {
    nota2 = parseFloat(nota2); // Converter a entrada para um número de ponto flutuante

    const mediaDesejada = 7;
    const mediaAtual = (nota1 + nota2) / 3;
    const notaMinimaTerceira = (mediaDesejada * 3) - (nota1 + nota2);

    console.log("Para atingir a média 7, você precisa tirar pelo menos:", notaMinimaTerceira, "na terceira prova.")
    rl.close();
  });
});