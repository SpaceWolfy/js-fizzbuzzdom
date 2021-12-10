//Consegna: scrivi un programma che stampi in console i numeri da 1 a 100

//Setup del codice di partenza:
/* for (let i = 1; i <= 100; i++) {
    console.log(i)
} */

//Prima milestone:
/* for (let i = 1; i <= 100; i++) 
{
    if(i % 3 === 0 && i % 5 === 0) 
    {
        console.log('FizzBuzz')
    } else if(i % 3 === 0 ) 
    {
        console.log('Fizz')
    } else if(i % 5 === 0) 
    {
        console.log('Buzz')
    } else 
    {
        console.log(i)
    }  
} */

//Seconda milestone: 
const containerBoxes = document.querySelector('.container-boxes');

for (let i = 1; i <= 100; i++) 
{
    if(i % 3 === 0 && i % 5 === 0) 
    {
        containerBoxes.innerHTML += '<div class="box box-crimson">FizzBuzz</div>'
        console.log('FizzBuzz')
    } else if(i % 3 === 0 ) 
    {
        containerBoxes.innerHTML += '<div class="box box-tiffany">Fizz</div>'
        console.log('Fizz')
    } else if(i % 5 === 0) 
    {
        containerBoxes.innerHTML += '<div class="box box-yellow">Buzz</div>'
        console.log('Buzz')
    } else 
    {
        containerBoxes.innerHTML += `<div class="box">${i}</div>`
        console.log(i)
    }  
}