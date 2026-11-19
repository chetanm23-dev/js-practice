let number = Math.floor(Math.random() * 100) + 1;
// console.log(number)
let guess;
let chances = 0;
while(guess !== number){
    guess = Number(prompt("Guess a number"));
    chances++;
    if (guess > number){
        console.log("Too high");
    } else if(guess < number) {
        console.log("Too low");
    } else {
        console.log("Correct");
    }
}
console.log(`Score: ${100 - chances}`);
console.log(`The number was: ${number}`);
