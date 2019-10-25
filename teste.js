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


const array = [
    {"data": "10/02/2019"},
    {"data": "24/10/2019"},
    {"data": "23/08/2019"}
]
console.log(array[0].data)
// const ordenados = array.sort(function(a, b) {
//     return new Date(a.date) - new Date(b.date)
// })

// console.log(ordenados)



// function FormataStringData(data) {
//     var dia  = data.split("/")[0];
//     var mes  = data.split("/")[1];
//     var ano  = data.split("/")[2];
  
//     return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
  }
  
  
  // console.log(FormataStringData(array[0].data));
  /*

//   function getFormattedDate(date) {
//     let year = date.getFullYear();
//     let month = (1 + date.getMonth()).toString().padStart(2, '0');
//     let day = date.getDate().toString().padStart(2, '0');
  
//     return month + '/' + day + '/' + year;
// }

// console.log(getFormattedDate(array[0].data))

function FormataStringData(data) {
  var dia  = data.split("/")[0];
  var mes  = data.split("/")[1];
  var ano  = data.split("/")[2];

  return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);

  console.log(FormataStringData(array[0]))
  */