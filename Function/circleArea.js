/**
 * 円の面積を求める関数
 * @param {*} radius 半径 
 * @returns 面積
 */
function circleArea(radius)
{
    return radius * radius * 3.14
}

// 計算結果を表示
document.write(`<p>半径5cmの円の面積は${circleArea(5)}です</p>`);
document.write(`<p>半径10cmの円の面積は${circleArea(10)}です</p>`);
document.write(`<p>半径15cmの円の面積は${circleArea(15)}です</p>`);