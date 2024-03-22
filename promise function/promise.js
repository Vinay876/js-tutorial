const willGetYouADog=new Promise((resolve, reject) => {
    const rand=Math.random()
if(rand>0.5){
resolve();
}else{
    reject();
}
})
willGetYouADog.then(()=>{
 console.log('yay positive result')//then will print when resolve
})
willGetYouADog.catch(()=>{
    console.log('NOOOOp')//catch will print at qtime of reject
})