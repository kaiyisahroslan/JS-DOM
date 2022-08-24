// We can create DOM elements from scratch with js

// Create element
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Create a text node and append (attach) it
li.appendChild(document.createTextNode('New Item'));

// Create a link
const link = document.createElement('a');

// Add class to link
link.className = 'delete-item secondary-content';

// Add html icon
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link as child of li
li.appendChild(link);

// Pass li as child of ul
document.querySelector('ul.collection').appendChild(li);