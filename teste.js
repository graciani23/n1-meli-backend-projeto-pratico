// let date = new Date('10/24/2019')
// let dateString = date.toLocaleString('en-US', {
//     year: 'numeric',
//     month: '2-digit',
//     day: '2-digit',
// }).replace(/\//g, '-')

// console.log(date)

// let d1 = "10/02/2019"
// let d2 = "24/10/2019"
// let d3 = new Date("23/08/2019")


// let d4 = d3.toLocaleString('pt-br')

// console.log(d4)


// const array = [
//     {"data": "10/02/2019"},
//     {"data": "24/10/2019"},
//     {"data": "23/08/2019"}
// ]


let data = "10/02/2019"
function transformarConclusaoEmData(conclusao) {
  const conclusaoSplitada = conclusao.split('/')
  const conclusaoNova = new Date(conclusaoSplitada[2], conclusaoSplitada[1] - 1, conclusaoSplitada[0])
  return conclusaoNova
}

console.log(transformarConclusaoEmData(data))







// console.log(array[0].data)
// const ordenados = array.sort(function(a, b) {
//     return new Date(a.date) - new Date(b.date)
// })

// console.log(ordenados)



