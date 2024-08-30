import { Game } from "./game.js";

const game = new Game();
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 400; // Largeur du canvas
canvas.height = 400; // Hauteur du canvas

const gameSpeed = 150; // Vitesse du jeu en millisecondes

function gameLoop() {
  game.update();
  drawGame(game);
}

// Gère les entrées du clavier pour contrôler le serpent
function handleKeyPress(e) {
  switch (e.key) {
    case "ArrowUp":
      if (game.snake.direction.y === 0) game.snake.setDirection(0, -1);
      break;
    case "ArrowDown":
      if (game.snake.direction.y === 0) game.snake.setDirection(0, 1);
      break;
    case "ArrowLeft":
      if (game.snake.direction.x === 0) game.snake.setDirection(-1, 0);
      break;
    case "ArrowRight":
      if (game.snake.direction.x === 0) game.snake.setDirection(1, 0);
      break;
  }
}

// Rvenir à l'accueil
document.getElementById("backButton").addEventListener("click", function () {
  window.location.href = "index.html";
});

// Ecouteur sur les touches du clavier
document.addEventListener("keydown", handleKeyPress);

setInterval(gameLoop, gameSpeed);

function drawGame(game) {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Efface le canvas

  const headX = game.snake.body[0].x * 20; // Position X de la tête
  const headY = game.snake.body[0].y * 20; // Position Y de la tête

  const headImg = new Image();
  headImg.src = "../img/snake.png"; // Chemin de l'image de la tête

  headImg.onload = () => {
    ctx.save();

    // Déterminez l'angle de rotation de la tête
    // Pour qu'elle change de direction à
    let angle = 0;
    if (game.snake.direction.x === 1) angle = 0; // Droite
    else if (game.snake.direction.x === -1) angle = Math.PI; // Gauche
    else if (game.snake.direction.y === 1) angle = Math.PI / 2; // Bas
    else if (game.snake.direction.y === -1) angle = -Math.PI / 2; // Haut

    // Dessiner l'image de la tête
    ctx.translate(headX + 10, headY + 10);
    ctx.rotate(angle);
    ctx.drawImage(headImg, -10, -10, 20, 20);
    ctx.restore();

    // Dessine le corps du serpent
    const bodySerpent = new Image();
    bodySerpent.src = "../img/body_snake.png"; // Chemin vers l'image du corps

    bodySerpent.onload = () => {
      // Ici pn cmmence à 1 pour ne pas redessiner la tête
      for (let i = 1; i < game.snake.body.length; i++) {
        const segment = game.snake.body[i];

        let bodyAngle = 0;
        const prevSegment = game.snake.body[i - 1]; // Segment précédent

        // Calculez la direction par rapport au segment précédent
        if (segment.x > prevSegment.x) bodyAngle = 0; // Droite
        else if (segment.x < prevSegment.x) bodyAngle = Math.PI; // Gauche
        else if (segment.y > prevSegment.y) bodyAngle = Math.PI / 2; // Bas
        else if (segment.y < prevSegment.y) bodyAngle = -Math.PI / 2; // Haut

        ctx.save();
        ctx.translate(segment.x * 20 + 10, segment.y * 20 + 10);
        ctx.rotate(bodyAngle);
        ctx.drawImage(bodySerpent, -10, -10, 20, 20);
        ctx.restore();
      }
    };

    // Dessine le fruit
    ctx.fillStyle = "red";
    ctx.fillRect(game.fruit.x * 20, game.fruit.y * 20, 20, 20);

    document.getElementById("my_score").textContent = `Score: ${game.score}`;
  };
}
