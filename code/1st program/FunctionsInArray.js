//filter is used to anything in filter
let num=[98,76,543,45,78,98,76,54,32,17];
const odd=num.filter(n=>n%2===1);
const even=num.filter(n=>n%2===0);
const greter=num.filter(n=>n>35);   

//example 2

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]
const tit=books.filter(na=>na.rating>3.9);
 const auth=books.filter(aut=>(
    aut.title.toLowerCase().includes('i')
 ))
const query='i';
const result=books.filter(book=>{
const title=book.title.toLowerCase()
return title.includes(query.toLowerCase())
})
 
//some and  every function in some function only one value has to be true and in every function all values are has to be to be true....this two will only gave true or fales value

let words=['dog','wag','log','bag','dig'];

const length=words.every(word=>word.length===3);///true

const startword=words.every(word=>word[0]==='d');//fales

const startingword=words.some(word=>word[0]=='d');

const endswith=words.every(word=>{
  const last=word.length-1;
   return word[last]==='g';});

const goodbook=books.every(book=>book.rating>3.5);


//sort cllbaack function is used to short the all values
//impt is after geting sort it will store new values to the exicting array
//so we will used slice funtion here

const prices=[400.50,3000,99.99,35.99,12.00,9500];
const badsort=prices.slice().sort();

 const ascsort=prices.slice().sort((a,b)=>a-b);//sort in accending order
 const decsort=prices.slice().sort((a,b)=>b-a);//sort in decending order

const increasrating=books.slice().sort((a,b)=>a.rating-b.rating);
