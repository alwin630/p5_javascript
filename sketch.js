let tanks = ['Orange Juice', 'Spoon of Peanut Butter', 'Raw Lettuce', 'Bakery Item', 'Cup of Water in 2 min', 'Cole Slaw or Potato Salad', 'Your Choice in 5 min', 'something with ham'];

let o;

let p = true;
let q;
let w;
let h;
function setup() {
    createCanvas(600,400);
    textSize(24);
    textAlign(CENTER);
    frameRate(12);

    
}

function draw() {
    background(200);
    fill(70, 200, 70);
    text('Food & Drink Challenge', width/2, 50);
    fill(0);
    if(p) {
        w = random(100, width-100);
        h = random(15, height-15);
        q = int(random(tanks.length));
        if(q == o) {
            q = int(random(tanks.length));
        }
        o = q;
    }
    if(!p) {
        background(70, 200, 70);
    }
    text(tanks[q], w, h);
}

function mousePressed() {
    p = !p;
}

