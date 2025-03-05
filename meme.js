// document.getElementById('meme-Generator') // getElementById to get one element back
// document.getElementById('submit') 
// document.getElementsByTagName('submit') // getElementByTagName to get HTML collection back
// document.getElementsByClassName('submit') // getElementByClassName to get HTML collection back

// querySelector accepts a string which is valid CSS selector
// returns the first element that matches the CSS selector passed to the function.
// querySelectorAll gets all of the elements that match
// let btn = document.querySelector('#submit')
// let inputs = document.querySelectorAll("input")

function randomRGB(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`
}

// this is how you change the h1 color to random colors before adding any spans and seperating the text indiviually
// const h1 = document.querySelector('h1');
// // h1.style.color = 'red'

// setInterval(function () {
//     h1.style.color = randomRGB()
// }, 300)

// This is how you change color of all the letters indivi using the span and class on html
const letters = document.querySelectorAll('.letter')

setInterval(function () {
    for (let letter of letters){
        letter.style.color = randomRGB()
    }
}, 1000)
