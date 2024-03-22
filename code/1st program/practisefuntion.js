//Practise 1

// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false
//funtion
// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

function isValidPassword(password,username){
if (password.length<8){
    return false;
}
if(password.indexOf(' ')!==-1){
   return false; 
}
if(password.indexOf(username)!==-1)
{
    return false;
}
return true;
}

//practise 2
//Q2
// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

function avg(arr){
   let total=0;
   for(let num of arr){
    total+=num;
   }
 avrage=(total/arr.length); 
 console.log(avrage);
}

//practise 3
//Q3
// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

function getcard(){
    const values=[
        '1','2','3','4','5','6','7','8','9','10','J','Q','K','A'
    ]
    const card=Math.floor(Math.random()*values.length);
    const value=values[card]
const suits=['clubs','spades', 'hearts', 'diamonds']
      
const bada=Math.floor(Math.random()*suits.length);
const suit=suits[bada];
return{value:value,suit:suit};
}



//practise 4
//Q4
// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

function isPangram(sentence){
let Lowercase=sentence.toLowerCase();
    for(let char of 'abcdefghijklmnopqrstuvwxyz'){
        if(Lowercase.indexOf(char)===-1){
            return false;
        }  
    }
    return true;
}


















