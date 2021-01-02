class Log extends BaseClass{
  constructor(x,y,height,angle){
    //something something
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
  }
}