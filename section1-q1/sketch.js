// 練習問題：神戸市のマーク
function setup(){
  createCanvas(350, 350);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  stroke(22,131,46);
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(72,100 , 100, 100, QUARTER_PI * -3, QUARTER_PI * -3 + PI );
  // BLANK[1]

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます



  noStroke();
  fill(14, 47, 146);
  circle(250, 100, 105);//青円
  fill(255);
  circle(242,97,98);//白円塗りつぶし
  fill(22, 131, 46);
  circle(243,96,89);//緑円
  fill(255);
  circle(240,100,82);//白円塗りつぶし
  //fill(196,0,0);
  //beginShape();
  //vertex(185,100);
  //bezierVertex(190,50,195,100,210,80);
  //bezierVertex(190,35,195,85,210,65);
  //endShape();　赤部分無理だった
  noFill();
  strokeWeight(2);
  stroke(77);
  textSize(22);
  textFont("serif");
  text("KOBE", 210, 94);//KOBE
  strokeWeight(1);
  textSize(9);
  text("UNIVERSITY",222,110);//UNIVERSITY
}
