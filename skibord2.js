enchant();

var barrierIMG = ['images/ski/snowMan.png','images/ski/tree.png'];

window.onload = function(){
    var game = new Game(320,320);
    game.fps = 16;
    game.preload(barrierIMG);
    game.preload('images/ski/005.png','images/ski/004.png','images/ski/000.png');
    game.tick = 0;
    game.onload = function(){
        //Tree();
        var player = new Sprite(50,53);
        game.rootScene.addChild(this);
        this.addEventListener(Event.ENTER_FRAME,function(){
            if(game.input.left){
                this.image = game.assets('images/ski/000.png');
                this.x -= 7;
                this.y += 3;
            }else if(game.input.right){
                this.image = game.assets('images/ski/004.png');
                this.x += 7;
                this.y += 3;
            }else{
                this.image = game.assets('images/ski/005.png');
                this.y += 7;
            }
        });
    }
    
    var barrier = enchant.Class.create(enchant.Sprite,{
        initialize: function(){
            enchant.Sprite.call(this,65,114);
            this.x = Math.random()*270;
            this.y = Math.random()*270;
            this.frame = 5;
        }
    });
    //barrierのクラスを継承
    var Tree = enchant.Class.create(barrier,{
        initialize: function(){
            this.image = game.assets[barrierIMG[1]];
            barrier.call(this);
            game.rootScene.addChild(this);
            
        }
    });
    
    game.start();
};
