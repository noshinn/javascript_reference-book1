// 価格カードを得る関数
function getPriceCard(price) {
    // 戻り値用の関数を作成
    let res ='';

    // 条件分岐
    if (price < 1000) {
        res = price + '円';
    } else if (price < 10000){
        const salePrice = Math.trunc(price * 0.9);
        res = '特価' + price + '円 -> ' + salePrice + '円';
    } else {
        const salePrice = Math.trunc(price * 0.8);
        res = '大特価 ' + price + '円 -> ' + salePrice + '円';
    }

    return res;
}

console.log(getPriceCard(500));
console.log(getPriceCard(1000));
console.log(getPriceCard(5000));
console.log(getPriceCard(10000));
console.log(getPriceCard(15000));