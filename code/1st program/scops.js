//the bloke area under which code will run is called scope {}any statement of {}will not run out side the {}
//var is not good as comapare to let and const

//example

let games=['ludo','chess','freefire','carembord','pubji'];
for(var khel of games){
    console.log (khel);
}
console.log (khel);//this will not printbecause it is outside the loop 

// lexical scope

function outer(){
     let movie="terenam";

    function inner(){
        let movie ="ishq";  
        console.log(movie.toUpperCase());     
   }
inner();
}

//function expression

function add(x,y){
    return x+y;
}
const product=function (x,y){
    return x*y;
}

//functions call by array and objects

function add(x,y){
    return x+y;
}
function substract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function division(x,y){
    return x/y;
}
 let oprations=[add,substract,multiply,division];
 for(let func of oprations){
 let result= func(200,200);
console.log(result);
}

//function calling by object

let things={
    dothis:add,
    dothat:division,
    do:multiply,
}
console.log(things);


