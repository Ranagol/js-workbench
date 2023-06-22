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


