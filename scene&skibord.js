enchant();

var IMG = ['images/ski/005.png','images/ski/000.png','images/ski/004.png','images/ski/snowMan.png','images/ski/tree.png','images/ski/stageClearCopy.jpg','images/ski/title.jpg','images/ski/操作説明.jpg','images/ski/white.jpg'];

var player = enchant.Class.create(enchant.Sprite,{
        initialize: function(){
            enchant.Sprite.call(this,50,53);
            this.x = Math.random()*270;
            this.y = 0;
            this.frame = 5;
        }
});
    //クラスを継承
    var Human = enchant.Class.create(player,{
        initialize: function(){
            player.call(this);
            game.rootScene.addChild(this);
            this.addEventListener(Event.ENTER_FRAME,function(){
                if(game.input.left){
                    this.image = game.assets[IMG[1]];
                    this.x -= 7;
                    this.y += 3;
                }else if(game.input.right){
                    this.image = game.assets[IMG[2]];
                    this.x += 7;
                    this.y += 3;
                }else{
                    this.image = game.assets[IMG[0]];
                    this.y += 7;
                }
            });
        }
    });
    
var backBG = enchant.Class.create(enchant.Sprite,{
        initialize: function(){
            enchant.Sprite.call(this,320,320);
            this.frame = 5;
            this.addEventListener(Event.ENTER_FRAME,function(){
                if(Human.y){
                    this.image = game.assets[IMG[5]];
                }
            });
            game.rootScene.addChild(this);
        }
});

    var barrier = enchant.Class.create(enchant.Sprite,{
        initialize: function(){
            enchant.Sprite.call(this,65,114);
            
            this.frame = 5;
        }
    });
    //barrierのクラスを継承
    var Tree = enchant.Class.create(barrier,{
        initialize: function(){
            barrier.call(this);
                this.x = Math.random()*270;
                this.y = Math.random()*270;
                this.image = game.assets[IMG[4]];
            game.rootScene.addChild(this);
        }
    });

window.onload = function(){
    /*var array = new Array(4);
    for(var i = 0; i < 4; i++){
        this.x = (Math.random()*5)*5;
        this.y = (Math.random()*3)*3;
        array[i] = ('this.x','this.y');
    }*/
    game = new Game(320,320);
    game.fps = 16;
    game.preload(IMG);
    game.tick = 0;

    
    game.onload = function(){
       /* new Human();
        new Tree();
        new Tree();
        new Tree();
        new Tree();
        new backBG();*/
        
        //背景の生成
        var bg = new Sprite(320, 320);
        bg.image = game.assets[IMG[6]];
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
        /*var bg = new Sprite(320, 320);
        bg.image = game.assets[IMG[6]];
        scene.addChild(bg);*/
        
        //メッセージの生成
        //scene.addChild(makeMessage("ここはシーン1です。"));
        
        //選択肢の生成
        /*var select0 = makeSelect("【シーン2へ移動】", 320 - 32 * 2);
        select0.addEventListener(Event.TOUCH_START, function(e) {
            game.pushScene(game.makeScene2());
        });
        scene.addChild(select0);
        var select1 = makeSelect("【戻る】", 320 - 32);
        select1.addEventListener(Event.TOUCH_START, function(e) {
            game.popScene();
        });
        scene.addChild(select1);
        return scene;*/
        var bg = new Sprite(320, 320);
        bg.image = game.assets[IMG[8]];
        game.rootScene.addChild(bg);
        new Human();
        new Tree();
        new Tree();
        new Tree();
        new Tree();
        new backBG();
    };
    
    //シーン2の生成
    game.makeScene2 = function() {
        var scene = new Scene();
        
        //背景の生成
        var bg = new Sprite(320, 320);
        bg.image = game.assets[IMG[7]];
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