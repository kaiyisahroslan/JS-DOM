// Event Bubbling
// Bubbling an event basically is bubbling through its parent in DOM

// Task list
// document.querySelector('.card-title').addEventListener('click', function() {
//     console.log('Task list clicked ...');
// });

// // Card content
// document.querySelector('.card-content').addEventListener('click', function() {
//     console.log('Card content clicked ...');
// });

// Card
// document.querySelector('.card').addEventListener('click', function() {
//     console.log('Card clicked ...');
// });

// Col
// document.querySelector('.col').addEventListener('click', function() {
//     console.log('Col clicked ...');
// });

// Row
// document.querySelector('.row').addEventListener('click', function() {
//     console.log('Row clicked ...');
// });

// Container
// document.querySelector('.container').addEventListener('click', function() {
//     console.log('Container clicked ...');
// });

// Event Deligation
// We put the event listener on the parent element and it goes down to the child element

const delItem = document.querySelector('.delete-item');
document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
    // if(e.target.parentElement.className === 'delete-item secondary-content') {
    //     console.log('Delete item');
    // };
    if (e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();
    };
};



