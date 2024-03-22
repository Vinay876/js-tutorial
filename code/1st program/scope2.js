//function calling by another function or arguments for n times 
function some(f){
    f();
    f(); 
    f();
}

function cry(){
    console.log('i m soo sad ');
}  // output:some(cry) prints three time

function forNtimes(action,num){
for(let i=0;i<num;i++){
    action();
}
}

//output forNtimes(cry,98) prints i m so sad for 98 times


//functions as return values

function makebtween(x,y){
return function(num){
        if (num>=x && num<=y){
            return true;
        }
        else{
            return false;
        }
    }
}
const childis=makebtween(654,765);
//output childis=657->output true
   
