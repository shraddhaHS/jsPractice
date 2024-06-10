# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-projects-shraddha)

#solution code

## Project 1
```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach((button)=>{
  button.addEventListener('click',function(e){
    if(e.target.id ==='grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id ==='grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id ==='white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id ==='blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id ==='yellow'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id ==='pink'){
      body.style.backgroundColor = e.target.id;
    }
  })
})
```
## Project 2
```javascript
const form = document.querySelector('form')
form.addEventListener('submit',function(e){
  e.preventDefault()
 const height = Number(document.querySelector('#height').value)
 const weight = Number(document.querySelector('#weight').value)
 const results = document.querySelector('#results')
 if(height === ""|| height<0 || isNaN(height)){
    results.innerHTML = "please give a valid height"
 }
 else if(weight === ""|| weight<0 || isNaN(weight)){
    results.innerHTML = "please give a valid weight"
 }else{
   const bmi = (weight/((height*height)/10000)).toFixed(2)
   results.innerHTML = `<span>${bmi}</span>`
 }
})
```
## Project 3
```javascript
const clock=document.getElementById('clock')

setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
},1000)
```
## Project 4
```javascript
let randomNumber=parseInt(Math.random()*100 +1)
const submit = document.getElementById('subt')
const userInput  = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.getElementsByClassName('lastResult')[0]
const lowOrHigh =  document.querySelector('.lowOrHi')
const startOver = document.getElementsByClassName('resultParas')[0]
const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true
if(playGame){ 
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = Number(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}
function validateGuess(guess){
if(isNaN(guess)){
  alert('please enter a valid number')
} else if(guess<1){
  alert('please enter a valid number')
} else if(guess>100){
  alert('please enter a number less than 100')
} else{
  prevGuess.push(guess)
  if(numGuess === 11){
    dislayguess(guess)
    displayMessage(`game over. Random number was ${randomNumber}`)
    endGame()
  } else{
    dislayguess(guess)
    checkGuess(guess)
  }
}
}
function checkGuess(guess){
if(guess === randomNumber){
  displayMessage(`you guessed it right`)
  endGame()
} else if(guess<randomNumber){
  displayMessage(`number is too low`)
} else if(guess> randomNumber){
  displayMessage(`number is too high`)
}
}
function dislayguess(guess){
  userInput.value=''
  guessSlot.innerHTML+= ` ${guess}`
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message){
lowOrHigh.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
userInput.value = ''
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML = `<h2 id="newGame">start new game</h2>`
startOver.appendChild(p)
playGame = false
newGame()
}
function newGame(){
const newGameButton=document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
  randomNumber = parseInt(Math.random()*100 +1)
  prevGuess = []
  numGuess = 1
  guessSlot.innerHTML = ''
  remaining.innerHTML= `${11 - numGuess}`
  userInput.removeAttribute('disabled')
  startOver.removeChild(p)
  playGame = true
})
}
```