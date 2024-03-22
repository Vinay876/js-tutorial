let num=[98,53,23,54,65,67,87,95,75];
// callback function is forEach(funtion(){})
num.forEach(function(n){
    console.log(n+2);
})

//u can also delared funtion first the pass throw arry
function  triple(p){
console.log(p*7);
}
num.forEach(triple);

// example 2

let movies =[
    {
        name:'singham',
        year:2013,
        rating:8.9
    },

   { name:'doctor strange',
    year:2020,
    rating:9.0},

    {name:'ishq',
    year:2014,
    rating:8.4}
]
movies.forEach(function(Hit) {
console.log(Hit.year);    
});
//2
for(let mov of movies){
    console.log(mov.name);
}
//3
for(let i=0;i<movies.length;i++){
console.log(movies[i].name)
}

//map funtion for returning an array value

let numbers=[67,89,95,43,22,23,45];
let string=['car','house','money','fame'];

const double=numbers.map(function(num)
{
    return (num*2);
});

const evn=numbers.map(function(n){
    return{
        value:n,
        isEven:n%2===0,}   
})

const wrk=string.map(function(str)
{
   return str.toUpperCase().split('').join('.');

})

//arrow funtion 

const star=(v)=>{
    // return v*v;
}

const nam=(string)=>{
    return string.toUpperCase();
} 

const multiple=(x,y)=>{
    return x*y;
}

//u can make an one line code insted adding a useless new lines in ur code in arrow function

const numbring=[1,2,3,4,5,6,7,8,9];
const see=numbring.map(function(n){
    return n*n;
})

const line=nm=> nm*nm;

//find array is used to get a stating of that word in any array 

let dialogue=['car','house','money','fame'];
 let sys=dialogue.find(sys=>{
    return sys.includes('mo');

 })
    


