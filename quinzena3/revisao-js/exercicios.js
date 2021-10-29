// EXERCÍCIO 01 
   function inverteArray(array) {
 

}

// EXERCÍCIO 02 //ok
// function retornaNumerosParesElevadosADois(array) {
//   let numerosPares = []
//     for (let numero of array){
//     if (numero % 2 === 0){
//       numerosPares.push(numero**2)
      
//         }
//     }
//   return numerosPares
//     }


// EXERCÍCIO 03 //ok
//  function retornaNumerosPares(array) {
//   let numerosPares = []
//   for (let numero of array){
//   if (numero % 2 === 0){
//     numerosPares.push(numero)
//   }
//   }
// return numerosPares
//   }





// EXERCÍCIO 04 //ok
// function retornaMaiorNumero(array) {
//   let maiorNumero = Math.max.apply(null, array)
//   console.log(maiorNumero)
//   return maiorNumero
// }

// EXERCÍCIO 05 //ok
// function retornaQuantidadeElementos(array) {
//   let quantidadeElementos = array.length
//   console.log(array)
//   return quantidadeElementos
  
// }

// EXERCÍCIO 06 //ok
// function retornaExpressoesBooleanas() {
//   const booleano1 = true
//   const booleano2 = false
//   const booleano3 = !booleano2 
//   const booleano4 = !booleano3 
 
//   const respostas =
//   [booleano1 && booleano2 && !booleano4, 
//   (booleano1 && booleano2) || !booleano3,
//   (booleano2 || booleano3) && (booleano4 || booleano1),
//   !(booleano2 && booleano3) || !(booleano1 && booleano3),
//   !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)]
 
//   console.log(respostas)
//   return respostas
// }


// EXERCÍCIO 07 //ok
// function retornaNNumerosPares(n) {
// let numerosPares = []
// for (let i = 0; numerosPares.length < n; i ++){
//   if (i % 2 === 0){
//     numerosPares.push(i)
//   }
// }
// return numerosPares
// }

// EXERCÍCIO 08 //ok
// function checaTriangulo(a, b, c) {
//     const tresLados = "Equilátero"
//     const doisLados = "Isósceles"
//     const nenhumLado = "Escaleno"

//   if (a === b && b === c ) {
//     return tresLados
//   } else if ( a === b || a === c || b === c) {
//     return doisLados
//   } else {
//     return nenhumLado
//   }
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'


// EXERCÍCIO 09 //ok
// function comparaDoisNumeros(num1, num2) {
//   let number = [num1,num2]
//   let maiorNumero = Math.max.apply(null, number)
//   let menorNumero = Math.min.apply(null, number)
//   let maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
//   let diferenca = maiorNumero - menorNumero
    
  
//   const resposta = {
//     maiorNumero,
//     maiorDivisivelPorMenor,
//     diferenca
//   }
//   return resposta
//   }
  
// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11 //ok
// function ordenaArray(array) {
// let arr = array
//  arr.sort(function(a, b){
//  return a-b})
//  return arr
// }

// EXERCÍCIO 12 //ok
// function filmeFavorito() {
  // const filme = {
  // nome:"O Diabo Veste Prada",
  // ano:2006,
  // diretor:"David Frankel",
  // atores:["Meryl Streep","Anne Hathaway","Emily Blunt","Stanley Tucci"]

// }
// console.log(filme)
//  return filme
// }

// EXERCÍCIO 13 //ok
// function imprimeChamada() {

//    const filme = {
//     nome:"O Diabo Veste Prada",
//     ano: 2006,
//     diretor:"David Frankel",
//     atores:["Meryl Streep", " Anne Hathaway", " Emily Blunt"," Stanley Tucci"]
//    }
   
//      return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`
     
// }

// EXERCÍCIO 14 //ok
// function criaRetangulo(lado1, lado2) {
//  const retangulo = {
//  largura: lado1,
//  altura: lado2,
//  perimetro: (2 * (lado1 + lado2)),
//  area: (lado1 * lado2),

// }
// return retangulo
// }

// EXERCÍCIO 15 //ok
// function anonimizaPessoa(pessoa) {
   
//  let novaPessoa = {
//    ...pessoa,
//    nome: "ANÔNIMO"
//  }
//   return novaPessoa
 
// }

// EXERCÍCIO 16A //ok
// function maioresDe18(arrayDePessoas) {
//  const maiores = arrayDePessoas.filter ((arrayDePessoas, indice, array) => {
// return arrayDePessoas.idade >= 18})

//  return maiores
//  }
  



// EXERCÍCIO 16B //ok
// function menoresDe18(arrayDePessoas) {
//   const menores = arrayDePessoas.filter ((arrayDePessoas, indice, array) => {
//   return arrayDePessoas.idade < 18})

//   return menores
//   }


// EXERCÍCIO 17A
// function multiplicaArrayPor2(array) {
//   let multiplica = array * 2
//   return multiplica
  
// }

  
  
// }

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A //ok
// function retornaPessoasAutorizadas(pessoas) {
//   const autorizada = pessoas.filter ((pessoas, indice, array) => {
//   return pessoas.altura >= 1.5 && pessoas.idade > 14 && pessoas.idade < 60})

//   return autorizada
//   }


// EXERCÍCIO 18B //ok
// function retornaPessoasNaoAutorizadas(pessoas) {
//   const naoAutorizada = pessoas.filter ((pessoas, indice, array) => {
//     return pessoas.altura < 1.5 || pessoas.idade <= 14 || pessoas.idade > 60})
  
//     return naoAutorizada
//     }


// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}
// let arr = array
//  arr.sort(function(a, b){
//  return a-b})
//  return arr
// }

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
//   const data = consultasData.map ((consultasData, indice, array) => {
// return consultasData.dataDaConsulta})
//  const nome = consultasData.filter ((consultasData, indice, array) => {
//   return consultasData === data})
// data.sort((function(a, b){
//     return a-b}))
// console.log(nome, data)
 

  }



// EXERCÍCIO 20
function calculaSaldo(contas) {
 
}


