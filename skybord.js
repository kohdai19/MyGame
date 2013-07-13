enchant();
window.onload = function() {
    //ゲームオブジェクトの生成
    var game = new Game(320, 320);
    game.fps = 16; //1秒間に実行される

    //画像の読み込み
    game.preload('images/005のコピー.png');

    //ロード完了時に呼ばれる
    game.onload = function() {
        //スプライトの生成
        var player   = new Sprite(50, 53);
        player.image = game.assets['images/005のコピー.png'];
        player.tick  = 0;
        player.anim  = [10, 11, 10, 12];
        game.rootScene.addChild(player);
        
        //スプライトの定期処理
        player.addEventListener(Event.ENTER_FRAME, function() {
            //スプライトのフレームの指定
            player.tick++;
            player.frame = player.anim[player.tick % 4];
        });
    };

    //ゲームの開始
    game.start();
};