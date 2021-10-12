// 練習問題：神戸市のマーク
function setup(){
  createCanvas(200, 200);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(75,100 , 100, 100, QUARTER_PI * -3, QUARTER_PI * -3 + PI );
  // BLANK[1]

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます

noFill();
strokeWeight(10);
fill(14, 47, 146);//青塗
circle(250, 100, 50);
    (196, 0, 0);//赤塗り
  const green = color(22, 131, 46);//緑塗
  const gray = color(77);//灰色塗り
}
