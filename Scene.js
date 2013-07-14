enchant();
window.onload = function() {
    //ゲームオブジェクトの生成
    var game = new Game(320, 320);
    game.fps = 16;

    //画像の読み込み
    game.preload('images/ski/title.jpg','images/ski/操作説明.jpg');

    //ロード完了時に呼ばれる
    game.onload = function() {
        //背景の生成
        var bg = new Sprite(320, 320);
        bg.image = game.assets['images/ski/title.jpg'];
        game.rootScene.addChild(bg);
        
        //メッセージの生成
        //game.rootScene.addChild(makeMessage("ようこそ"));
        
        //選択肢の生成
        var select0=makeSelect("ゲーム画面へ", 320 - 32 * 2);
        select0.addEventListener(Event.TOUCH_START, function(e) {
            game.pushScene(game.makeScene1());
        });
        var select1=makeSelect("操作説明画面へ", 320 - 32);
        select1.addEventListener(Event.TOUCH_START, function(e) {
            game.pushScene(game.makeScene2());
        });
        game.rootScene.addChild(select0);
        game.rootScene.addChild(select1);
        return scene;
    };
    
    //シーン1の生成
    game.makeScene1 = function() {
        var scene = new Scene();
        
        //背景の生成
        var bg = new Sprite(320, 320);
        bg.image = game.assets['images/ski/title.jpg'];
        scene.addChild(bg);
        
        //メッセージの生成
        //scene.addChild(makeMessage("ここはシーン1です。"));
        
        //選択肢の生成
        var select0 = makeSelect("【シーン2へ移動】", 320 - 32 * 2);
        select0.addEventListener(Event.TOUCH_START, function(e) {
            game.pushScene(game.makeScene2());            
        });
        scene.addChild(select0);
        var select1 = makeSelect("【戻る】", 320 - 32);
        select1.addEventListener(Event.TOUCH_START, function(e) {
            game.popScene();            
        });
        scene.addChild(select1);
        return scene;
    };
    
    //シーン2の生成
    game.makeScene2 = function() {
        var scene = new Scene();
        
        //背景の生成
        var bg = new Sprite(320, 320);
        bg.image = game.assets['images/ski/操作説明.jpg'];
        scene.addChild(bg);
        
        //ラベルの生成
        //scene.addChild(makeMessage("ここはシーン2です。"));
        var select0 = makeSelect("【戻る】", 320 - 32 * 2);
        select0.addEventListener(Event.TOUCH_START, function(e) {
            game.popScene();
        });
        scene.addChild(select0);
        return scene;
    };
    
    //ゲームの開始
    game.start();
};



//選択肢の生成
function makeSelect(text, y) {
    var label = new Label(text);
    label.font  = "16px monospace";
    label.color = "rgb(255,200,0)";
    label.y　= y;
    label.width = 320;
    return label;
}