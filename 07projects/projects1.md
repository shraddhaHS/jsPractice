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