const mapArr=[1,2,3,4,5]
const newMapArr=mapArr.map(elem=>elem+10)
console.log(newMapArr)


const filterArr=['hello','yes','world','very']
const newFilterArr=filterArr.filter((elem)=>{
    if(elem.length>=5){
        return elem
    }
    
})
console.log(newFilterArr)

const forEachArr = [1, 2, 3, 4, 5];

forEachArr.forEach((elem, index, array) => {
    array[index] = elem ** 2
})
console.log(forEachArr)

const reduceArr=[1,2,3,4,5]
const sum=reduceArr.reduce((prev,cunrrent)=>{ return prev+cunrrent})
console.log(sum)

const someArr=[1,2,3,4,5,6,7,8,9]
const newSomeArr=someArr.some(elem=>elem%2===0)
console.log(newSomeArr)

const everyArr = [1,2,3,4,5]
const everyFlag = everyArr.every(elem => elem > 0)
console.log(everyFlag)


const findArr = [1, 2, 3, 4, 5, 6];
const findElement = findArr.find((elem) =>elem % 2 === 0)||null

console.log(findElement)


const mapArr2 = ['erere', 'eger', 'gregregr']
const newMapArr2 = mapArr2.map((elem) => {
    const upc = elem.toUpperCase()
    return upc
})

console.log(newMapArr2)

const numbers = [-1, 2, -3, 4, -5, 6];
const newFilterArr2 = numbers.filter((elem) => elem>0)
console.log(newFilterArr2)

const names=['anna','nuris']
const result2=names.forEach((elem,index,arr)=>{console.log(`Hello ${elem}`)})

const reduceArr2 = [1,2,3,4,5]
const sum2 = reduceArr.reduce((prev, cur) => {
        return prev * cur
    })
console.log(sum2)

const someArr2 = ['greg', 'greg', 'gregваавравравравr', 'egrge'];

const someMewArr = someArr2.some(elem => elem.length >= 10);

console.log(someMewArr); 


const findArr2 = [1, 2, 3, 4, 5, 6, 7];
const findElement2 = findArr2.find((elem) => elem % 7 === 0) || null

console.log(findElement2)
