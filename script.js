var user=prompt("Please enter your name..");
document.getElementById("username").innerHTML=user;
function dicegame(){
  var randomNumber1 =Math.random();
  var dicenum1 = Math.floor(randomNumber1*6+1);
  var randomNumber2 =Math.random();
  var dicenum2 = Math.floor(randomNumber2*6+1);
  if(dicenum1===1){
    document.getElementById("imgone").src = "images/dice1.png";
  }
  else if(dicenum1===2){
    document.getElementById("imgone").src = "images/dice2.png";
  }
  else if(dicenum1===3){
    document.getElementById("imgone").src = "images/dice3.png";
  }
  else if(dicenum1===4){
    document.getElementById("imgone").src = "images/dice4.png";
  }
  else if(dicenum1===5){
    document.getElementById("imgone").src = "images/dice5.png";
  }
  else if(dicenum1===6){
    document.getElementById("imgone").src = "images/dice6.png";
  }
  if(dicenum2===1){
    document.getElementById("imgtwo").src = "images/dice1.png";
  }
  else if(dicenum2===2){
    document.getElementById("imgtwo").src = "images/dice2.png";
  }
  else if(dicenum2===3){
    document.getElementById("imgtwo").src = "images/dice3.png";
  }
  else if(dicenum2===4){
    document.getElementById("imgtwo").src = "images/dice4.png";
  }
  else if(dicenum2===5){
    document.getElementById("imgtwo").src = "images/dice5.png";
  }
  else if(dicenum2===6){
    document.getElementById("imgtwo").src = "images/dice6.png";
  }
  if(dicenum1===dicenum2){
    document.getElementById("result").innerHTML="Draw!";
  }
  else if(dicenum1>dicenum2){
    document.getElementById("result").innerHTML="🚩You Win!";
  }
  else if(dicenum1<dicenum2){
    document.getElementById("result").innerHTML="Computer Wins!🚩";
  }
}
