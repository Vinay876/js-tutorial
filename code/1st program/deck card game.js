//drawing a cards form deck of cards

const mydeck={
    deck:[],
    drawncard:[],
    suits:['heart','diamond','spade','club'],
    values:'2,3,4,5,6,7,8,9,10,J,K,Q,A',
     initialdeck(){
const{deck,suits,values}=this;
        for(let value of values.split(',')){
            for(let suit of suits){
               deck.push({value,suit});
            }
        }
        // return deck;
    },
    drawcard(){
        const card=this.deck.pop();
        this.drawncard.push(card);
        return card;
    },
    multiplecard(numcard){
        const card=[];
        for(let i=0;i<numcard;i++){
            card.push(this.drawcard())
        }
        return card;
    },
    suffle(){
        const{deck}=this;
        for(let i=deck.length-1;i>0;i--){
            let j= Math.floor(Math.random()*(i+1));
            [deck[i],deck[j]]=[deck[j],deck[i]]
        }
       
    }
}
