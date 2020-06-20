var rain=[],drop;

function setup() {
  createCanvas(400,400);
  
  for(var i=0; i<1000; i++){
    drop=new Drop(random(0,400),random(0,400))
    rain.push(drop);
  }
}

function draw() {
  background(0);

  for(var i=0; i<rain.length;i++){
    rain[i].display();
    rain[i].fall();
  }
  
}