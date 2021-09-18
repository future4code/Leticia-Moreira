// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  let altura = Number(prompt("Insira a altura do Retangulo:"))
  let largura = Number(prompt("Insira a largura do Retangulo:"))
  let areaRetangulo = altura * largura
 console.log(areaRetangulo)
}
 calculaAreaRetangulo()



// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  let anoAtual = Number(prompt("Insira o ano atual:"))
  let anoNascimento = Number(prompt("Agora insira o ano de seu nascimento:"))
  let idade = anoAtual - anoNascimento
  console.log(idade)
}
imprimeIdade()

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  let peso = Number(prompt("Insira seu peso em Kg:"))
  let altura = Number(prompt("Agora insira sua altura em metros:"))
  let seuIMC = peso / (altura*altura)
  console.log(seuIMC)
}
calculaIMC()

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  let nome = prompt("Qual o seu nome?")
  let idade = Number(prompt("Qual a sua idade?"))
  let email = prompt("Agora insira seu e-mail:")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}
imprimeInformacoesUsuario()

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  let primeiraCor = prompt("Insira a primeira cor favorita:")
  let segundaCor = prompt("Insira a segunda cor favorita:")
  let terceiraCor = prompt("Insira a terceira cor favorita:")
  console.log([primeiraCor,segundaCor,terceiraCor])
}
imprimeTresCoresFavoritas()

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  let frase = prompt("Escreva uma frase:")
  console.log(frase.toUpperCase())
}
retornaStringEmMaiuscula()

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  let espetaculo = Number(prompt("Quanto seria o custo de um espetáculo de teatro?"))
  let ingresso = Number(prompt("Quanto custa cada ingresso?"))
  console.log(espetaculo/ingresso)
}
calculaIngressosEspetaculo()

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  let frase1 = prompt("Escreva uma frase:")
  let frase2 = prompt("Escreva outra frase, pode ser a mesma da anterior ou não:")
  let tamanhoFrase1 = frase1.length
  let tamanhoFrase2 = frase2.length
  console.log(tamanhoFrase1 === tamanhoFrase2)
}
checaStringsMesmoTamanho()

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  let texto1 = prompt("Escreva um texto?")
  let texto2 = prompt("Escreva outro texto, pode ser a mesma da anterior ou não:")
  let tamanhoTexto1 = texto1.toLowerCase()
  let tamanhoTexto2 = texto2.toLowerCase()
  console.log(tamanhoTexto1 === tamanhoTexto2)
}
checaIgualdadeDesconsiderandoCase()

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  let anoAtual1 = Number(prompt("Em que ano estamos?"))
  let anoNascimentoUsuario = Number(prompt("Qual o ano do seu nascimento?"))
  let anoRg = Number(prompt("Qual o ano que sua carteira de identidade foi emitida?"))
  let idade = anoAtual1 - anoNascimentoUsuario
  let validadeRg = anoAtual1 - anoRg
  let renova5 = idade <=20 && validadeRg >= 5
  let renova10 = idade >20 && idade <=50 && validadeRg >= 10
  let renova15 = idade >50 && validadeRg >= 15
  
  console.log(renova5 || renova10 || renova15)
}
checaRenovacaoRG()

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  let anoQualquer = Number(prompt("Digite um ano qualquer:"))
  let bissexto1 = (anoQualquer % 400) === 0
  let bissexto2 = ((anoQualquer % 4 ===0) && (anoQualquer % 100 ===0))
  let bissexto3 = anoQualquer && bissexto1 && bissexto2

  consolelog(bissexto3 || bissexto1 || bissexto2)
}

checaAnoBissexto()

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
}