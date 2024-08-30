export class Snake {
  constructor() {
    this.body = [
      { x: 10, y: 10 }, // la tête
      { x: 9, y: 10 }, // le premier corps
    ];
    this.direction = { x: 1, y: 0 }; // Direction initiale (vers la droite)
    this.size = 0; // taille du serpentt)
  }

  move() {
    const head = {
      x: this.body[0].x + this.direction.x,
      y: this.body[0].y + this.direction.y,
    };

    // Effet "Donut"
    head.x = (head.x + 20) % 20;
    head.y = (head.y + 20) % 20;

    this.body.unshift(head); // Ajout nouvelle position de la tête au début du corps

    if (this.size > 0) {
      this.size--;
    } else {
      this.body.pop();
    }
  }

  grow() {
    this.size++; // Incrémente la taille du serpent
  }

  hasCollided() {
    const [head, ...body] = this.body; // Premier element tête (head) et le reste (...body)
    // Vérifie si la tête du serpent entre en collision avec le reste de son corps
    return body.some((segment) => segment.x === head.x && segment.y === head.y);
  }

  setDirection(x, y) {
    this.direction = { x, y };
  }
}
