let moviereviews={
    ishq:8.6,
    dhol:9.7,
    khalnayak:9.8,
    darr:8.7,
    heropanti:3.4,
    don:8.6,
}
for(let r of Object.keys(moviereviews)){
    console.log(r,moviereviews[r]);    
}
const star= Object.values(moviereviews);
let total=0;
for(let rat of star){
    total+=rat;
   
}let avg=total/star.length;
console.log(` rating is ${star}& avg is ${avg}`);


// example of for-in loop  
for (let k in moviereviews){
    console.log(k);
    console.log(moviereviews[k]);
}
let sum=0;
for(let k in moviereviews){
    sum+=moviereviews[k];
}