//reduce function is used tomake an total of any array
//reduce(total(first value),currentvalue(nextvalue))=>return total+curentvalue
let nums=[3,4,5,6,7,8,9];
const total=nums.reduce((total,currentValue)=>{
    return total+currentValue;
});

// total          currentvalue        total
// 3                 4                  7
// 7                 5                  12
// 12                6                  18
// 18                7                  25
// 25                8                  33
// 33                9                  42=>total

