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

const contentElement = document.getElementById("content")

const createLinkElement = link => {
    //Create Dom element for link title
    const titleElement = document.createElement("a")
    titleElement.href = link.url
    titleElement.target = "_blank"
    titleElement.classList.add('linkTitle')
    titleElement.appendChild(document.createTextNode(link.title))

    // Create DOM element for link URL
    const urlElement = document.createElement('span')
    urlElement.classList.add('linkUrl')
    urlElement.appendChild(document.createTextNode(link.url))

    // Create DOM element for link headline, containing title & URL
    const headlineElement = document.createElement("h4")
    headlineElement.classList.add("linkHeadline")
    headlineElement.appendChild(titleElement)
    headlineElement.appendChild(urlElement)

    // Create DOM element for link author
    const authorElement = document.createElement("span")
    authorElement.classList.add("linkAuthor")
    authorElement.appendChild(document.createTextNode(`Submitted by ${link.author}`))

    // Create DOM element for link
    const linkElement = document.createElement("div")
    linkElement.classList.add("link")
    linkElement.appendChild(headlineElement)
    linkElement.appendChild(authorElement)

    return linkElement
}

// Create and return a DOM input element
// Parameters are name, placeholder text and input size
const createInputElement = (name, placeholder, size) => {
    const inputElement = document.createElement("input")
    inputElement.type = "text"
    inputElement.setAttribute("name", name)
    inputElement.setAttribute("placeholder", placeholder)
    inputElement.setAttribute("size", size)
    inputElement.setAttribute("required", "true")
    inputElement.classList.add("form-control")
    return inputElement
}

//create and return form for submitting a new link
const createFormLink = () => {
    // Create input fields for link properties
    const authorElement = createInputElement("author", "Enter author", 20)
    const titleElement = createInputElement("title", "Enter title", 40)
    const urlElement = createInputElement("url", "Enter url", 40)

    //create submit button
    const submitButton = document.createElement("input")
    submitButton.type = "submit"
    submitButton.value = "Add Link"
    submitButton.classList.add("btn")

    //create link submission form
    const linkFormElement = document.createElement("form")
    linkFormElement.classList.add("linkForm")
    linkFormElement.appendChild(authorElement)
    linkFormElement.appendChild(titleElement)
    linkFormElement.appendChild(urlElement)
    linkFormElement.appendChild(submitButton)

    const div = document.createElement("div")
    div.classList.add("formBackground")
    div.appendChild(linkFormElement)

    // Handle form submission
    linkFormElement.addEventListener('submit', e =>{
        // Cancel default form behavior
        e.preventDefault()

        // Create new link object from field values
        const newLink = new Link(titleElement.value, urlElement.value, authorElement.value)

        console.log(e.target)

        // Add new link to page, replacing form
        const newElement = createLinkElement(newLink)
        contentElement.replaceChild(newElement, e.target.parentNode)

        // Create info message indicating success
        const infoMessage = document.createElement("div")
        infoMessage.classList.add("alert")
        infoMessage.textContent = `The link ${newLink.title} has been succesfully added!`;

        contentElement.insertBefore(infoMessage, newElement)

        // Remove info message after 2 seconds
        setTimeout(() => {
            contentElement.removeChild(infoMessage)
        }, 5000)

    })

    return div
}

// Initial links array
const links = [];
links.push(new Link("Hacker News", "https://news.ycombinator.com", "Baptiste"));
links.push(new Link("Reddit", "https://reddit.com", "Thomas"));
links.push(new Link("Boing Boing", "boingboing.net", "Daniel"));


//Add each link to the page
links.forEach(link => {
    const linkElement = createLinkElement(link)
    contentElement.appendChild(linkElement)
})

//Handle click on link submit button
document.getElementById("submitButton").addEventListener('click', () => {

    const form = document.querySelector("div > form")

    if(!contentElement.contains(form)){
         //Create link submission form
        const formElement = createFormLink()

        // Add form on page before the first link
        contentElement.insertBefore(formElement, document.querySelector(".link"))
    }
   
})