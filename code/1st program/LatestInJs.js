//In this if we not put a value of y then it shows the result NaN
function multiplys(x,y){
    return x*y;
}
//it will get a default value of y =1
function multiply(x,y=2,){
    return x*y;
}

//spread for function call {...}is used to spread a the things 
function givemefour(a,b,c,d){
    console.log('a',a);
    console.log('b',b);
    console.log('c',c); 
    console.log('d',d);
}
const colors=['red','green','yellow','blue'];//ask=givemefour(...colors)
const word='goat'

//spread in array litrels
const dialogue=['car','house','money','fame'];
const words=['dog','wag','log','bag','dig'];
const num=[98,76,543,45,78,98,76,54,32,17];

const fun =[...dialogue,...words,...num];

//spread in objects

const moviereviews={
    ishq:8.6,
    dhol:9.7,
    khalnayak:9.8,
}
let x=3;y=5;
const opreation={
    add:x+y,
    divide:x/y,
    multiply:x*y
}
const sys={...moviereviews,...opreation};
// const sys=[...'moviereviews',{...opreation}];

//argument in object //argument is behave like an array but its not contain array values
//its not work in aero functions//
 //example of array functions used by argument
function sum(){
    const AnArray=[...arguments] 
   return AnArray.reduce((total,currentvalue)=>{
        return total+currentvalue
    })
}
 //2nd example

 function name(first,last){
    console.log(arguments);
 }

 //rest parameter
//spread will convert them into an array
 function add(...nums){
    return nums.reduce((total,currentvallue)=>{
        return total+currentvallue
})
}
//aero functions
const guda=(...nums)=>{

return nums.reduce((total,currentvallue)=>{
    return total*currentvallue})
}
 

