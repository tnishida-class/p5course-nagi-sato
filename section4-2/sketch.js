//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){//iは0以上データ数以下
    let b = balls[i];//bにindex値(i)を代入
    ellipse(b.x, b.y, b.size);//中心(i,i)直径iの円を描く
    b.x += b.vx;//中心のx座標　xの速度分ずつ増える
    b.y += b.vy;//中心のy座標　ｙの速度分ずつ増える
  }
}

function mouseDragged(){//イベントハンドラ　ドラッグした時
  const dx = mouseX - pmouseX;//dx＝xの増加量
  const dy = mouseY - pmouseY;//dy＝yの増加量
  if(mag(dx, dy) > 5){//ベクトル(x,y)の大きさが6以上の場合
    const b = { x: mouseX, y: mouseY, size: random(10, 80), vx: dx, vy: dy };
    //中心はドラッグの始点，サイズはランダム，速度を増加領分に
    balls.push(b);//末尾に値を追加
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
