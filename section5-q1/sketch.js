// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);//背景　白
  balloon("I love keyakizaka46");
}

function balloon(t){
  let w = textWidth(t);//w＝テキストの長さ
  let h = textAscent() + textDescent();
  //h＝最も上に飛び出してる上限+最も下に突き抜けてる下限
  let p = 2;
  fill(0);//吹き出し色　黒
   rect(0, 0, w + p * 2, h + p * 2);
  //吹き出し　始点(0, 0)　幅テキスト長さ+4　高さh+4
　triangle(w + p * 2, h + p * 2, w + p * 2, (h + p * 2)/ 2, (w + p * 2)+(h + p * 2) / 2, (h + p * 2)*3 / 4);
  //吹き出し尻尾
  fill(255);//文字色　白
   text(t, p, h + p);//tを幅pに，高さh+2（吹き出し幅の半分）に
}
