## React Youtube Project

- 20210120

```
@media screen and (max-width: 768px) {
  /* モバイル画面状態 */
  .content {
    display: flex;
    flex-direction: column;
  }
}
```

- 20210121

### logo button click 機能追加

### 瀬能改善

.ref
[react memo](https://ko.reactjs.org/docs/react-api.html#reactmemo)

```
const MyComponent = React.memo(function MyComponent(props) {
  /* props를 사용하여 렌더링 */
});
```

video content は選択してもリーレンダリング(prop が変わること)する必要がない為、性能上、memo()で Component を包んで一回レンダリングしてから再使用する。

[react useCallBack](https://ko.reactjs.org/docs/hooks-reference.html#usecallback)

```
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

.searchBar の瀬能改善
function component は state と props が変わると定義している定義しているメンバー変数も変わるつまりリーレンダリングが発生する。  
子 component に callback を props として渡すと

- 20210122

### axios

.ref  
[axios](https://xn--xy1bk56a.run/axios/)

fetch -> axios に変換
fetch と違い json 変換自動にしてくれる。　　　
あらゆるブラウザーに互換する。

```
const httpClient = axios.create({
  baseURL : 'https://youtube.googleapis.com/youtube/v3',
  params : {key: process.env.REACT_APP_YOUTUBE_API_KEY},
});

const youtube = new Youtube(httpClient);
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube}/>
  </React.StrictMode>,
  document.getElementById("root")
);
```

index.js で
上記のコードを injection する。
