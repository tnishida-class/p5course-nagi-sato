// テキスト「配列を使った描画」練習問題：折れ線グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  // ここからが本番
  stroke(0);//黒
   const dx = width / scores.length;
  let px, py; // 線を引くために一つ前の点を覚えておく変数
  for(let i = 0; i < scores.length; i++){
    const dy = height - height * scores[i] / 100;//dx=幅/データ数
   strokeWeight(10);//点太さ
   point(i * dx, dy);//点
   strokeWeight(2);//線太さ
   line(i * dx, dy, (i - 1) * dx, height - height * scores[i - 1] / 100);//始点今の点，終点前の点
    // BLANK[1]
  }
}
