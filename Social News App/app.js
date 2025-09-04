//Represent a Link
class Link{
    constructor(title, url, author){
        let absoluteUrl = url

        //check if the url starts with "http://" or "https://"
        if(
            !absoluteUrl.startsWith("http://") &&
            !absoluteUrl.startsWith("https://")
        ){
            //If no, add http:// at the beginning
            absoluteUrl = `http://${absoluteUrl}`
        }

        // Add data properties
        this.title = title
        this.author = author
        this.url = absoluteUrl
    }

    //describe the link as a string
    toString(){
        return `${this.title} (${this.url}. Author: ${this.author})`
    }
}

//Initial Links
const links = [];
links.push(new Link("Hacker News", "https://news.ycombinator.com", "Baptiste"))
links.push(new Link("Reddit", "https://reddit.com", "Thomas"))
links.push(new Link("Boing Boing", "boingboing.net", "Daniel"))

let choice
// Main program loop
// Display options until the user chooses to quit

// while(choice != '0'){
//     let choices = "\n1 : Show links"
//     choices += "\n2 : Add a link"
//     choices += "\n3 : Remove a link"
//     choices += "\n0 : Quit"

//     choice = prompt(`Choose an option: ${choices}`)

//     switch(choice){
//         case "1" : {
//             if (links.length > 0){
//                 //show each on alert window
//                 for (let i = 0; i < links.length; i++){
//                     alert(`${i + 1}: ${links[i].toString()}`)
//                 }
//             }else{
//                 alert("No links to display!")
//             }
//             break
//         }

//         case "2":{
//             // Input link properties
//             const title = prompt("Enter the link title:")
//             const url = prompt("Enter the link url:")
//             const author = prompt("Enter the link author:")

//             //Add new link to array
//             links.push(new Link(title, url, author))
//             break
//         }

//         case "3":{
//             if(links.length > 0){
//                 // Input link index (must be between 1 and the number of links)
//                 let index = -1
//                 const maxIndex = links.length

//                 while(index < 1 || index > links.length){
//                     index = Number(prompt(`Enter the index of the link to be removed (between 1 and ${maxIndex}):`))
//                 }

//                 // Remove selected link from array
//                 links.splice(index - 1, 1)
//             }
//             else{
//                 alert("No links to remove!");
//             }
//             break
//         }
//     }
// }

// alert("See you later")

// console.log(document.body.childNodes[0].nodeName)

//shows the pressed character
document.addEventListener("keypress", e => {
    console.log(`You pressed the ${String.fromCharCode(e.charCode)}`)
})

// Show information on a keyboard event
const keyboardInfo = e => {
    console.log(`Keyboard event: ${e.type}, key: ${e.keyCode}`)
}

// Integrate this function into key press and release:
document.addEventListener("keydown", keyboardInfo)
document.addEventListener("keyup", keyboardInfo)

//return the name of mouse button
const getMouseButton = code => {
    let button = 'unknown'

    switch(code){
        case 0: // 0 is the code for the left mouse button
            button = 'left'
            break
        
        case 1: // 1 is the code for the middle mouse button
            button = "middle";
            break
        case 2: // 2 is the code for the right button
            button = "right";
            break
    }

    return button
}

//Show info about mouse event
const mouseInfo = e => {
    console.log(
        `Mouse event: ${e.type}, button: ${getMouseButton(e.button)}, X : ${e.clientX}, Y : ${e.clientY}`
    )
}

//Add mouse event
document.addEventListener('click', mouseInfo)

// Web page loading event
window.addEventListener("load", e => {
    console.log("The page has been loaded!");
});

// Handle page closing
window.addEventListener("beforeunload", e => {
    const message = "The page has been unloaded!";
    // Standard way of showing a confirmation dialog
    console.log(message);
  
    // Browser-specific way of showing a confirmation dialog
    return message;
})

const counterElement = document.getElementById("counter");
// Count down the counter until 0
const decreaseCounter = () => {
    //Convert counter text to number
    const counter = Number(counterElement.textContent)

    if (counter > 1) {
        //Decrease counter by 1
        counterElement.textContent = counter - 1
    }
    else{
        //Cancel the repeated execution
        clearInterval(intervalId)

        //modify the page title
        const titleElement = document.getElementById('title')
        titleElement.textContent = "BOOM!"

        //modify after 2 seconds
        setTimeout(() => {
            titleElement.textContent = "Everything is broken now :("
        }, 2000)
    }
}

// Call the decreaseCounter function every second (1000 milliseconds)
const intervalId = setInterval(decreaseCounter, 1000)