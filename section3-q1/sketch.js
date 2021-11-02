// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 50;
  cycle = 50;//拡大範囲？
}

function draw(){
  background(160, 192, 255);
  count = (count + 1.5 ) % cycle;//この式の意味がわからない
  let size = count;
  ellipse(width / 2, height / 2, size);
  if(keyIsDown(CONTROL)){count*=2}//Ctrl押すと早くなる
}
