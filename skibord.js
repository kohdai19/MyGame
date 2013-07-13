enchant();

var playerIMG = ['images/ski/005.png','images/ski/000.png','images/ski/004.png'];

window.onload = function(){
    var game = new Game(320,320);
    game.fps = 16;
    game.preload(playerIMG);
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
                    this.image = game.assets[playerIMG[1]];
                    this.x -= 7;
                    this.y += 3;
                }else if(game.input.right){
                    this.image = game.assets[playerIMG[2]];
                    this.x += 7;
                    this.y += 3;
                }else{
                    this.image = game.assets[playerIMG[0]];
                    this.y += 7;
                }
            });
            
        }
    });

    game.onload = function(){
        Human();
    };

    game.start();
};
