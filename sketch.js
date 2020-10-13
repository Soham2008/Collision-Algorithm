function setup() {
  createCanvas(800, 400);
  fixedRect = createSprite(200, 200, 40, 80);
  movingRect = createSprite(600, 200, 80, 40);
}

function draw() {
  background("skyblue");

  movingRect.x = mouseX
  movingRect.y = mouseY

  console.log(fixedRect.x - movingRect.x)

  if (movingRect.x - fixedRect.x < fixedRect.width / 2 + movingRect.width / 2
    && fixedRect.x - movingRect.x < fixedRect.width / 2 + movingRect.width / 2
    && movingRect.y - fixedRect.y < fixedRect.height / 2 + movingRect.height / 2
    && fixedRect.y - movingRect.y < fixedRect.height / 2 + movingRect.height / 2) {
    fixedRect.shapeColor = "red"
    movingRect.shapeColor = "red"
  }
  else {
    fixedRect.shapeColor = "green"
    movingRect.shapeColor = "green"
  }

  drawSprites();
}