const butt=document.querySelector('button')
butt.addEventListener('mouseover',function(){
    console.log('that is ur problem')
    const h=Math.floor(Math.random()
    *window.innerHeight)
    const w=Math.floor(Math.random()*window.innerWidth)
    butt.style.top=`${h}px`
    butt.style.left=`${w}px`;
    
})

butt.addEventListener('click',function(){
    butt.innerText=('you got me')
    document.body.style.backgroundColor='green'
})
