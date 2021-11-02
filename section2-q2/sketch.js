// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  stroke(77);
  for(let i = 0; i < 8; i++){
  for(let j = 0; j < 8; j++){
    if((i + j ) % 2 == 1){
        fill(188, 190, 194);
      }
      else{
        noFill();
        noStroke(188, 190, 194);
      }
  rect(size*i, size*j, size, size);//チェック枠線
    if((i + j) % 2 == 1){
    if(j < 3){
        fill(255, 17, 0);
     }//赤
     else if(j < 5) {
        noFill();
     }//丸なし
     else{
       　fill(3 ,3 ,3);
     }//黒
  ellipseMode(CORNER);
  ellipse(size*i, size*j, size, size);//丸
}
}
}
}
