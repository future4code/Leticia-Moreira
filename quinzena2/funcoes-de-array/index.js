//Exercicio 1
// //a
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
// ]

//  const nomeDosCachorros = pets.map((pets, indice, array) => {
//      return pets.nome
//  })

//  console.log(nomeDosCachorros)

//  //b
//  const apenasCachorroSalsicha = pets.filter((pets, indice, array) => {
//     return pets.raca ==="Salsicha"
//  })

//  console.log(apenasCachorroSalsicha)

//  //c

// const selecionarPoodle = (item, indice, array) => {
//     return item.raca === "Poodle"
// }
// const cachorrosPoodle = pets.filter(selecionarPoodle)

// const pegarNome = (item, indice, array) => {
//     return item.nome
// }
// const nomesCachorrosPoodle = cachorrosPoodle.map(pegarNome)

// console.log("Você ganhou um cupom de desconto de 10% para tosar o/a", nomesCachorrosPoodle[0])
// console.log("Você ganhou um cupom de desconto de 10% para tosar o/a", nomesCachorrosPoodle[1])

//Exercicio 2
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]
// //a
// const nomeDosProdutos = produtos.map((produtos, indice, array) => {
//        return produtos.nome
// })
// console.log(nomeDosProdutos)

// //b

// const selecionarNome = (item, indice, array) => {
//     return item.nome
// }
// const selecionaProduto = produtos.filter(selecionarNome)

// const buscarProduto = (item, indice, array) => {
//     return item.preco * 0.95 
// }
// const precoProduto = selecionaProduto.map(buscarProduto)

// console.log("nome: ",nomeDosProdutos[0], ", preço: ",precoProduto[0].toFixed(2))
// console.log("nome: ",nomeDosProdutos[1], ", preço: ",precoProduto[1].toFixed(2))
// console.log("nome: ",nomeDosProdutos[2], ", preço: ",precoProduto[2].toFixed(2))
// console.log("nome: ",nomeDosProdutos[3], ", preço: ",precoProduto[3].toFixed(2))
// console.log("nome: ",nomeDosProdutos[4], ", preço: ",precoProduto[4].toFixed(2))
// console.log("nome: ",nomeDosProdutos[5], ", preço: ",precoProduto[5].toFixed(2))
// console.log("nome: ",nomeDosProdutos[6], ", preço: ",precoProduto[6].toFixed(2))
// console.log("nome: ",nomeDosProdutos[7], ", preço: ",precoProduto[7].toFixed(2))
// console.log("nome: ",nomeDosProdutos[8], ", preço: ",precoProduto[8].toFixed(2))
// console.log("nome: ",nomeDosProdutos[9], ", preço: ",precoProduto[9].toFixed(2))


// //c

// const apenasBebidas = produtos.filter((produtos, indice, array) => {
//         return produtos.categoria ==="Bebidas"
//  })
    
//  console.log(apenasBebidas)

// //d
// const pegarYpe = (item, indice, array) => {
//         return item.nome.includes("Ypê")
//      }
     
// const produtosYpe = produtos.filter(pegarYpe)

// console.log(produtosYpe)

// //e


// const selecionarYpe = (item, indice, array) => {
//     return item.nome.includes("Ypê")
// }
// const selecionaProdutoYpe = produtos.filter(selecionarYpe)

// const buscarYpe = (item, indice, array) => {
//     return item.preco
// }
// const precoProdutoYpe = selecionaProdutoYpe.map(buscarYpe)

// const nomeYpe = (item, indice, array) => {
//     return item.nome
// }
// const acharYpe = selecionaProdutoYpe.map(nomeYpe)

// console.log("Compre", acharYpe[0], "por R$" ,precoProdutoYpe[0].toFixed(2), ".")
// console.log("Compre", acharYpe[1], "por R$",precoProdutoYpe[1].toFixed(2), ".")

