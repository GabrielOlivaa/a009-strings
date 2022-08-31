//Crie a const para a frase aqui

const frase =  ` Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
console.log(frase)

const frase1= ` Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair "`
const Nfrase1= frase.replace("verde", "rosa").replace("azul", "laranja")
console.log(Nfrase1)

console.log(Nfrase1. replaceAll("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR"))