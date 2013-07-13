//コマンド＋Rでリロード


/*var i;
var sumWhile;

sumWhile = 0;
i = 1;
while(i <= 1000){
    sumWhile = sumWhile+i;
    i++;  //iに1を足す
}
confirm(sumWhile);


function test(){
    
    var devices = ["iPhone","Android","パソコン"];
    
    for( var i = 0; i < devices.length; i++){
        console.log(i+"回目："+devices[i]);
    }
}
test();*/

enchant();
window.onload = function(){
    var game = new Game(320,320);
    game.onload = function(){
    ;}
    game.start();
}