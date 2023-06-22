// Selecting elements with JS
const heading = document.querySelector('h1');
const paragraph = document.querySelector('#content p');
const listItem = document.querySelector('ul li');

//Manipulating elements with JS
heading.textContent = 'Updated Heading';
paragraph.style.color = 'blue';
listItem.innerHTML = 'Updated Item';

//Using the DOM object in console.log
// console.log('1', document);  // Log the entire document object
// console.log('2', document.documentElement);  // Log the root element (<html>)
// console.log('3', document.querySelector('#content'));  // Log a specific element by its ID
// console.log('4', document.title);  // Log the title of the document

//Using the BOM (Windows) object
// console.dir(window);
// console.dir(window.location);
// console.dir(window.history);
// console.dir(window.screen);

//Using the screen object
// console.log("Available Height: " + screen.availHeight);
// console.log("Total Height: " + screen.height);
// console.log("Available Width: " + screen.availWidth);
// console.log("Total Width: " + screen.width);

//Using the navigator object
// console.log('navigator:', navigator);

//Iterating through all navigator properties
// for (var prop in navigator) {
//     console.dir(navigator[prop]);
// }

document.getElementById("go-forward").addEventListener("click", (event) => {
    console.log('button forward clicked');
    console.log('event', event);
    history.forward();
});

document.getElementById("go-back").addEventListener("click", () => {
    console.log('button back clicked');
    history.back();
});



  
  