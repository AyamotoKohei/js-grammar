// 誕生日
let myBirthTime = new Date(1999, 0, 4, 0, 0);

/**
 * 生まれてからの経過時間を表示する関数
 */
function updateParagraph() 
{
    // 現在の日時の取得
    let now = new Date();

    // 現在の日時から誕生日の日時を引いたミリ秒を1000で割って、秒に変換する
    let seconds = (now.getTime() - myBirthTime.getTime()) / 1000;

    // 文字列を表示
    //document.getElementById('birth-time').innerText = '生まれてから' + seconds + '秒経過';
    document.getElementById('birth-time').innerText = `生まれてから${seconds}秒経過`;
}

// 50ミリ秒ごとに表示する
setInterval(updateParagraph, 50);