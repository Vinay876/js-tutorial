const shop=document.querySelector("#shopping")
const itemUL=document.querySelector("#items")
shop.addEventListener('keypress',function(e){
  if(e.key==='Enter'){
    //add item to new list 
    const newItemText= this.value;
    const newItem=document.createElement("li")
    newItem.innerText=newItemText;
    itemUL.appendChild(newItem);
  }
}) 