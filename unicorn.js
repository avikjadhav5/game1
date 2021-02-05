class Unicorn{
  constructor(){
    this.r = 150;
    this.x = 50;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 2.2;
  }
  show(){
    image(uImg,this.x,this.y,this.r,this.r);
  }
  hits(train) {
    let x1 = this.x + this.r * 0.5;
    let y1 = this.y + this.r * 0.5;
    let x2 = train.x + train.r * 0.5;
    let y2 = train.y + train.r * 0.5;
    return collideCircleCircle(x1, y1, this.r, x2, y2, train.r);
  }
  jump(){
    if(this.y == height-this.r){ // it can jump only if it is sitting at the bottom.
      this.vy = -35; //moving it up
      //negative sign, because we want to move it upwards.
    }
  }
  move(){
    this.y += this.vy;
    this.vy += this.gravity; //due to this our unicorn can go inside the ground.
    //so we will constrain it
    this.y = constrain(this.y,0,height-this.r);
  }


}