//if two divs {element} overlaps then ine element moves to other side  
function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width  
	);
}

const avtar =document.querySelector('#player');
window.addEventListener('keydown',function(e){
    if(e.key==='ArrowDown'||e.key==='Down'){//arrow down,up,left,right pe avtar  move karega....
        moveVerticle(avtar,50);
}
 
else if(e.key==='ArrowUp'||e.key==='Up'){
    moveVerticle(avtar,-50);
}
else if(e.key==='ArrowRight'||e.key==='Right'){
    moveHorizontal(avtar,50)
    avtar.style.transform='scale(1,1)';//when right key press it move towards right
}
else if(e.key==='ArrowLeft'||e.key==='Left'){
    moveHorizontal(avtar,-50);
    avtar.style.transform='scale(-1,1)';//when left key press it move towards left
}
if(isTouching(avtar,coin))
moveCoin();//calling a function of toching when avtar touch the coin coin get moved o=to other place
}
);

//make verticle and horizontal function for less complexity
const moveVerticle=(element,amount)=>{
    const currtop=extractPos(element.style.top);
element.style.top=`${currtop + amount}px`;
 };
 const moveHorizontal=(element,amount)=>{
    const currleft=extractPos(element.style.left);
element.style.left=`${currleft + amount}px`;
 };


const extractPos=(pos)=>{ 
    if(!pos) return 100;
    return parseInt(pos.slice(0,-2));}//make a function.it will give the px..


    //make a function to move coin inside the size of an window 
    const moveCoin=()=>{
        const x=Math.floor(Math.random()*window.innerWidth);
        const y=Math.floor(Math.random()*window.innerHeight);
        coin.style.top=`${y}px`
        coin.style.left=`${x}px`
    }