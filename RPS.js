var Player1 = prompt("rock,paper,scissors..Shoot!");
var Player2 = Math.random();
if (Player2 <0.34){
    Player2 = "rock";
}
else if(Player2 <=0.66){
    Player2 = "paper";
}
else{
    Player2 = "scissors";
}
var compare = function(choice1,choice2){
    if(choice1==choice2){
        return "Computer: " + Player2 + "\nYou: " + Player1 + "\n Tie!";
    }
    if(choice1=="rock"){
        if(choice2=="scissors"){
            return "Computer: " + Player2 + "\nYou: " + Player1 + "\nYou won!";
        }
        else{
            return "Computer: " + Player2 + "\nYou: " + Player1 + "\nYou lost!";
        }
    }
    if(choice1=="paper"){
        if(choice2=="rock"){
            return "Computer: " + Player2 + "\nYou: " + Player1 + "\nYou won!";
        }
        else{
            return "Computer: " + Player2 + "\nYou: " + Player1 + "\nYou lost!";
        }
    }
    if(choice1=="scissors"){
        if(choice2=="rock"){
            return "Computer: " + Player2 + "\nYou: " + Player1 + "\nYou won!";
        }
        else{
            return "Computer: " + Player2 + "\nYou: " + Player1 + "\nYou lost!";
        }
    }
};

alert(compare(Player1,Player2)); 
console.log ()
