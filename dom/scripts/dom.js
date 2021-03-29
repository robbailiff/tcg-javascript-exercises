// Task 1
let introTitle = document.getElementById('intro');
console.log(introTitle);
introTitle.textContent = 'New Title'

//Task 2
let pageBody = document.getElementsByTagName('body')[0];
let newParagraph  = document.createElement('p');
let paragraphText = document.createTextNode('Write some new text');
newParagraph.appendChild(paragraphText);
pageBody.appendChild(newParagraph);

// Task 3
introTitle.addEventListener('mouseover', function (event) {
    alert('This is a title!');
})

// Task 4
let link = document.getElementById('my-link');
link.addEventListener('click', function(event) {
    event.preventDefault();
    alert('You clicked on the link!');
})

// Task 5
function welcomeMessage() {
    let firstName = document.getElementById("firstName").value;
    let body = document.getElementsByTagName('body')[0];
    let paragraph  = document.createElement('p');
    let paragraphText = document.createTextNode(`Welcome to the page ${firstName}`);
    paragraph.appendChild(paragraphText);
    body.appendChild(paragraph);
}