//methods of an array
let fruits=['apple','banana','mango','leechi','orange'];
let vegetables=['potato','lady finger'];
let animals=['dog','cat','pig'];

let alltogether=fruits.concat(vegetables,animals);
console.log(`${alltogether}`);

//includes is used qto look for a value

let ingrediants=['water','corn','cheese','flour','butter'];
//ingrediants.includes('water')

//index of is usedto get an index no. of an element
//ingrediants.indexOf('water')

//reverse is used to reverse the array
//ingrediants.reverse()

//join is used to make a string of an numbers or letters 
//ingrediants.join()

//splice is used to replace any element in an array
let food=['smosa','jalebi','papad','fafda'];
console.log(food.splice(3,1,'burgur'));

//slice is used to selecting a portion of an array
//console.log(food.slice(1,3));

//sort is used to sort the no. in incresing order
let num=[7,6,5,4,3,2];
//num.sort();
