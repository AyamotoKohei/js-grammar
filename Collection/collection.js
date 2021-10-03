/*
// 配列
let classes = ['A組', 'B組', 'C組', 'D組'];


// 文字列の作成
for (let grade = 1; grade < 4; grade++) 
{
    for (let i = 0; i < classes.length; i++) 
    {
        document.write('<p>' + grade + '年' + classes[i] + '</p>');
    }
}
*/

// 配列
let anArray = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];

// 文字列の生成
for (let i = 0; i < anArray.length; i++) 
{
    for (let j = 0; j < anArray.length; j++)
    {
        document.write('<p>' + anArray[i] + anArray[j] + '</p>');
    }
}
