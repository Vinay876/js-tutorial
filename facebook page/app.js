const input=document.querySelector('#face')
input.addEventListener('mouseover',function(){
    input.setAttribute('placeholder',"search for the value")
// textobject.placeholder.innerText="search for the value" 
})

var text = document.getElementById("this")
this.addEventListener('keypress',(event)=>{
    if(event.key==='Enter'){
        document.getElementById('data').textContent+=text.value+'\n'
    }
})