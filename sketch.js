var ball;
var database, position;
var ballpos;

function setup(){
    createCanvas(500,500);
    //to make a connection to a database
    database = firebase.database();

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    //ref maeans to refer
    ballpos = database.ref('ball/position');
    //on reads the info 
    ballpos.on("value", readpos, showError);


}

function draw(){
    background("white");

    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    //set is used to write the value
    database.ref('ball/position').set({
        'x' : position.x + x,
        'y' : position.y + y
        })
   // ball.x = ball.x + x;
   // ball.y = ball.y + y;
}

function readpos(data){
    position = data.val();
    console.log(position.x);

    ballpos.x = position.x;
    ballpos.y = position.y;
}

function showError(){
    console.log(showError);
}



