## Interface

在 TypeScript 中 Interface 用來進行類型檢查，下面用 Interface 描述物件應該有哪些屬性及其類型

```ts
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

function greet(person: Person) {
  console.log(`Hello, ${person.firstName} ${person.lastName}`);
}

let user = { firstName: "John", lastName: "Doe", age: 25 };
greet(user);
```

## Enum

用來定義一組命名常數。它們可以用來表示一組相關的值，並提高程式碼的可讀性。

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;
console.log(move); // 輸出: 0
```

在這個範例中，Direction 枚舉定義了四個方向：Up、Down、Left 和 Right。這些方向被賦予自動遞增的數字值（從 0 開始）。我們可以使用枚舉來設定變數的值，這樣代碼會更加清晰。
