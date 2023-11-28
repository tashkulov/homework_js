//1

// document.addEventListener("keydown",function(e){
//     const key =e.key.toUpperCase();
//     const shiftKey=e.shiftKey
//     changeBackround(key,shiftKey)    
// })

// function changeBackround(key,shiftKey){

//     const body=document.body
//     let color=''
//     let color_list = {
//         "R":"red",
//         "G": shiftKey ? "gray" : "green",
//         "B": shiftKey ? "black": "blue",
//         "W": "white",
//     }
//     for(let color_key in color_list){
//         if(key == color_key){
//             color = color_list[color_key]
//             break;
//         }
//     }
    
//     body.style.backgroundColor = color;
// }

//2
// let i = 1;
// const button = document.getElementById('myButton')

// button.addEventListener('click', function() {
//     console.log(i)
//     i *= 2
//     button.innerHTML = `Click me (${i})`
// })


//3
// const img=document.createElement('img')
// img.classList.add('imageClass')
// img.src="img/Untitled design.png"
// document.body.appendChild(img)
// img.style.width='600px'
// img.style.height='400px'
// img.style.display = 'block'
// img.style.margin = '0 auto'
// img.style.border='20px'
// img.style.borderRadius='50px'

// const button=document.createElement('button')
// button.classList.add('buttonClass')
// button.textContent='enter'
// document.body.appendChild(button)


// button.onclick=function(){
//     img.style.opacity = '1';
//     img.style.transition = 'opacity 0.5s ease-in-out';
  
//     // Function to smoothly transition opacity to 0
//     function smoothFadeOut() {
//       img.style.opacity = '0';
//     }
  
//     setTimeout(smoothFadeOut, 10);

// }

//4

// const h1=document.createElement('h1')
// h1.classList.add('output-text')
// const input =document.createElement('input')
// input.type='text'
// input.classList.add('input-text')
// document.body.appendChild(input)
// document.body.appendChild(h1)

// document.addEventListener('input',(event)=>{
//     h1.textContent=input.value
// })




//5

// const div = document.createElement('div');
// div.id = 'divMain'; // Используйте div.id, а не div.id.add('divMain')
// div.style.width = '500px';
// div.style.height = '500px';
// div.style.backgroundColor = 'black';
// document.body.appendChild(div);

// document.getElementById('divMain').addEventListener('mousedown', function(event) {
//     let x = event.clientX;
//     let y = event.clientY;

//     console.log(x + '   ' + y);
// });

//6

// const input =document.createElement('input')
// input.type='text'
// const color=input.value
// document.body.appendChild(input)
// document.addEventListener("keydown",(event)=>{
//     if (event.key === 'Enter') {
//         const color = input.value;
//         document.body.style.backgroundColor = color;
//       }
      
// })

//допольнительные задания

//1

    // const divMain = document.createElement('div');
    //     divMain.style.backgroundColor = 'green';
    //     divMain.style.height = '100px';
    //     divMain.style.textAlign = 'center';
    //     divMain.style.position = 'relative'; // Добавлено
    //     document.body.appendChild(divMain);

    //     const car1 = document.createElement('div');
    //     car1.id = 'car1';
    //     car1.textContent = 'car1';
    //     car1.style.width = '50px';
    //     car1.style.borderRadius = '10px';
    //     car1.style.backgroundColor = 'red';
    //     car1.style.left = '0';
    //     car1.style.position = 'absolute';
    //     divMain.appendChild(car1); // Добавлено

    //     const car2 = document.createElement('div');
    //     car2.id = 'car2';
    //     car2.textContent = 'car2';
    //     car2.style.width = '50px'
    //     car2.style.borderRadius = '10px';
    //     car2.style.top='20px'
    //     car2.style.backgroundColor = 'blue';
    //     car2.style.left = '0';
    //     car2.style.position = 'absolute';
    //     divMain.appendChild(car2); // Добавлено

    //     const button = document.createElement('button');
    //     button.textContent = 'start'
    //     button.style.borderRadius = '10px'
    //     document.body.appendChild(button)

    //     let alertShown = false

    //     button.addEventListener('click', (event) => {
    //         const randomint = Math.random() * 2 + 1;
    //         const randomint2 = Math.random() * 2 + 1;
        
    //         car1.style.transition = `left ${randomint}s ease`
    //         car2.style.transition = `left ${randomint2}s ease`
    //         car1.style.left = '1450px'
    //         car2.style.left = '1450px'

    //         car1.addEventListener('transitionend', trEvent)
    //         car2.addEventListener('transitionend', trEvent)
    //     });
        
    //     function trEvent(event) {
    //         const targetCar = event.target
    //         if (!alertShown && parseFloat(targetCar.style.left) >= 1450) {
    //             alertShown = true
    //         if (parseFloat(targetCar.style.left) >= 1450) {
    //             if (targetCar.id === 'car1') {
    //                 alert('CAR1 is the winner')
    //             } else if (targetCar.id === 'car2') {
    //                 alert('CAR2 is the winner');
    //             }}
        
    //             targetCar.removeEventListener('transitionend', trEvent);
    //         }
    //     }


    

    

