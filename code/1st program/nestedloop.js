//example1
const n=5;
for(let i=0;i<=n;i++)
{
    console.log('vinay',i);
}  

//example2
for(let i=0;i<=n;i++) {
 console.log('outerloop',i);
for(let j=6;j>=0;j--)
{
    console.log('   innerloop',j);   
}  }

// example3
const gameboard=[
    [4,8,2,8],
    [64,32,16,4],
    [8,16,4,2],
    [2,32,2,8], 
] ;

let totalscore=0;
for(let i=0; i<gameboard.length;i++)
{
   let row=gameboard[i];
   console.log(row);
   for(let j=0;j<row.length;j++)
   {
    totalscore+=row[j];
   }
}

//while loop
let i=0;
while(i<10){
    console.log('system',i);
    i++;
}
