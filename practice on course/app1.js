const but=document.querySelector('button');
but.onclick=alert
but.onclick=function()
{
    console.log("just u and me");
}
but.onmouseover=function()
    {
    but.innerText='who the hell are u'
    }
but.onmouseout=function(){
    but.innerText='Clicker'
}