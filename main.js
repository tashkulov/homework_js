// //Задания для строк:
// //Легкое задание (declaration function):
// // function concatString(str1,str2){
// //     const str3=str1.concat(str2)
// //     return str3;
// // }
// // console.log(concatString('Nuritto','Buritto'))



// // //Среднее задание (expression function):
// //1
// // const replaceFn=function(text1,pickarg,){
        
// // }


// //2
// // let stringToLowerCase=function(str){
// //     return str.toLowerCase()
// // }
// // console.log(stringToLowerCase('NURISS'))



// //3
// // let includesFn=function(srt1,str2){
// //     if(srt1.includes(str2)){
// //         return true
// //     }else{
// //         return false
// //     }
// // }
// // console.log(includesFn('qwfwfr','q'))



// //Легкое задание (arrow function):
// // let getIndexOf=(st1,str2)=>{
// //     return st1.indexOf(str2)
// // }
// // console.log(getIndexOf('qwerty','f'))



// //Среднее задание (expression function):
// // let sliceFn=function(str1,int1,int2){
// //     return str1.slice(int1,int2)
// // }
// // console.log(sliceFn('MyNameIsNuritto',1,11))



// //Задания для чисел:
// //Среднее задание (declaration function):
// // function convertToString(str){
// //     console.log(str.toString())
// // }
// // convertToString('1234')



// //Легкое задание (expression function):

// // let fn=function(num){
// //     console.log(parseFloat(num))
// // }
// // fn('123.2323')

// // let sum=(num1,num2)=>{
// //     console.log(num1+num2)
// // }
// // sum(5,55)


// // function getFixedNumber(arg){
// //     console.log( arg.toFixed(2)
// //     )
// // }
// // getFixedNumber(55.55)



// //Среднее задание (expression function):
// // const fn=function(int){
// //     console.log(parseInt(int))
// // }
// // fn('542')



// //Легкое задание (declaration function):
// // function addNumbers(int1,int2){
// //     console.log(parseInt(int1)+parseInt(int2))
// // }
// // addNumbers(34,43)

// //Среднее задание (expression function):
// // let fn=function(str){
// //     console.log(parseFloat(str))
// // }
// // fn('134.243')


// //Задания для массивов:

// //Легкое задание:
// // let fruits=['apple','banana','orange']
// // fruits.push('avocado')
// // fruits.pop()
// // console.log(fruits)



// //Среднее задание:
// // Создаем массив с числами
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Создаем пустой массив для четных чисел
// const evenNumbers = [];

// // Используем цикл for для извлечения четных чисел
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         evenNumbers.push(numbers[i]);
//     }
// }

// let evenNumbersString = "";
// for (let i = 0; i < evenNumbers.length; i++) {
//     evenNumbersString += evenNumbers[i];
//     if (i < evenNumbers.length - 1) {
//         evenNumbersString += ', ';
//     }
// }

// console.log(evenNumbersString);
