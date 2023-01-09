// document.getElementById("count-el").innerText = 5
// PseudoCode
// initialize the count to 0
// listen for clicks on the increment buttion
// increment when the button is clicked 
// change the count-el in the HTML to reflect the new count
let count = 0

// Working with this getElementById is referred to as DOM by the developers
// Document Object Model
// aka how you use JS to modify a website
// Document refers to an HTML document
// Object document keyword is of the datatype object
// They have taken the HTML document and shoved it into JS object 
// Model refers to modulation or representation like real html element and the js model which has the same representation 
let countEl = document.getElementById("count-el")


// creating fucntion for incrementing on onclick
function incr(){
    count += 1
    // Changing count-el with click event
    countEl.innerText = count
}

let saveEl = document.getElementById("save-el")
// Creating save function 
function save()
{
    
    let temp = count + " - "
    saveEl.textContent += temp
    count = 0
    countEl.innerText = count
    // Difference between innertext and textcontent is that innertext struggles with providing human inreadable characters like white spaces
}
// While concataneting strings and numbers a string always wins so yeah number is changed and treated like a string

