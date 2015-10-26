//global variables
var myArray=[];//create blank array
var r,g,b;
//Bubble Constructor
function Bubble(){
    //create x and y properties(variables)
    this.x = random(width);
    this.y = random(height);
    this.r = 20;//r for radius is 1/2 the width of the circle
    this.bubbleSize = this.r*2;//width and height are twice the radius
    //method:draw the bubble
    r = random(255);
    g = random(255);
    b = random(255);
    this.drawBubble = function(){
        fill(r,g,b);
        ellipse(this.x,this.y,this.bubbleSize,this.bubbleSize);
    }
    this.changeColor = function(){
    console.log("changeColor");
    r = random(255);
    g = random(255);
    b = random(255);
    this.drawBubble();
    }

}//end Bubble

function setup(){
    //create the canvas. put into a variable to associate with a element
    var cnv = createCanvas(800,3000);
    cnv.parent("windows");

    //test:var myArray = ["hello",3,"bye"];


    for(var i=0;i<100;i++){
    //add Bubbles to the array
    myArray[i] = new Bubble();
    myArray[i].drawBubble();//runs draw bubble function
    }

}//end setup

    //listen for mouse presses with the bulit-in p5 mousePressed method
    function mousePressed(){

    //check that this is working
    console.log("mouse pressed");

    //loop through myArray and check if mouse is in each bubble
    //console.log(myArray);
        var d;
      for(var i=0;i<myArray.length;i++){
//          console.log(myArray[i]);
          d = dist(mouseX, mouseY, myArray[i].x, myArray[i].y);
//          console.log("distance",d);
          if (d<myArray[i].r){
          myArray[i].changeColor();
          }//end if statement
       }//end for

}// end mousePressed
