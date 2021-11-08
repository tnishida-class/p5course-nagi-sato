// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for(let i = 0; i < scores.length; i++){ total += scores[i]; }
  //iが0以上データ数未満のとき，totalはscoresの合計を繰り返す
  stroke(0);
  strokeWeight(3);
  fill(255, 255, 255);
  for(let i = 0; i < scores.length; i++){
    const radian = scores[i] / total * PI;
    arc(200, 200, 200, 200, scores[i - 1] / total * PI, radian, CHORD);
  }
  // BLANK[1]なんかただの円になるんですけど
}
