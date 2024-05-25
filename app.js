// Inside your script (after defining platforms)
const player = {
    x: canvas.width / 2,
    y: canvas.height - 100,
    velocityX: 0,
    speed: 5
};

function handlePlayerMovement() {
    if (keys.left) {
        player.velocityX = -player.speed;
    } else if (keys.right) {
        player.velocityX = player.speed;
    } else {
        player.velocityX = 0;
    }
    player.x += player.velocityX;
}
// Inside your script (after defining platforms)
const player = {
    x: canvas.width / 2,
    y: canvas.height - 100,
    velocityX: 0,
    speed: 5
};

function handlePlayerMovement() {
    if (keys.left) {
        player.velocityX = -player.speed;
    } else if (keys.right) {
        player.velocityX = player.speed;
    } else {
        player.velocityX = 0;
    }
    player.x += player.velocityX;
}
let score = 0;

function updateScore() {
    if (player.y < canvas.height / 2) {
        // Player is above the middle of the screen
        score += Math.floor((canvas.height / 2 - player.y) / 10);
    }
}

// Inside your game loop
function update() {
    // Other logic...
    updateScore();
    // Other logic...
}

// Display the score (e.g., in your game over screen)
context.fillStyle = 'white';
context.font = '24px Arial';
context.fillText(`Score: ${score}`, 20, 40);
