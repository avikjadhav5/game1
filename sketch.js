let unicorn;
let uImg;
let tImg;
let bImg;
let trains = []; // array
function preload(){
  uImg = loadImage('unicorn.png');
  tImg = loadImage('train.png');
  bImg = loadImage('background.jpg');
  
  
}

function setup() {
  createCanvas(800,450);
  unicorn = new Unicorn();
}
function keyPressed(){
  if(key == '  ' || UP_ARROW){
    unicorn.jump();
  }
}

function draw() {
  if(random(1) < 0.005){
    trains.push(new Train());
  }
  background(bImg);
  for(let i = 0; i<trains.length; i++){
    trains[i].move();
    trains[i].show();
    if(unicorn.hits(trains[i])){
      console.log("Game Over");
      noLoop();
    }
  }
  unicorn.show();
  unicorn.move();
 
}