const correctnumber = 7 


function checkguess(){
  const userguess = document.getElementById('guess').value
  const message = document.getElementById('message')

  if (userguess == correctnumber) {
    message.textContent = 'congratulations! You have guessed the correct number!'
    Inputbutton()
  } else {
   message.textContent = 'Sorry, the number was 7, better luck next time.'
    Inputbutton() 
  }
}

function Inputbutton(){
  document.getElementById('guess').disabled = true
  document.querySelector('button').disabled = true
}