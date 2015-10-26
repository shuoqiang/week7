//global variables

//Bubble Constructor
function Bubble(){
    //create x and y properties(variables)
    this.x = random(width);
    this.y = random(height);
    this.r = 20;//r for radius is 1/2 the width of the circle
    //draw the bubble
    this.bubbleSize = this.r*2;//width and height are twice the radius
        ellipse(this.x,this.y,this.bubbleSize,this.bubbleSize);
}//end Bubble

function setup(){
    //create the canvas. put into a variable to associate with a element
    var cnv = createCanvas(800,3000);
    cnv.parent("windows");

    //test:var myArray = ["hello",3,"bye"];
    var myArray=[];//create blank array

    for(var i=0;i<10;i++){
    //add Bubbles to the array
    myArray[i] = new Bubble();
    }

    //add stuff to the array with a loop
    for(var i=0; i<1000;i++){
        //myArray[i] = "item"+i;
        //myArray[i]=i;
        myArray[i]= ellipse(i,i,10,10);
    }

    //loop to go through every item in the array
    for(var i=0;i<myArray.length;i++){
        myArray[i]+=10;
        //console.log(myArray[i]);
    }
    // log out each item,for ellspses it will return the whole p5 object instead
        console.log(myArray);

}//end setup

