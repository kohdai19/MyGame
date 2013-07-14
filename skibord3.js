enchant();

var IMG = ['images/ski/005.png','images/ski/000.png','images/ski/004.png','images/ski/snowMan.png','images/ski/tree.png','images/ski/stageClearCopy.jpg'];

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
        new Human();
        new Tree();
        new Tree();
        new Tree();
        new Tree();
        new backBG();
    };

    game.start();
};
