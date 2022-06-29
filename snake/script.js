let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box,
};
let direction = "right";
let food = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box,
};

//PONTUAÇÃO
let score = 0;

//CRIA O BACKGROUND
function createBG() {
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

//CRIA A COBRA
function createSnake() {
  for (i = 0; i < snake.length; i++) {
    context.filter = "drop-shadow(0 0 3px rgba(0,0,0,0.3))";
    context.fillStyle = `rgb(${Math.floor( Math.random() * (150 - 50) + 50 )},190,${Math.floor(Math.random() * (50 - 0) + 0)})`;
    context.beginPath();
    context.ellipse(snake[i].x, snake[i].y, box / 2 + 3, box / 2 + 3, 0, 0, 2 * Math.PI );
    context.fill();
  }
}

//CRIA A COMIDA
function createFood() {
  context.fillStyle = `rgb(${Math.floor(
    Math.random() * (200 - 120) + 120
  )}, 0,0)`;
  context.beginPath();
  context.ellipse(food.x, food.y, box / 2, box / 2, Math.PI / 4, 0, 2 * Math.PI );
  context.fill();
}

//ESCUTA O EVENTO QUE MUDA A DIRECAO
document.addEventListener("keydown", update);

function update(event) {
  if (event.keyCode == 37 && direction != "right") direction = "left";
  if (event.keyCode == 38 && direction != "down") direction = "up";
  if (event.keyCode == 39 && direction != "left") direction = "right";
  if (event.keyCode == 40 && direction != "up") direction = "down";
}

//INICIA O JOGO
function iniciarJogo() {
  if (snake[0].x > 16 * box && direction == "right") snake[0].x = 0;
  if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
  if (snake[0].y > 16 * box && direction == "down") snake[0].y = 0;
  if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

  for (i = 1; i < snake.length; i++) {
    if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
      clearInterval(jogo);
      alert(`Game Over :( \n Você fez ${score} Pontos`);
      location.reload();
    }
  }

  createBG();
  createSnake();
  createFood();

  //CRIA O MOVIMENTO DA COBRA
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction == "right") snakeX += box;
  if (direction == "left") snakeX -= box;
  if (direction == "up") snakeY -= box;
  if (direction == "down") snakeY += box;

  if (snakeX != food.x || snakeY != food.y) {
    snake.pop();
  } else {
    food.x = Math.floor(Math.random() * 15 + 1) * box;
    food.y = Math.floor(Math.random() * 15 + 1) * box;
  }

  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  snake.unshift(newHead);

  //ATUALIZA A PONTUAÇÃO
  score = snake.length * 100 - 100;
  document.getElementById("pontuacao").innerText = `${score} Pontos`;
}

let jogo = () => {
  setInterval(iniciarJogo, 90);
  //ESCONDE O BOTAO E MOSTRA O PAINEL DO JOGO
  document.getElementById("comeca").classList.toggle("mostrar");
  document.getElementById("snake").classList.toggle("mostrar");
};
