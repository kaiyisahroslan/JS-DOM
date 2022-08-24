// Replacing the element

// Create element
const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';

//Add new textnode
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');

// Parent element
const cardAction = document.querySelector('.card-action');

// Replace method
cardAction.replaceChild(newHeading, oldHeading);

// How to remove the element
const lis= document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove the list item 
lis[0].remove();

// Remove as child element
list.removeChild(lis[2]);
