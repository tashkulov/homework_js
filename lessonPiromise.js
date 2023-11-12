
//1
// let promise=new Promise((onResolve,onReject)=>{
//     setTimeout(()=>{
//         onResolve('"Promise выполнено"')
//     },2000)
    
// })

// promise.then(response=>{
//     console.log(response)
// })
//2
// let promise=new Promise((onResolve,onReject)=>{
//     setTimeout(()=>{
//         onReject('"Error 404 not found"')
//     },3000)
    
    
// })

// promise.then(response=>{
//     console.log(response)
// }).catch(error=>{console.log(error)})

//3

// function checkEvenNumber(number) {
//     return new Promise((Onresolve, Onreject) => {
//       if (number % 2 === 0) {
//         Onresolve(`${number} is an even number.`)
//       } else {
//         Onreject((`${number} is an odd number.`))
//       }
//     })
//   }
  
  
//   checkEvenNumber(7)
//     .then((result) => {console.log(result) })
//     .catch((error) => {console.error(error)})


//4
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json() )
    .then(e=>console.log(e))
    

  