// Function to make the letters for the page title to change colors randomly. 
function randomRGB(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`
} // can also use hsl color option. using 365 for red, and 100 for green and blue to get the range correct for hsl
// which is hsl(number from 0 to 360, number from 0 to 100%, number from 0 to 100%)
// then for the return statement use: `hsl(${red},${green}%,${blue}%)

// this is how you change the h1 color to random colors before adding any spans and seperating the text indiviually
// const h1 = document.querySelector('h1');
// // h1.style.color = 'red'

// setInterval(function () {
//     h1.style.color = randomRGB()
// }, 300)

const letters = document.querySelectorAll('.letter')

setInterval(function () {
    for (let letter of letters){
        letter.style.color = randomRGB()
    }
}, 900)

// switch for light and dark mode on site and will remember pref
const toggleSwitch = document.querySelector('input[type="checkbox"]')

if (localStorage.getItem('darkModeEnabled')){
    document.body.className = 'dark'
    toggleSwitch.checked = true
}

toggleSwitch.addEventListener('click', function(e){

    if(toggleSwitch.checked){
        document.body.className = 'dark'
        localStorage.setItem('darkModeEnabled', true)
    }
    else{
        document.body.className = ''
        localStorage.removeItem('darkModeEnabled', false)
    }
    
})

// Function that takes the users inputs and outputs them in a div.
function makeMeme() {

    // This is making a var to select the html input with the id of memeImg
    const inputImg = document.querySelector("#memeImg").value
    // This creates an empty img element so that you can store the users input img
    const newMemeImg = document.createElement('img')
    
    // if the inputImg has a value ie it is true
    if(inputImg){
        // This sets the empty img element created above to have its source value equal to the users input
        newMemeImg.src = inputImg;
        // This adds the class of newImg to the newMemeImg so that you can select the class in CSS for styling
        newMemeImg.classList = 'newImg'
    }

    // making a var to select the html input with the id of #topText
    const topText = document.querySelector('#topText')
    // creating a div element to store the inputs if there is any 
    const newMemeTopText = document.createElement('div')
    // setting the textContent property to equal the topText value 
    newMemeTopText.textContent = topText.value
    // This adds the class of topText to the newMemeTopText so that you can select the class in CSS for styling
    newMemeTopText.classList.add('topText')

    // making a var to select the html input with the id of #bottomText
    const bottomText = document.querySelector('#bottomText')
    // creating a div element to store the inputs if there is any 
    const newMemeBottomText = document.createElement('div')
    // setting the textContent property to equal the bottomText value 
    newMemeBottomText.textContent = bottomText.value
    // This adds the class of bottomText to the newMemeBottomText so that you can select the class in CSS for styling
    newMemeBottomText.classList.add('bottomText')

    // making a var with a button element with the intention of being able to remove elements in the div called meme-container
    const removeButton = document.createElement('button')
    // setting innerText property to Remove so that the button says remove on it
    removeButton.innerText = 'Remove'
    // adding class for easy CSS styling selection
    removeButton.classList.add('removeBtn')

    // adding event listerner so that the remove button when clicked with remove what is in the div called memeContainer 
    removeButton.addEventListener('click', function(){
        memeContainer.remove();
    })

    // creating a div element to put the captured img, topText, bottomText, and removeButton for each meme
    // in its own container. This is so each meme can be selected individually so that the remove button will work.
    const memeContainer = document.createElement('div')
    // adding class so that there is a way to select each new div created. 
    memeContainer.classList.add('meme-container')

    // this is appending all of the inputs to the new div called memeContainer
    memeContainer.append(newMemeTopText, newMemeBottomText, newMemeImg, removeButton)

    // this is appending the memeContainer element/div to the premade div with the id of results 
    // this is so that we can add a single element to the div of results
    document.querySelector('#results').appendChild(memeContainer)

    topText.value = ''
    bottomText.value = ''
    inputImg.value = ''

}

// making var to select the form with the intention of when the user clicks the Add Meme button 
// it will then create the meme from the user's input
const form = document.querySelector("#meme-Generator")
// adding an event listener for the form so that you can make the add meme button preform an action.
form.addEventListener('submit', function(evt) {
    // this stops the form from being submitted to a server. 
    evt.preventDefault()
    // this will exectue the function makeMeme() when Add Meme button is clicked.
    makeMeme()
})