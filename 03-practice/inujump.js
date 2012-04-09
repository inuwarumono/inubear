enchant();

window.onload = function() {

  // ここにコード書くですよ
  var game = new Game(320,320);
  var bear = new Sprite(32,32);

  game.preload('./images/chara1.gif');

  game.onload = function() {

    bear.image = game.assets['./images/chara1.gif'];
    bear.frame = 4;
    bear.dx = 2;	// くま移動量のX成分初期値
    bear.dy = 1;	// くま移動量のY成分初期値
    bear.move = 2;	// 1フレームあたりの移動距離

    bear.addEventListener(Event.ENTER_FRAME, function() {

      if (this.x > game.width - bear.width || this.x < 0) {
        this.dx *= -1;		// くま移動のX成分反転
        this.scaleX *= -1;	// くま画像のX軸反転
      };
      if (this.y > game.height - bear.height || this.y < 0) {
        this.dy *= -1;		// くま移動のY成分反転
      };

      // くま移動
      this.x += bear.move * this.dx;
      this.y += bear.move * this.dy;

    });

    this.rootScene.addChild(bear);

    // 画面タッチ時
    this.rootScene.addEventListener(Event.TOUCH_START, function(e){
      // クリック位置がくまの中心にくるように位置の差を取る
      var _dx = (e.x - bear.width / 2 ) - bear.x;
      var _dy = (e.y - bear.height / 2 )- bear.y;
      // 1フレームあたりの移動距離がbear.moveになるように
      var _dd = Math.sqrt(_dx * _dx + _dy * _dy);
      bear.dx = bear.move / _dd * _dx;
      bear.dy = bear.move / _dd * _dy;
      // X成分の正負をそのままに値を1にしてscaleX設定に使う
      bear.scaleX = bear.dx / Math.abs(bear.dx);
    });
    this.rootScene.backgroundColor = '#AAAAAA';

  };

  game.start();

};
