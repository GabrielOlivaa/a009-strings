//Crie a const para a frase aqui

const frase =  ` Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
console.log(frase)

const Nfrase= frase.replace("verde", "rosa").replace("azul", "laranja")
console.log(Nfrase)

console.log(Nfrase. replaceAll("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR"))