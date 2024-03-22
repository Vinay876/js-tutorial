//forloop in array
let examscore=[98,78,67,87,78,4];
console.log(examscore.sort());
for (let i=0;i<examscore.length;i++){
    console.log(i,examscore[i]);
}

// example2
let result=[
    {
    lastName:'singh',
    grade:87
    },
    {
        lastName:'vashisth',
        grade:98
    },
    {
        lastName:'kumar',
        grade:90
    }
];
    
for (let i=0;i<result.length;i++)
{
    let score=result[i];
    console.log(score);
    console.log(`${score.lastName} = ${score.grade}`);
}


//print reverse words

const str ='vinay';
let reverse='';
for (let i =str.length-1; i>=0;i--)
{
reverse+=str[i];    
}
console.log(reverse);

//
const plx=['molarband','kanaili'];
console.log(plx.reverse());
