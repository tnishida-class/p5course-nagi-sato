// ダーツ

function setup() {
  const green = color(0, 255, 0);
  const red = color(255, 0, 0);
  const black = color(0);
  const cream = color(242, 212, 147);
  createCanvas(400, 400);
  background(255);
  stroke(255);
  strokeWeight(3);

  const cx = width / 2; // 中心は (cx, cy)
  const cy = height / 2;
  const maxR = min(width, height); // 大きさは幅と高さのうち小さい方
  for(let x = 0; x < 8; x++){
  for(let y = 0; y < 8; y++){
    drawCircle(black, maxR);//no.1黒円
    drawArcs(green, red, maxR * 0.8);//no.2赤緑しましま
    drawArcs(cream, black, maxR * 0.8 * 0.94 );//no.3クリーム黒しましま
    drawArcs(green, red, maxR * 0.5);//no.4赤緑しましま
    drawArcs(cream, black, maxR * 0.5 * 0.9);//no.5クリーム黒しましま
    drawCircle(green, maxR * 0.1);
    drawCircle(red,maxR * 0.05);
}

function drawCircle(c, r){
  fill(c);
  ellipse(cx, cy, r, r);//drawCircleの定義
}

function drawArcs(c1, c2, r) {
  for (let i = 0; i < 20; i++) {
    let start = TWO_PI / 20 * i;
    let stop = TWO_PI / 20 * (i + 1);
    fill(i % 2 == 0 ? c1 : c2);
    arc(cx, cy, r, r, start, stop, PIE);//drawArcsの定義
}
}
}
}
