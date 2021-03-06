enchant();

var IMG = ['images/ski/005.png','images/ski/000.png','images/ski/004.png','images/ski/snowMan.png','images/ski/tree.png'];
window.onload = function(){
    var game = new Game(320,320);
    game.fps = 16;
    game.preload(IMG);
    game.tick = 0;


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
            for(var i = 0; i < 5; i++){
                this.x = Math.random()*270;
                this.y = Math.random()*270;
                this.image = game.assets[IMG[4]];
                game.rootScene.addChild(this);
            }
            game.rootScene.addChild(this);
        }
    });
    

    game.onload = function(){
        Human();
        Tree();
    };

    game.start();
};
