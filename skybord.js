enchant();
var img ;

window.onload = function() {
    //ゲームオブジェクトの生成
    var game = new Game(320, 320);
    game.fps = 16; //1秒間に実行される

    //画像の読み込み
    game.preload('images/sky/005.png','images/sky/goal.png');

    //ロード完了時に呼ばれる
    game.onload = function() {
        //スプライトの生成
        var player   = new Sprite(50, 53);
        player.image = game.assets['images/sky/005.png'];
        player.tick  = 0;
        game.rootScene.addChild(player);
        
        //スプライトの定期処理
        player.addEventListener(Event.ENTER_FRAME, function() {
            //スプライトのフレームの指定
            player.tick++;
            
            this.y += 7;
        });
    };

    //ゲームの開始
    game.start();
};