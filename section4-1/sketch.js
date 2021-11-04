// テキスト「配列」～「配列を使った描画」までを収録
function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // scoresのiの場所に20以上100未満のランダムな数を代入
  }
  console.log(scores);//index0~9　10個のデータがscore内に

  // 合計を計算する
  let sum = 0;
  for(let i = 0; i < scores.length; i++){//iは0以上データ数未満
    sum += scores[i];//index0~iまでデータ合計
  }
  console.log(sum);//合計でました

  // ここから平均・最大・最小を求めます
  let average, largest, smallest;
  　average　=　sum　/　scores.length;// BLANK[1]　平均値＝合計÷データ数


  largest = 0;
  for(let i = 0; i < scores.length; i++){//iは0以上データ数(10)未満
  　if (largest < scores[i]){largest = scores[i];}  // BLANK[2]　いままでの最大値と比較
  }


  smallest = 100;
  for(let i = 0; i < scores.length; i++){
    if (smallest > scores[i]){smallest = scores[i];}// BLANK[3]　いままでの最小値と比較
  }

  // ここから棒グラフを描いていきます。まずは背景に横線をn本引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }
  //iは0以上9以下（10本の横線）　始点(0, height*i/n)　終点(width, height*i/n)

  noStroke();

  for(let i = 0; i < scores.length; i++){//iは0以上9以下
    const dx = width / scores.length;//定義　棒幅＝width/データ数
    const h = height * scores[i] / 100;//定義　棒高さ＝height×データ数値÷100　
    if (scores[i] == largest){fill(245, 29, 5);} //棒高さ95以上なら赤
   else if (scores[i] == smallest){fill(5, 25, 245);}//棒高さ60以下なら青
   else {fill(109, 111, 115);}//BLANK[4] それ以外なら灰色
   rect(i * dx + 2, height - h, dx - 4, h);
  fill(0);
  text(scores[i].toPrecision(3), i * dx, height - h);}

   stroke(0, 176, 3);
   line(0, height-height * average / 100, width, height-height* average / 100);
  // BLANK[5] 平均点の線を引きます
}
