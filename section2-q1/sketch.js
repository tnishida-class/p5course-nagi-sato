// 小手調べ
function setup(){
noFill();
  for(let i = 0; i < 10; i++){//繰り返しアピール
    if(i < 5){
        stroke(0, 0, 255);
    }//真ん中青
  else{
        stroke(255, 0, 0);
    }//外側赤
ellipse(50, 50, i * 10 + 10);
}//円
}
