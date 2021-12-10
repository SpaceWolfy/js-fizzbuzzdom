//Consegna: scrivi un programma che stampi in console i numeri da 1 a 100

//Setup del codice di partenza:
/* for (let i = 1; i <= 100; i++) {
    console.log(i)
} */

//Prima milestone:
for (let i = 1; i <= 100; i++) 
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
}