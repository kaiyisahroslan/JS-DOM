const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Submit
// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent);

// Keypress
// taskInput.addEventListener('keypress', runEvent);

// Focus
// taskInput.addEventListener('focus', runEvent);

// Blur
// taskInput.addEventListener('blur', runEvent);

// Cut
// taskInput.addEventListener('cut', runEvent);

// Copy
// taskInput.addEventListener('copy', runEvent);

// Paste
// taskInput.addEventListener('paste', runEvent);

// Event handler
function runEvent(e) {
    console.log(`Event Type : ${e.type}`);

    // Prevent the default behaviour 
    // e.prevenetDefault();
}