

// size determination on initial load
window.addEventListener('load', function() {
    size();
});

// Re-runs size determination when window is resized
window.addEventListener('resize', function() {
    size();
})

// Generates elements based on window size. Sizing/layout are handled by CSS
function size() {
    const board = document.querySelector('.cell-container');
    board.innerHTML = '';
    
    // console.log("size() is running")
    for (let i = 0; i < 256; i++) {
        var square = document.createElement('div');
        square.className = 'square';
        board.appendChild(square);
    }
}