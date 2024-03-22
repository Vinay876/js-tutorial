repeat=(str,times)=>{
   let result=''
   for(let i=0;i<=times;i++){
    result+=str
   }
return result;
}

screem=(str)=>{
    return str.toUpperCase()+'!!!'
}

getRantText=(phrase)=>{
    const text=screem(phrase);
    const equal=repeat(text,108);
    return equal
}

makerant=(phrase,el)=>{
 const h1=document.createElement('h1')
 h1.innerText=getRantText(phrase);
 el.appendChild(h1);
}


makerant('love',document.body);
makerant('babbar',document.body);