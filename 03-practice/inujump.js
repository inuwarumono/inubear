enchant();

window.onload = function() {

  // ここにコード書くですよ
  var game = new Game(320,320);
  var bear = new Sprite(32,32);

  game.preload('./images/chara1.gif');

  game.onload = function() {

    bear.image = game.assets['./images/chara1.gif'];
    bear.frame = 4;

    bear.x = 150;
    bear.y = 200;
    bear.jump_h = 50;

    bear.addEventListener(Event.ENTER_FRAME, function() {

      // くま移動

    });

    this.rootScene.addChild(bear);

    // 画面タッチ時
    this.rootScene.addEventListener(Event.TOUCH_START, function(e){

    });
    this.rootScene.backgroundColor = '#AAAAAA';

  };

  game.start();

};
