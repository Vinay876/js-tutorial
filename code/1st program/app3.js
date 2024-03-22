// SWITCH ARGUMENTS
//NORMAL ARGUMENTS
let day=1;
if(day===1)
{console.log('monday');}
else if(day===2)
{console.log('tuesday');}
else if(day==3)
{console.log('thursday');}
else
{console.log('INVALID DAY');}

//SWITCH ARGUMENT

switch(day){
 case 1:
console.log('monday');
break;
 case 2:
console.log('tuesday');
break;
 case 3:
    console.log('thursday');
break;
 case 4:
    console.log('friday');
break;
 default:
        console.log('invalid day');   
}

//overlaping example of switching 

let emoji= 'happyface';
switch(emoji){
    case 'sadeface':
 case 'happyface':
     console.log('yellow');
//   case 'sadface':
//      console.log('yellow');
break;
 case 'eggplant':
     console.log('purple');
     break; 
     case'lips':
   case 'heart':
     console.log('red');
//  case 'lips':
//      console.log('red');    
}




