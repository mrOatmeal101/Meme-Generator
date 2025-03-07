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


// inputImg.setAttribute = ('src', 'https://en.wikipedia.org/wiki/Tabby_cat#/media/File:Cat_November_2010-1a.jpg')



function makeMeme() {

    const inputImg = document.querySelector("#memeImg").value
    const newMemeImg = document.createElement('img')
    if(inputImg){
        newMemeImg.src = inputImg;
        newMemeImg.style.display = 'block'
    }


    const topText = document.querySelector('#topText')
    const newMemeTopText = document.createElement('div')
    newMemeTopText.textContent = topText.value
    newMemeTopText.classList.add('outputMeme')

    const bottomText = document.querySelector('#bottomText')
    const newMemeBottomText = document.createElement('div')
    newMemeBottomText.textContent = bottomText.value
    newMemeBottomText.classList.add('outputMeme')

    const removeButton = document.createElement('button')
    removeButton.id = '#removeButton'
    removeButton.innerText = "Remove"

    const newMeme = document.querySelector("#results")
    newMeme.append(newMemeTopText, newMemeBottomText, newMemeImg)
    newMeme.appendChild(removeButton)

    topText.value = ''
    bottomText.value = ''
    inputImg.value = ' '

}


// const removeMeme = document.querySelectorAll("#results")
// for(let btn of removeMeme){
//     btn.addEventListener('click', function(e){
//         console.log('remove button')
//         console.log(e)
//         e.target.parentElement.remove()
//     })

// }


const form = document.querySelector("#meme-Generator")
form.addEventListener('submit', function(evt) {
    evt.preventDefault()
    makeMeme()
})

// const genMeme = document.querySelector('#submit')
// genMeme.addEventListener("click", function() {
//     makeMeme()
// })

// const form = document.querySelector('.meme-Generator')
// const newImg = document.querySelector('#memeImg')
// const topText = document.querySelector('#topText')
// const bottomText = document.querySelector('#bottomText')

// const newMeme = document.querySelector('.newMeme')

// form.addEventListener('submit', function(e) {
//     e.preventDefault()
//     const makeNewMeme = makeMeme(
//         newImg.value,
//         topText.value,
//         bottomText.value
//     )
// })

// function makeMeme(newImg, topText, bottomText) {
//     const meme = document.createElement('div')
    
// }