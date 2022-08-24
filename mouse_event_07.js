const clear = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clear.addEventListener('click', runEvent);

// Double click
// clear.addEventListener('dblclick', runEvent);

// Mouse down - long press
// clear.addEventListener('mousedown', runEvent); 

// Mouse up - release after long press
// clear.addEventListener('mouseup', runEvent); 

// Mouse enter and mouse leave fires off when
// (enter and leave the element)

// Mouse enter - entar the area
// card.addEventListener('mouseenter', runEvent);

// Mouse leave - leave the area
// card.addEventListener('mouseleave', runEvent);

// Mouse over and out fires off on nested element

// Mouse over
// card.addEventListener('mouseover', runEvent);

// Mouse out
// card.addEventListener('mouseout', runEvent);

// Mouse move
// card.addEventListener('mousemove', runEvent); // usually used for shooting game because the target need to be aligned

// Event handler
function runEvent(e) {
    console.log(`Event type : ${e.type}`);
        // this part basically for mousemove
        heading.textContent = `MouseX : ${e.offsetX} MouseY : ${e.offsetY}`;
        document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}