# [クイックスタート](https://ja.react.dev/learn)

## export

JSのexportについて

```js
const k = 12;
export default k;

export let j = 13;
```

```js
// デフォルトexportはどんな名前でも呼び出せる
// 名前付きエクスポートはその名前で呼び出す必要がある
import hoge, { j } from "./test.js";

console.log(hoge);
console.log(j);
```
