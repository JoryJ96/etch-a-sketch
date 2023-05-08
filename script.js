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

// Generates elements based on window size. Sizing/layout are handled by CSS
function size(number) {
    const board = document.querySelector('.cell-container');
    board.innerHTML = '';

    // console.log("size() is running")
    for (let i = 0; i < number * number; i++) {
        var square = document.createElement('div');
        square.className = 'square';
        square.style.width = dimensions + "%";
        square.style.height = dimensions + "%";
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

    // // Adjust square CSS to be appropriately sized
    // const square = document.querySelector('.square');
    // let newDimesion = (1 / input) * 100;
    // square.setAttribute('width', `${newDimesion}%`);
    // square.setAttribute('height', `${newDimension}%`);

    // console.log(square.getAttribute('width'));

    // Set gridSize so if 'resize' is detected, it remembers the users setting
    gridSize = input;
    size(gridSize);
}