//Selecting html elements for JS manipulation
var heading = document.getElementsByTagName('h1')[0];
var paragraph = document.getElementById('content').getElementsByTagName('p')[0];
var listItem = document.querySelectorAll('ul li')[0];

//Manipulating html elements with JS
heading.innerHTML = 'Updated Heading';
paragraph.style.color = 'blue';
listItem.innerHTML = 'Updated Item';

