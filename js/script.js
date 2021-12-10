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

//Seconda milestone - Terza milestone: 
const containerBoxes = document.querySelector('.container-boxes');

/* 
1) Inizializzato il ciclo for per let i=1, incremento il valore della suddetta variabile fino al raggiungimento del numero 100. 
   - Nel caso in cui i sia divisibile sia per 3 che per 5, verrà creato un tag all'interno di container-boxes 
     nell'html che andrà a mostrare 'FizzBuzz' dentro un box color crimson. 

   - Nel caso in cui i sia divisibile soltanto per 3, verrà creato un tag all'interno di container-boxes 
     nell'html che andrà a mostrare 'Fizz' dentro un box color aqua. 

   - Nel caso in cui i sia divisibile soltanto per 5, verrà creato un tag all'interno di container-boxes 
     nell'html che andrà a mostrare 'Buzz' dentro un box color giallo senape.

   - Altrimenti verrà rappresentato il valore numerico della i all'interno di un box color cadetblue.
*/

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