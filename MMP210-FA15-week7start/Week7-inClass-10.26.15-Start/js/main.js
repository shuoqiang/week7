//global variables

//Bubble Constructor
function Bubble(){
    //create x and y properties(variables)
    this.x = random(width);
    this.y = random(height);
    this.r = 20;//r for radius is 1/2 the width of the circle
    this.bubbleSize = this.r*2;//width and height are twice the radius
    //method:draw the bubble
    this.drawBubble = function(){
        fill('Lavender');
        ellipse(this.x,this.y,this.bubbleSize,this.bubbleSize);
    }


}//end Bubble

function setup(){
    //create the canvas. put into a variable to associate with a element
    var cnv = createCanvas(800,3000);
    cnv.parent("windows");

    //test:var myArray = ["hello",3,"bye"];
    var myArray=[];//create blank array

    for(var i=0;i<100;i++){
    //add Bubbles to the array
    myArray[i] = new Bubble();
    myArray[i].drawBubble();//runs draw bubble function
    }
    //log out the array
     console.log(myArray);

    //loop to go through every item in the array
    for(var i=0;i<myArray.length;i++){
        myArray[i]+=10;
        //console.log(myArray[i]);
    }
    // log out each item,for ellspses it will return the whole p5 object instead
        console.log(myArray);

}//end setup

//listen for mouse presses with the bulit-in p5 mousePressed method
function mousePressed(){
    //check that this is working
    console.log("mouse pressed");
}
