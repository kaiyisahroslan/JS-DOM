document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {

    //console.log('Clcked!');
    let val;
    val = e;

    // Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList; // DOMTokenList - can treat like array

    // Event type
    val = e.type;

    // Timestamp
    val = e.timeStamp;

    // Coords event related to window [coords - coordinate]
    val = e.clientX;
    val = e.clientY;

    // Coords event related to element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
}
