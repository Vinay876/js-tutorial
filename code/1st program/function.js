function vinay (){
    console.log('dill')
    console.log('heart ')
        console.log('ishq ')
    
}
for(let i=0;i<2;i++){
    vinay();
}

//calling a function in an funtion 
function dice(){
    let roll =Math.floor(Math.random()*6)+1;
 console.log(`rolling ${roll}`);
}
function throwdice(){
    dice();
    dice();
    dice();
    dice();
    dice();
    dice();
    dice();
    dice();
    dice();
}

//arguments in function

function greets(name){
console.log (`Gusd morning sir ,${name}` );
}

//times u wanna roll dice
function throwdice(times){
    for(let i=0;i<times;i++)
    dice();
}

//multiple arguments in function

function squar(n){
    console.log(n*n);
}


function sum(a,b)
{
    console.log(a+b);   
}
function div(a,b){
    console.log(a/b);
}
//getting a return type insted of printing through console 

function add(x,y){
    return x+y;
}

//double return stTEMENT IN n program but only one will run

function rang(color)
{
    if(color.toLowerCase()==='purple'){
        return true;
    }
    return false;
}
