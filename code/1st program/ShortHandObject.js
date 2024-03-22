const result=(arr)=>{
  const min=Math.min(...arr);
 const max=Math.max(...arr);
 const sum=arr.reduce((sum,r)=>sum+r);
    const avg=sum/arr.length;
    return{max:max,
        min:min,
        sum:sum,
        avg:avg
    }
}

const score=[12,34,56,78,9,87,65];
const run= result(score);
//2nd example
function pick(arr){
    //get a random value from an array
    const random= Math.floor(Math.random()*arr.length);
    return arr[random]
    
}
function getcard(){
const values=['1','2','3','4','5','6','7','8','9','K','Q','J','A'];
const  suits=['clubs','diamonds','spades','hearts'];
 
const value=pick(values);
const suit=pick(suits)
return{
    value:value,
    suit:suit
};
}

//Computed Properties
const role='Director';
const person1='nitish kumar';
const role2='producer';
const person2='rahul vashisht';

// const team={role:person1}
const team={[role]:person1,[role2]:person2,[7+4+4]:'sixteen'}

const addprop=(obj,k,v)=>
{   return{...obj,[k]:v}}

const res=addprop(team,'income','2cr');

//cobining all functions in a object 

const add=function(x,y){return x+y;}//thats the normal methode
const calculation={
    number:[2,3,4,5,6,7],
    add:function(x,y){return x+y},
    multiply:function(x,y){return x*y},
    division:function(x,y){return x/y},
}
//this is used to go in window area 
function sms()
{console.log(this);}
//second one  
const worker={
    Name:'nitish', 
    Surname:'kumar',
    work:'plumber',
fullName(){
// console.log(this);   
// console.log(`${this.Name} ${this.Surname}`)
const{Name,Surname,work}=this;
console.log(`${Name} ${Surname} ${work}`)
},
printbio(){
const fullName=this.fullName();
console.log (`${fullName} is a person`)
} 
}

//This is used as a annoyer only for annoying someone 

const annoyer={
    phrases:['literally','cray cray','i cant even','totes!','yollo','can stop','wont stop'],
    pickphrase(){
 const{phrases}=this;
 const idx=Math.floor(Math.random()*phrases.length);
 return phrases[idx]
    },
    start(){
       this.timeid=setInterval(()=>{
            // console.log('this is me')},2000 )
            console.log(this.pickphrase())},2000)   
    },
stop(){
    clearInterval(this.timeid);
    console.log('chala ja bsdk!')
}}
