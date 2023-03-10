function generateNumber(){
  var randomNumber = Math.floor(Math.random()*6);
  return(randomNumber + 1);
}

var num1 = generateNumber();
var num2 = generateNumber();

var player1img = ("images\\dice" + num1 + '.png');
var player2img = ("images\\dice" + num2 + '.png');

document.querySelector('.img1').setAttribute('src', player1img);
document.querySelector('.img2').setAttribute('src', player2img);


  if(num1>num2){
    document.querySelector('h1').textContent=('Player 1 wins.');
  }else if(num1<num2){
    document.querySelector('h1').textContent=('Player 2 wins.');
  }else{
    document.querySelector('h1').textContent=('Draw.');
  }
