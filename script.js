boardSetup();

// Re-runs size determination when window is resized
window.addEventListener('resize', function() {
    size();
})

function boardSetup() {
    // Using nested for loop, generate empty square divs, 16x16
    const board = document.querySelector('.cell-container');
    board.innerHTML = '';

    window.addEventListener('load', function() {
        size();
    });
}

// Generates elements based on window size. Sizing/layout are handled by CSS
function size() {
    // Floors determine the width / height of the divs
    var widthFloor = Math.floor(window.innerWidth / (1 / 16));
    var heightFloor = Math.floor(window.innerHeight / (1 / 16));

    for (let i = 0; i < widthFloor * heightFloor; i++) {
        var square = document.createElement('div');
        square.className = 'square';
        board.appendChild(square);
    }
}