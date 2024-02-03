function taskA() {
  console.log("タスクAを実行 at " + Date.now());
}
function taskB() {
  console.log("タスクBを実行 at " + Date.now());
}
function taskAsync() {
  console.log("非同期のタスクを実行 at " + Date.now());
}
// 指定した`timeout`ミリ秒経過するまで同期的にブロックする関数
function blockTime(timeout) {
  const startTime = Date.now();
  while (true) {
      const diffTime = Date.now() - startTime;
      if (diffTime >= timeout) {
          return; // 指定時間経過したら関数の実行を終了
      }
  }
}

const startTime = Date.now();
taskA();
// 10ミリ秒後にコールバック関数を呼び出すようにタイマーに登録する
setTimeout(() => {
  const endTime = Date.now();
  taskAsync();
  console.log(`非同期処理のコールバックが呼ばれるまで${endTime - startTime}ミリ秒かかりました`);
}, 10);
blockTime(1000); // 1秒間処理をブロックする
taskB();
