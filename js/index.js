// Permet de commencer à jouer
document.getElementById("playButton").addEventListener("click", function () {
  window.location.href = "game.html";
});

// Récupère un utilisateurs aléatoire
// à partir de l'api
async function fetchRandomUser() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();

  const firstName = data.results[0].name.first;
  const lastName = data.results[0].name.last;

  return `${firstName}${lastName}`;
}

// Génère un score aléatoire
function getRandomScore() {
  const minScore = 50;
  const maxScore = 300;
  return (
    Math.floor((Math.random() * (maxScore - minScore + 1)) / 10) * 10 + minScore
  );
}

// Génere une date aléatoire
function getRandomDate() {
  const now = new Date();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(now.getDate() - 7);

  const randomTime = Math.random() * (now.getTime() - oneWeekAgo.getTime());
  const randomDate = new Date(oneWeekAgo.getTime() + randomTime);

  return randomDate.toISOString();
}

// Génère 20 scores aléatoires si n'y a aucun scores
// dans la sessionStorage (highScores)
async function createScoreRandomInSession() {
  let scores = JSON.parse(sessionStorage.getItem("highScores")) || [];

  if (scores.length === 0) {
    for (let i = 0; i < 20; i++) {
      const name = await fetchRandomUser();
      const score = getRandomScore();
      const date = getRandomDate();

      scores.push({ name, score, date });
    }

    scores.sort((a, b) => b.score - a.score);
    sessionStorage.setItem("highScores", JSON.stringify(scores));
  }

  afficheScores();
}

function afficheScores() {
  const scores = JSON.parse(sessionStorage.getItem("highScores")) || [];
  console.log(scores);
  const scoreBoard = document.getElementById("scoreBoard");

  scoreBoard.innerHTML = scores
    .map(
      (score, index) =>
        `<div><span>${index + 1} - ${score.name}</span><span>${
          score.score
        }</span><span>${new Date(score.date).toLocaleString()}</span></div>`
    )
    .join("");
}

createScoreRandomInSession();
