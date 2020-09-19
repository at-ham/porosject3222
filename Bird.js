class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.body.shapeColor ="yellow";
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    fill("yellow")
    super.display();
  }
}
