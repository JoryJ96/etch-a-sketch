const squares = document.getElementsByClassName("square");

let gridSize = 16;
let dimensions = (1 / gridSize) * 100;

// size determination on initial load
window.addEventListener('load', function() {
    size(gridSize);
});

// Re-runs size determination when window is resized
window.addEventListener('resize', function() {
    size(gridSize);
})


window.addEventListener('mouseover', function(event) {
    if (event.target.className === "square") {
        event.target.style["background-color"] = "black";
    }
})

// DID NOT WORK
// Array.from(squares).forEach(function(square) {
//     square.addEventListener("mouseover", (event) => {
//         event.target.style["background-color"] = "black";
//         console.log("Added event listener");
//     })
// })

// for (var i = 0; i < squares.length; i++) {
//     squares[i].addEventListener("mouseover", (event) => {
//         event.target.style["background-color"] = "black";
// })};

// Generates elements based on window size. Sizing/layout are handled by CSS
function size(number) {
    const board = document.querySelector('.cell-container');
    board.innerHTML = '';

    // console.log("size() is running")
    for (let i = 0; i < number * number; i++) {
        var square = document.createElement('div');
        square.className = 'square';
        square.style.setProperty('width', (dimensions + "%"));
        console.log(`set width to ${dimensions}`)
        square.style.setProperty('height', (dimensions + "%"));
        board.appendChild(square);
    }
}

function showSettings() {
    let input = prompt("How many squares per side? Max 100");
    // console.log("Button pressed!")
    if (!(typeof input) === 'Number') {
        alert("Invalid input!");
        showSettings();
    }

    // Set gridSize so if 'resize' is detected, it remembers the users setting
    gridSize = input;

    // Tripped up here for a while. Had to re-calculate {dimensions} again before calling size(). Understandable, as line 2 never ran again before size() was called in line 50
    dimensions = (1 / gridSize) * 100;
    size(gridSize);
}