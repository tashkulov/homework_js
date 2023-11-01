// //Задания для строк:

// //1
// //Легкое задание (declaration function):
// // function concatString(str1,str2){
// //     const str3=str1.concat(str2)
// //     return str3;
// // }
// // console.log(concatString('Nuritto','Buritto'))


// //2
// // let replaceAllOccurrences=function(inputString, search, replacement) {
// //     const replacedString = inputString.replaceAll(search, replacement);
// //     return replacedString;
// //   }
  
// //   const inputStr = "my name is nuris";
// //   const searchSubstring = "nuris";
// //   const replacementSubstring = "adelina";
  
// //   const resultStr = replaceAllOccurrences(inputStr, searchSubstring, replacementSubstring);
// //   console.log(resultStr);


// //3
// // let stringToLowerCase=function(str){
// //     return str.toLowerCase()
// // }
// // console.log(stringToLowerCase('NURISS'))



// //4
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


// //5
// //Среднее задание (expression function):
// // let sliceFn=function(str1,int1,int2){
// //     return str1.slice(int1,int2)
// // }
// // console.log(sliceFn('MyNameIsNuritto',1,11))


// //6
// //Задания для чисел:
// //Среднее задание (declaration function):
// // function convertToString(str){
// //     console.log(str.toString())
// // }
// // convertToString('1234')


// //7
// //Легкое задание (expression function):
// // let fn=function(num){
// //     console.log(parseFloat(num))
// // }
// // fn('123.2323')

// //8
// // let sum=(num1,num2)=>{
// //     console.log(num1+num2)
// // }
// // sum(5,55)

// //9
// // function getFixedNumber(arg){
// //     console.log( arg.toFixed(2)
// //     )
// // }
// // getFixedNumber(55.55)


// //10
// //Среднее задание (expression function):
// // const fn=function(int){
// //     console.log(parseInt(int))
// // }
// // fn('542')


// //11
// //Легкое задание (declaration function):
// // function addNumbers(int1,int2){
// //     console.log(parseInt(int1)+parseInt(int2))
// // }
// // addNumbers(34,43)


// //12
// //Среднее задание (expression function):
// // let fn=function(str){
// //     console.log(parseFloat(str))
// // }
// // fn('134.243')


// //Задания для массивов:
// //13
// //Легкое задание:
// // let fruits=['apple','banana','orange']
// // fruits.push('avocado')
// // fruits.pop()
// // console.log(fruits)


// //14
// //Среднее задание:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const evenNumbers = []
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         evenNumbers.push(numbers[i])
//     }
// }
// //15
// let evenNumbersString = ""
// for (let i = 0; i < evenNumbers.length; i++) {
//     evenNumbersString += evenNumbers[i];
//     if (i < evenNumbers.length - 1) {
//         evenNumbersString += ', '
//     }
// }
// console.log(evenNumbersString);

// //Легкое задание:
// //Создайте массив colors с несколькими цветами. Используйте метод unshift,
// // чтобы добавить новый цвет в начало массива. Затем используйте метод shift,
// // чтобы удалить первый цвет из массива. Выведите получившийся массив в консоль.
// //16
// const colors =['black','yellow','dark']
// colors.unshift('blue')
// colors.shift()
// console.log(colors)

// // Среднее задание:
// // Создайте два массива: firstArray и secondArray. Используйте метод concat для объединения их в 
// // один массив mergedArray. Затем используйте метод includes для проверки, содержит 
// // ли mergedArray определенное значение. Выведите результат в консоль
// //17
// let firstArray =[1,2,3,4,5]
// let secondArray=[6,7,8,9,0]
// let mergedArray=firstArray.concat(secondArray)
// console.log(mergedArray.includes(5))

// // Легкое задание:
// // Создайте массив animals с несколькими животными.
// //  Используйте метод push для добавления нового
// //   животного в конец массива. Затем используйте
// //    метод indexOf для определения индекса нового 
// //    животного в массиве.
// //18
// let animals=['lion','tiger','bear']
// animals.push('python')
// console.log(animals.indexOf('python'))


// // Среднее задание:
// // Создайте массив numbers с числами. Используйте метод slice для создания нового массива, который содержит только первые два элемента из исходного массива. Затем используйте метод reverse, чтобы перевернуть порядок элементов в новом массиве. Наконец, используйте метод toString для преобразования массива в строку и выведите результат в консоль.
// //19
// let numbers2=[1,2,3,4,5]
// numbers2.slice(0,2)
// numbers2.reverse()
// console.log(numbers2.toString())
// //20
// const fruits=['banana','apple']
// fruits.unshift('orange')
// fruits.shift()
// console.log(fruits)

// //21
// const firstArray2 = [1, 2, 3];
// const secondArray2 = [4, 5, 6];
// const combinedArray = [firstArray2, secondArray2];
// const flatArray = combinedArray.flat();
// const resultString = flatArray.join(',');
// console.log(resultString);



// //22
// function calculateAverage(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }
  
//     const average = sum / numbers.length
//     return average;
//   }
  

//   const numbers3 = [1, 2, 3, 4, 5];
//   const avg = calculateAverage(numbers3)
//   console.log(avg);


// //23
// const stringToNumbers=  function(inputString) {
//     const numbersArray = inputString.split(',')
//     const parsedNumbers = []
  
//     for (let i = 0; i < numbersArray.length; i++) {
//       const number = parseInt(numbersArray[i], 10)
//       if (!isNaN(number)) {
//         parsedNumbers.push(number)
//       }
//     }
//     return parsedNumbers
//   }
//   const inputString = '1, 2, 3, 4, 5'
//   const resultArray = stringToNumbers(inputString)
//   console.log(resultArray)
  
// //24
//   function reverseWordsInSentence(sentence) {
//     const words = sentence.split(' ')
//     const reversedWords = words.reverse()
//         const reversedSentence = reversedWords.join(' ')
//     return reversedSentence
//   }
  
  
//   const reversedResult = reverseWordsInSentence( "хело пело фело село   ");
//   console.log(reversedResult) 

//   function filterUniqueNumbers(){

//   }






// //25
//   function filterUniqueNumbers(numbers) {
//     const uniqueNumbers = []
    
//     for (let i = 0; i < numbers.length; i++) {
//       const number = numbers[i];
//       if (uniqueNumbers.indexOf(number) === -1) {
//         uniqueNumbers.push(number)
//       }
//     }
    
//     return uniqueNumbers
//   }
  
//   const inputNumbers = [1, 2, 2, 3, 4, 4, 5]
//   const uniqueResult = filterUniqueNumbers(inputNumbers);
//   console.log(uniqueResult)
  











////////////////////////////////////////////////////

//FOR Nadira!!!
  //Forger 1
  function unique(str) {
    const words = str.toLowerCase().match(/\b\w+\b/g)
    const uniqueWords = [];

    if (words) {
        for (const word of words) {
            if (!uniqueWords.includes(word)) {
                uniqueWords.push(word);
            }
        }
    }

    return uniqueWords;
}

let strings = 'Helllo pello fello hello hello Hello GHR nuris nuris ';
console.log(unique(strings));




//Forger 2
function replaceVowelsWithAsterisk(inputString5) {
    const vowels = "AEIOUaeiou"
    let result = "";

    for (let i = 0; i < inputString5.length; i++) {
        const char = inputString5[i]
        if (vowels.includes(char)) {
            result += "*"
        } else {
            result += char
        }
    }

    return result
}

const inputString = "Hello, World!"
const modifiedString = replaceVowelsWithAsterisk(inputString)
console.log(modifiedString)

