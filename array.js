//arrar lista de dados
//elementos quantidade
//indice inicia do 0
const paises = ['Alemanha', 'Brasil', 'Canada']
console.log('Acessando o pais: ' + paises[1]) //concatenar string
console.log(paises[1]) //acessando uma posição do array
console.log(paises.length) //tamanho do array

//operações com o Array
paises.push('Equador') // adicionando no final do array
paises.pop() //removendo ultimo elemento
paises.unshift('Antartida') //adicionando no inicio do array
paises.shift() //remover elemento da primeira posição
console.log(paises)