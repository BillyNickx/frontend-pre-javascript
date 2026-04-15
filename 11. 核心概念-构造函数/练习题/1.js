/*
利用构造函数创建一副扑克牌
*/

// 创建一张扑克牌
// number: 1-13 表示 A-K，14/15 表示大小王
// color: 1-4 表示四种花色，大小王时传 0
function Poker(number, color) {
    this.number = number;
    this.color = color;

    // 将当前扑克牌转换为可读字符串
    this.getString = function () {
        // 大小王不需要拼接花色
        if (this.number === 14) {
            return 'joker';
        }
        if (this.number === 15) {
            return 'JOKER';
        }

        const colors = ['♠', '♥', '♣', '♦'];
        const numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K',];

        return colors[this.color - 1] + numbers[this.number - 1];
    };

    // 输出当前牌面
    this.print = function () {
        console.log(this.getString());
    };
}

// 创建一副扑克牌
function Deck() {
    this.pokers = [];

    // 生成普通的 52 张牌
    for (var i = 1; i <= 13; i++) {
        for (var j = 1; j <= 4; j++) {
            this.pokers.push(new Poker(i, j));
        }
    }

    // 再补上大小王
    this.pokers.push(new Poker(14, 0));
    this.pokers.push(new Poker(15, 0));

    // 按顺序打印整副牌
    this.print = function () {
        for (var i = 0; i < this.pokers.length; i++) {
            this.pokers[i].print();
        }
    };
}

var deck = new Deck();
deck.print();
