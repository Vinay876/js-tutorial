//destructing array
const marathon=[
    'shiva sharma',
    'sanjay singh',
    'robin rawat',
    'nitis kumar',
    'rahul vasist'
]
const[gold,silver,bronze]=marathon;
const[first,/*skip second*/,/*skip third*/,fourth]=marathon;
const [winner,...others]=marathon;

//distructing object
const runner={
    Name:'viany',
    Age:18,
    Country:'india',
}

// const {Name,Age,Work}=runner;//1st
// const{ Country:nation,}=runner;//2nd
const {Name,Age,...other}=runner;//3rd

//nesting destructing
 const game=[{
    first:'vinay',
    last :'singh',
    country:'india'
},
{
    first:'robin',
    last :'rawat',
    country:'africa'
},
{
    first:'nitish',
    last :'kumar',
    country:'australia'
}];
const [{first:saurabh},{country:desh}]= game;
