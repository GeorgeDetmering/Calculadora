const readline = require('readline'); 
  
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout 
}); 
  
rl.question("Digite a primeira nota: ", (nota1Str) => { 
    const nota1 = parseFloat(nota1Str);

rl.question("Digite a segunda nota: ", (nota2Str) => { 
    const nota2 = parseFloat(nota2Str);

rl.question("Digite a terceira nota: ", (nota3Str) => { 
    const nota3 = parseFloat(nota3Str);

const media = (nota1 + nota2 + nota3) / 3;

const notaDeCorte = 7;

const resultado = media >= notaDeCorte ? "Aprovado" : "Reprovado";

console.log("Resultado:", resultado);

rl.close();
        });
    });
});