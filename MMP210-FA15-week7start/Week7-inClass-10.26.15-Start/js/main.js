//global variables

function setup(){
    //create the canvas. put into a variable to associate with a element
    var cnv = createCanvas(800,3000);
    cnv.parent("windows");

    //test:var myArray = ["hello",3,"bye"];
    var myArray=[];//create blank array

    //add stuff to the array with a loop
    for(var i=0; i<1000;i++){
        //myArray[i] = "item"+i;
        myArray[i]=i;
    }
    //loop to go through every item in the array
    for(var i=0;i<myArray.length;i++){
        myArray[i]+=10;
        //console.log(myArray[i]);
    }
        console.log(myArray);

    console.log(myArray[0]);
    console.log(myArray[1]);
    console.log(myArray[2]);
    console.log(myArray);
    console.log("myArray",myArray);
}//end setup

