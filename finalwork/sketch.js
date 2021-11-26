// 最終課題を制作しよう
let x, snow;

function setup(){
  createCanvas(windowWidth, windowHeight);
  snow = [];//雪庸
  x = width / 2;//車体庸
}

function draw(){
  background(1, 4, 38);

  noStroke();
  mountain(width, height);
  fill(255);
  rect(x, height / 20 * 19, width / 2, height / 25);//車体
  triangle(x, height / 20 * 19, x, height / 20 * 19 + height / 25, x - height / 25 * 3, height / 20 * 19 + height / 25);//左鼻
  triangle(x + width / 2, height / 20 * 19, x + width / 2, height / 20 * 19 + height / 25, x + width / 2 + height / 25 * 3, height / 20 * 19 + height / 25);
  //右鼻
  fill(3, 18, 77);
  rect(x, height / 20 * 19 + 2, width / 2, 5);//ライン太

  stroke(125, 125, 128);
  strokeWeight(20);
  line(0, height, width, height);//下

  stroke(3, 18, 77);
  strokeWeight(2);
  line(x, height / 20 * 19 + 10, x + width / 2, height / 20 * 19 + 10);//ライン細

  for (let i = 0; i < 63; i++){
    let w = x + i * 12 + 12;
    fill(0);
    rect(w, height / 20 * 19 + 14, 4, 8, 2);
}


   x -= 15;
   if (keyIsDown(UP_ARROW)){x -= 10};
   if (keyIsDown(DOWN_ARROW)){x += 5};

   if (x < -width / 2){x = width;}
   else if(x > width){x = 0;}


  for(let i = 0; i < snow.length; i++){//iは0以上データ数以下
    let b = snow[i];//bにindex値(i)を代入
    fill(255);
    noStroke();
    ellipse(b.x, b.y, b.size);//中心(i,i)直径iの円を描く
    b.x += b.vx;//中心のx座標　xの速度分ずつ増える
    b.y += b.vy;//中心のy座標　ｙの速度分ずつ増える

}
  const b = { x:0, y:0, size:random(3, 8), vx:random(4), vy:random(4)};
  //中心はドラッグの始点，サイズはランダム，速度を増加領分に
      snow.push(b);
}

function mountain(x, y){
  fill(5, 12, 94);
  beginShape();
  vertex(0, y);
  vertex(x / 2 - 50, y / 2 + 30);
  vertex(x / 2 + 50, y / 2 + 30);
  vertex(x, y);
  endShape();

  fill(125, 134, 212);
  beginShape();
  vertex(0, y);
  vertex(x / 2 - 50, y / 2 + 30);
  vertex(x / 2 + 50, y / 2 + 30);
  vertex(x - 100, y - 50);
  vertex(x / 2 + 100, y / 3 * 2);
  vertex(x / 2 + 50, y / 4 * 3 + 20);
  vertex(x / 2, y / 2 + 60);
  vertex(x / 2 - 20, y / 4 * 3);
  vertex(x / 2 - 50, y / 2 + 60);
  endShape();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
