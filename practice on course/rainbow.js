{const colors=[
    'red',
    'orange',
    'green',
    'yellow',
    'blue',
    'purple',
    'indigo',
    'violet'
]
const h1=document.querySelector('h1')
const changecolor=function(){
    h1.style.color=this.style.backgroundColor;
}

const container=document.querySelector("#boxes")
for(let color of colors){
  const box= document.createElement('div')
  box.style.backgroundColor=color;
  box.classList.add('box')
  container.appendChild(box)
  box.addEventListener('click',changecolor)
}
}


{const input=document.querySelector('#username')
input.addEventListener('keydown',function(e){
    console.log("key down")})
    input.addEventListener('keyup',function(){
        console.log("key up")
    })
}