// const user={
//     name:'Nuris',
//     age:19,
//     info:function(){
//         console.log(`Hi ${this.name}, your age is ${this.age}`)
//     }
// }
// user.info()

// const auto={
//     mark:'Lexus',
//     info:function(){
//         console.log(`My car  is ${this.mark}`)
//     }
    
// }
// auto.info()

// const circle={
//     P:3.14,
//     radius:50,
//     s:function(){
//         let площадь= this.P*(this.radius**2)
//         console.log(` Площадь круга это ${площадь}`)
//     }
// }
// circle.s()

// const calc={
//     number1:5,
//     number2:4,
//     plus:function(){return this.number1+this.number2},
//     minus:function(){return this.number1-this.number2},
//     multiplicate:function(){return this.number1*this.number2},
//     divide:function(){return this.number1/this.number2}
// }

// console.log(calc.plus())
// console.log(calc.minus())
// console.log(calc.multiplicate())
// console.log(calc.divide())

    // function calendar(wekk){
    //     let week=['mon','tues','wen','thus','fri','sun','sat']
    //     this.day=week[3]
    //     console.log(`today is ${day}`)
    // }
    // calendar()

// const product ={
//     name:'Labtop',
//     price:1111,
//     info:function(){
//         console.log(`The ${this.name} is for ${this.price} $`)
//     }
// }
// product.info()

// const animal={
//     name:'Lion',
//     roar:'WRAAAAAAV',
//     roarMaking:function(){
//         console.log(`${this.name} is saying ${this.roar}`)
//     }
// }
// animal.roarMaking()

// Array.prototype.myReduce = function(callback, initialValue) {
//     let sum = initialValue === undefined ? this[0] : initialValue;

//     for (let i = initialValue === undefined ? 1 : 0; i < this.length; i++) {
//         sum = callback(sum, this[i]);
//     }

//     return sum;
// }

// const arr = [1, 2, 3, 4, 5];
// const newReduce = arr.myReduce((prev, curr) => {
//     return prev + curr;
// }, 0);

// console.log(newReduce);


