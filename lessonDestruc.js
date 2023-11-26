//1
// let person = {
//     name:'Nuris',
//     age:19,
//     sex:'male',
//     city:'Bishkek',
//     lang:'JS',
//     info:function(){
//         console.log(`
//         name is ${this.name}
//         age is ${this.age}
//         sex is ${this.sex}
//         city is ${this.city}
//         language is ${this.lang}`)
//     }

// }
// let{info}=person
// info.call(person)
// let{name,age,sex,city,lang}=person
// //or 
// console.log(name,age,sex,city,lang)


//2
// let arr=[1,2,3,4,5]
// let[firtsnum,,,,secondnum]=arr
// console.log(firtsnum,secondnum)

//3
// let obj={
//     name:'Nuris',
//    age:19,
//    info:function(){
//     console.log(` 
// name is ${this.name}
// age is ${this.age}    `)
//    }   
//     }
// let {info}=obj
// info.call(obj)


//4
// let a1 =5
// let b1=10
// let [a,b]=[b1,a1]
// console.log(a,b)

//5
// let company={
//     nameof:'Codify',
//     owner:'Dinara',
//     address1:'Isanova Chuya',
//     infoAboutWorkers:{
//         name:'Aidar',
//         address:'Isanova Chuya',
//         salary:200000
//     }
// }

// let {nameof,owner,address1,infoAboutWorkers:{name,address}}=company
// console.log(nameof,owner,name,address)

// //6
// let obj1={
//     name:'Nuris',
//     age:19
// }

// let obj2={
//     name:'Adelina',
//     age:20
// }

// let obj3={
//     name:'Nurtiek',
//     age:21
// }

// let obj4={
//     name:'John',
//     age:19
// }
// let obj5={
//     name:'Elizaphet',
//     age:18
// }
// let arr=[obj1,obj2,obj3,obj4,obj5]


// for(let i =0;i<arr.length;i++){
//     const{name,age}=arr[i]
//     console.log(`Student's name is ${name}
// age is ${age}        `)
// }


