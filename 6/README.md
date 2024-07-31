```jsx
// 防抖函數的實現
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    // 綁定事件處理函數到 this，並進行防抖處理
    this.handleOnChange = debounce(this.handleOnChange.bind(this), 300);
    this.state = { query: '' };
  }

  // 事件處理函數
  handleOnChange(event) {
    // 更新狀態並執行相應的邏輯
    this.setState({ query: event.target.value });
    console.log("Query:", this.state.query);
  }

  render() {
    return (
      <input type="search" name="p" onChange={this.handleOnChange} />
    );
  }
}

ReactDOM.render(<SearchBox />, document.getElementById('root'));
```
Debounce 用於避免在極短的時間內執行過於頻繁的計算和網絡請求，以上面的例子為例： debounce 函數在 input change 的時候會把 timeout 計時器歸零並重新計時，當計時到達 300 毫秒就觸發傳進來的 func 函數