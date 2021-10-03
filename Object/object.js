/**
 * ゲームのオブジェクト
 */
let game = {
    /**
     * ゲームをスタートした時刻
     */
    startTime: null, 

    /**
     * 表示エリア
     */
    displayArea: document.getElementById('display-area'),

    /**
    * ゲームスタート時の処理を行う関数
    */
    start: function() 
    {
        // ゲームのスタート時刻を取得
        game.startTime = Date.now();

        // 何かキーが押されたらストップする
        document.body.onkeydown = game.stop;
    },

    /**
    * ストップ処理を行う関数
    */
    stop: function () 
    {
        // スタートした時刻を取得
        let currentTime = Date.now();

        // かかった時刻を計算
        let seconds = (currentTime - game.startTime) / 1000;

        // 判定処理
        if (9.5 <= seconds && seconds <= 10.5) {
            game.displayArea.innerText = `${seconds}秒でした。すごい！`;
        } else {
            game.displayArea.innerText = `${seconds}秒でした。残念！`;
        }
    }

};

// ゲームの実行処理
if (confirm('OKを押して10秒だと思ったら何かキーを押してください'))
{
   game.start(); 
}