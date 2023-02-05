//memo的な何か
var str = "webcamp"

function foo(){
  console.log(str) 　//webcampが入ってる
  var y = "hello"
}

foo()  //webcampが表示される
console.log(y)  //スコープ外だから×
＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

var str = "webcamp"

function foo(){
  console.log(str)
  var str = "dmm webcamp"　//関数内のどこでも宣言できるけど、全て関数の先頭で宣言されたものとみなされる
  console.log(str)
}

foo()

↓こうなる

var str = "webcamp"

function foo() {
  var str  //var str = "dmm webcamp"が巻き上げられて先頭に来るけど、巻き上げられるのはvar strのみで= "webcamp"は巻き上げられない
  console.log(str)  //上のvar strが代入されるけど変数の中身がないからundefinedになる
  str = "dmm webcamp"
  console.log(str)  //再代入された"dmm web camp"が入る
}

foo()  //1つ目のconsole.logはundefined、2つ目のconsole.logはdmm web campが表示される
