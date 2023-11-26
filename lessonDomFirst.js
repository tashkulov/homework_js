//1-2
// const h3=document.getElementsByTagName('h3')
// for (let i = 0; i <h3.length; i++) {
//     h3[i].innerText =h3[i].innerText+ '!!!';
//     h3[i].style.color='red'

// }


//3
// const ul = document.createElement('ul')

// let sum = 0

// for (let i = 0; i < 30; i++) {
//     const li = document.createElement('li');
    
//     li.textContent = `${i} - овечка`

//     ul.appendChild(li)

//     sum += i
// }

// document.body.appendChild(ul)


//4
// const spanElements = document.getElementsByTagName('span');
// for (let i = 0; i < spanElements.length; i++) {
//     spanElements[i].classList.add('active');
// }

//5
// const strong=document.getElementsByTagName('strong')
// for (let i = 0; i < strong.length; i++) {
//     strong[i].style.color = 'green';
// }

//6
// const em=document.getElementsByTagName('em')
// for(let i=0;i<em.length;i++){
//     em[i].classList.add('selection')
// }

//7
// const divrow=document.querySelector('.row')
// const mark = divrow.querySelectorAll('mark')
// mark.forEach(mark => {
//     mark.classlist.add('selected')
// });

//8
// for(let i=0;i<3;i++){
//     const link=document.createElement('a')
//     link.href='#'
//     link.textContent='Hello world'
//     document.body.appendChild(link)
//     document.body.appendChild(document.createElement('br'));
//     link.style='text-decoration:none'
// }


//9
// const strongElements = document.querySelectorAll('strong');

// strongElements.forEach(strong => {
//     if (strong.classList.contains('some')) {
//         strong.classList.remove('some');
//     } else {
//         strong.classList.add('some');
//     }
// });


//--------------------------------------------------------------------

//10
// const div1=document.createElement('div')
// const div2=document.createElement('div')
// const div3=document.createElement('div')
// div1.classList.add('row')
// div2.classList.add('row')
// //12
// div3.classList.add('row')
// div3.classList.add('third')

// div1.textContent='hello'
// div2.textContent='hello'
// div3.textContent='hello'
// document.body.appendChild(div1);
// document.body.appendChild(div2);
// document.body.appendChild(div3);
// const divmain=document.querySelectorAll('.row')
// if(divmain.length>1){
//     divmain[1].classList.remove('row')
// }

//11
//     const cmstyles=window.getComputedStyle(div2)
//     const color=cmstyles.color
// console.log("black",color)


// const row=document.createElement('div')
// row.classList.add('row-inner')
// row.textContent='hello'
// row.style.color='violet'
// document.body.appendChild(row)
//--------------------------------------------------------------------
//14-15-16
// const rowInput = document.createElement('div');
//  rowInput.classList.add('row-input');
// const input = document.createElement('input');
// input.classList.add('input')
// input.type = 'text';
// input.placeholder = '22';
// rowInput.appendChild(input);
// input.style.backgroundColor= `yellow`
// document.body.appendChild(rowInput);

//17
// const row=document.createElement('h1')
// row.classList.add('row-outer')
// row.textContent='hello'
// row.style.fontSize='20px'
// document.body.appendChild(row)


//18-19
    
// const row1=document.createElement('div')
// const row2=document.createElement('div')
// const row3=document.createElement('div')
// row1.classList.add('first')
// row2.classList.add('middle')
// row3.classList.add('last')
// document.body.appendChild(row1);
//     document.body.appendChild(row2);
//     document.body.appendChild(row3);
// const findel=document.querySelector('.last')
// findel.textContent='Last but not least'
// document.body.appendChild(findel)
// findel.style.fontWeight = 'bold';
