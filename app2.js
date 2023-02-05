let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num*2;
  count = count + 1;
}
alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

let i;
let num1 = 0;

for(i = 1; i < 11; i++){
  num1 = num1 + i;
}
alert('1から10まで足し算した結果は' + num1 + 'です');