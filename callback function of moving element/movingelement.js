// const btn=document.querySelector('button');
// const movex=(element,amount,delay,callback)=>{
    
// setTimeout(()=>{
//  element.style.transform=`translateX(${amount}px)`
//  if(callback)callback();
// },delay)
// }
// movex(btn,100,1000,()=>{
//     movex(btn,200,1000,()=>{
//         movex(btn,300,1000,()=>{
//             movex(btn,400,1000)
//         })

//     })
// })
const btn=document.querySelector('button');
const movex=(element,amount,delay,callback)=>{
    const bodyboundary=document.body.clientWidth;
    const elRight=element.getBoundingClientRect().right;
    const currleft=element.getBoundingClientRect().left;
    if(elRight+amount>bodyboundary){
        console.log('Done Cannot Move Further')}
else{
setTimeout(()=>{
 element.style.transform=`translateX(${currleft+amount}px)`
 if(callback)callback();
},delay)
}}
movex(btn,100,1000,()=>{
    movex(btn,100,1000,()=>{
        movex(btn,100,1000,()=>{
            movex(btn,500,1000)
        })

    })
})