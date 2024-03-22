// target & guess game logic

const target=Math.floor(Math.random()*20);
let guess=Math.floor(Math.random()*20);
while(guess!==target){
    console.log(`target:${target} & guess:${guess}`);
guess=Math.floor(Math.random()*20 );
}
console.log(`target:${target} & guess:${guess}`);