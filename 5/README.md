題目中，handleAddCount 方法連續調用了三次 this.setState，希望每次都能將 count 增加 1。但是 this.setState 實際上只會執行一次更新，因為 React 會將這些更新合併。
https://legacy.reactjs.org/docs/react-component.html 文件中有提到：
>setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses.

>Think of setState() as a request rather than an immediate command to update the component. For better perceived performance, React may delay it, and then update several components in a single pass. In the rare case that you need to force the DOM update to be applied synchronously, you may wrap it in flushSync, but this may hurt performance.

如果要確定每次 this.setState 都是取得最新的狀態後更新狀態，應該將回調函數傳入 this.setState 從回調的參數拿到最新的狀態後更新狀態
```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));

```