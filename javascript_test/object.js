const animal = {
    name: '',
    age: 0,
    getInf() {
        // メソッドの処理
        return `${this.name}(${this.age}歳)`;
    },
    get inf() {
        // Getterの処理
        return this.getInf();
    },
    set month(x) {
        // Setterの処理
        this.age = Math.trunc(x / 12);
    }
}

// プロパティを使い、値を変換
animal.name = 'タマ';

// Setterを使って、値を渡す
animal.month = 26;

// Getterを使い、値を得る
