// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){

  createCanvas(200, 200);
  background(8, 27, 168);//背景濃青
  for(let i = 0; i < 12; i++){//iは0以上12未満
    let theta = TWO_PI * i / 12;//θは1周の1/12ずつ増える
    let x = 100 + cos(theta) * 50;
    let y = 100 + sin(theta) * 50;
    ;//半径を単位円の50倍へ，中心(100, 100)にずらす
    star(x, y, 10);//starお呼び出し
  }
}
function star(cx, cy, r){//starってこのこどだよ
  push();//セーブ
  fill(237, 245, 15);//星　黄色へ
  noStroke();//輪郭なし
  beginShape();//点つなぎはじめ
  for(let i = 0; i < 5; i++){//iは0以上5未満
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    //ふたつ飛ばし 2i/5 で点つなぎ
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);//次につなぐ点を1つ増やす
    }
    endShape(CLOSE);//点つなぎおわり（図形閉じる）
    pop();//セーブデータに戻す
}


// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
