//ball moving game
var gren;
var blen;
var ren;

var code = false;

var player = {
    xsize : 70,
    ysize : 70,
    x : 300,
    y : 365,
    vel : 8,
    jumpvel : 0,
    pcolor : undefined,

    show : function() {
        noStroke();
        fill(this.pcolor);
        ellipse(this.x, this.y, this.xsize, this.ysize);
    },
    
    colah : function() {
        if(this.x > 563) {
            this.pcolor = gren;
        }
        if(this.x < 37) {
            this.pcolor = blen;
        }
        if((this.y == 365) && (this.x == 300)) {
            this.pcolor = ren;
        }
    },
    
    move : function() {
        if(keyIsDown(RIGHT_ARROW) && (this.x < 564)) {
            this.x += this.vel;
        }
        if(keyIsDown(LEFT_ARROW) && (this.x > 36)) {
            this.x -= this.vel;
        }
    },
    
    jump : function() {
        if((code == true) && (this.y == 365)) {
            this.jumpvel = -20;
            this.y += this.jumpvel;
            code = false;
        }
        if(this.y < 365) {
            this.jumpvel += 1;
            this.y += this.jumpvel;
        }


    }
}

function setup() {
    createCanvas(600,400);
    ren = color(255, 90, 90);
    gren = color(70, 200, 70);
    blen = color(70, 70, 200);
    player.pcolor = ren;
    player.show();



}

function draw() {
    background(200);
    player.move();
    player.jump();
    player.colah();
    player.show();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        code = true;
        player.jump();
    }
}
