// 年齢
let age = 16;

// 会員がどうか
let isMember = true

// 結果
let result = null;

// 割引の対象かの判定
if (age <= 15) {
    result = '800円'
} else if (isMember) {
    result = '1000円'
} else {
    result = '1800円'
}

// 結果を表示
document.write(result);