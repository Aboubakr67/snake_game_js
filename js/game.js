import { Snake } from "./snake.js";

export class Game {
  constructor() {
    this.snake = new Snake();
    this.score = 0;
    this.spawnFruit();
  }

  spawnFruit() {
    this.fruit = {
      x: Math.floor(Math.random() * 20),
      y: Math.floor(Math.random() * 20),
    };
  }

  update() {
    this.snake.move();

    // Vérifie si le serpent à manger le fruit
    if (
      this.snake.body[0].x === this.fruit.x &&
      this.snake.body[0].y === this.fruit.y
    ) {
      this.snake.grow(); // Fait grandir le serpent
      this.score += 10; // Ajoute 10 points au score
      this.spawnFruit(); // Fait apparaître un nouveau fruit
    }

    // Vérifie si le serpent s'est mordu lui-même (perdu)
    if (this.snake.hasCollided()) {
      this.endGame();
    }
  }

  endGame() {
    alert(`Partie perdu ! Score: ${this.score}`);
    const scores = JSON.parse(sessionStorage.getItem("highScores")) || [];

    // Vérifie si le score est dans le top 20
    if (scores.length < 20 || this.score > scores[19].score) {
      this.askForName(this.score);
    } else {
      window.location.href = "index.html";
    }
  }

  askForName(score) {
    const name = prompt("Entrez votre nom (6-20 caractères) :"); // Demande le nom du joueur

    if (name && name.length >= 6 && name.length <= 20) {
      this.saveScore(score, name); // Enregitre le score avec le nom
    } else {
      alert("Nom invalide. Veuillez réessayer.");
      this.askForName(score); // Demande à nouveau le nom
    }
  }

  saveScore(score, name) {
    let scores = JSON.parse(sessionStorage.getItem("highScores")) || [];

    scores.push({ name, score, date: new Date().toISOString() });
    scores.sort((a, b) => b.score - a.score); // Trie les scores par ordre décroissant
    scores = scores.slice(0, 20); // On garde uniquement les 20 meilleurs scores

    sessionStorage.setItem("highScores", JSON.stringify(scores));
    window.location.href = "index.html";
  }

  resetGame() {
    this.snake = new Snake();
    this.score = 0;
    this.spawnFruit();
  }
}
