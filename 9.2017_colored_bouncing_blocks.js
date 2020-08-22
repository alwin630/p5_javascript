var square = {
    x : -50,
    y : -50,
    originalxVelocity : 2,
    originalyVelocity : 3
};

var diagonal_square = {
    x : 100,
    y : -50,
    originalxVelocity : 1,
    originalyVelocity : 2
};

var diagonal_square_2 = {
    x : 200,
    y : 450,
    originalxVelocity : -2,
    originalyVelocity : -1
};

var diag_xvelocity = diagonal_square.originalxVelocity;
var diag_yvelocity = diagonal_square.originalyVelocity;

var diag2_xvelocity = diagonal_square_2.originalxVelocity;
var diag2_yvelocity = diagonal_square_2.originalyVelocity;

//initiate colors
var l_red;
var l_blue;
var l_green;
var l_yellow;

var rainbow;
var rand;
var rand2;
var rand3;
var rand4;

function setup() {
    "use strict";
    createCanvas(600, 400);
    
    //define colors
    l_red = color(200, 75, 75);
    l_blue = color(75, 75, 200);
    l_green = color(75, 200, 75);
    l_yellow = color(200, 200, 75);
    
    rainbow = [l_red, l_blue, l_green, l_yellow];
    rand = 1;
    rand2 = 0;
    rand3 = 2;
    rand4 = 3;
    noStroke();
}


function draw() {
    background(185);
    fill(rainbow[rand]);
    rect(square.x, height/2-25, 50, 50);
    fill(rainbow[rand2]);
    rect(width/2-25, square.y, 50, 50);
    //diagonal moving rect
    fill(rainbow[rand3]);
    rect(diagonal_square.x, diagonal_square.y, 50, 50);
    //diagonal moving rect 2
    fill(rainbow[rand4]);
    rect(diagonal_square_2.x, diagonal_square_2.y, 50, 50);
    
    if((square.x + 50) > width ) {
        rand = int(random(4));
        square.originalxVelocity = random(10, 25);
        square.xvelocity *= -1;
    }
    else if(square.x < 0) {
        rand = int(random(4));
        square.originalxVelocity = random(10, 25);
        square.xvelocity = square.originalxVelocity;
    }
    if((square.y + 50) > height ) {
        rand2 = int(random(4));
        square.originalyVelocity = random(10, 25);
        square.yvelocity *= -1;
    }
    else if(square.y < 0) {
        rand2 = int(random(4));
        square.yvelocity = square.originalyVelocity;
    }
    
    //diagonally moving square
    
    //hits bottom
    if((diagonal_square.y + 50) > height) {
        rand3 = int(random(4));
        diag_yvelocity *= -1;
    }
    
    //hits top
    else if(diagonal_square.y < 0) {
        rand3 = int(random(4));
        diagonal_square.originalyVelocity = random(2,10);
        diag_yvelocity = diagonal_square.originalyVelocity;
    }
    
    //hits right side
    if((diagonal_square.x + 50) > width) {
        rand3 = int(random(4));
        diag_xvelocity *= -1;
    }
    
    //hits left side
    else if(diagonal_square.x < 0) {
        rand3 = int(random(4));
        diagonal_square.originalxVelocity = random(2,10);
        diag_xvelocity = diagonal_square.originalxVelocity;
    }
    
    //diagonally moving square 2
    
    //hits bottom
    if((diagonal_square_2.y + 50) > height) {
        rand4 = int(random(4));
        diagonal_square_2.originalyVelocity = random(-10,-2);
        diag2_yvelocity = diagonal_square_2.originalyVelocity;
    }
    
    //hits top
    else if(diagonal_square_2.y < 0) {
        rand4 = int(random(4));
        diag2_yvelocity *= -1;
    }
    
    //hits right side
    if((diagonal_square_2.x + 50) > width) {
        rand4 = int(random(4));
        diagonal_square_2.originalyVelocity = random(-10,-2);
        diag2_xvelocity = diagonal_square_2.originalxVelocity;
    }
    
    //hits left side
    else if(diagonal_square_2.x < 0) {
        rand4 = int(random(4));
        diag2_xvelocity *= -1;
    }
    
    square.x += square.xvelocity;
    square.y += square.yvelocity;
    diagonal_square.x += diag_xvelocity;
    diagonal_square.y += diag_yvelocity;
    
    diagonal_square_2.x += diag2_xvelocity;
    diagonal_square_2.y += diag2_yvelocity;
}