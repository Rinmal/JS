$(function(){
  // idは.じゃなくて#を使う
  $('#back a').on('click',function(event){
    $('body,html').animate({
      scrollTop:0
      // 800ms(0.8s)かけて戻る
    },800);
    // 画面遷移を無効化
    event.preventDefault();
  });
});
