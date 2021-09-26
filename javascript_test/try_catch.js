console.log('開始');
// 例外処理
try {
    console.log('処理 1');

    // ここで例外をおこす
    console.log('処理 2', null.toString());

    console.log('処理 3');
} catch(e) {
    // 例外発生時の処理
    console.log('例外がおきました');
    console.log(e);
}

console.log('終了');