let games=['ludo','chess','freefire','carembord','pubji'];
//calling method of elements by for loop
for(let i=0 ; i<games.length;i++)
{
    console.log(games[i]+' '+[i]);
}

//calling method of element by for of loop

for (khel of games){
    console.log(khel);
}

//example 2
for(let char of 'vbnji987y6trfdxcv')
{
    console.log (char.toUpperCase());
}

//example 3

let snake=[
    [2,5,3],
    [4,5,1],
    [3,6,1],
];

for(let i=0; i<snake.length;i++)
{
 let row=snake[i];
 let sum=0;
 for(let j=0;j<row.length;j++)
 {
    console.log(row[j]);
    sum+=row[j];
  
 }
 console.log(`${row} sum is ${sum}`);
}

//for of method

for(let sub of snake){
    let sum=0;
for(let num of sub){
    sum+=num;
    console.log(num);
}

    console.log(`${sub} sum is ${sum}`);
}

