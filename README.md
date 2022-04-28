# 프로젝트 준비
### 터미널에서 실행한다.
```
npm install -g yarn
yarn create react-app todoApp
cd todoApp
yarn start
```

#### 필요한 컴포넌트 설치
```
yarn add styled-components react-icons
yarn add classnames
```

### root폴더에 `.prettierrc`파일을 생성한다.
```json
{
    "arrowParens": "always",
    "semi": true,
    "singleQuote": true,
    "useTabs": false,
    "trailingComma": "all",
    "tabWidth": 2,
    "printWidth": 80
}
```
### root폴더에 `jsconfig.json` 파일을 생성하여 import를 위한 절대경로 설정을 한다.
```json
{
    "compilerOptions": {
        "target": "es6",
        "baseUrl": "src"
    },
    "include": ["src"]
}
```
### `index.css` 수정하고 `index.js`에 import 한다.  import `'index.css'`;
```css
<!-- 구글폰트 -->
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');  
@import url('https://fonts.googleapis.com/css2?family=Gamja+Flower&display=swap');
body {
  margin: 0;
  padding: 0;
  background: #e7e5f3;
}
```
### `App.js`컴포넌트를 기존에 있는 내용을 삭제하고 `rsc`  탭을 입력하여 기본 명령어가 나오게 설정한다.
```javascript
import React from 'react';

const App = () => {
  return (
    <div>
      todoApp
    </div>
  );
};

export default App;
```
---------------------
# ul구상하기
### `TodoTemplate` : 화면을 가운데 정렬시켜 주며, 앱 타이틀(Todo List)을 보여 준다.

![0.jpg](/img/0.JPG)

### `TodoInsert` : 새로운 항목을 입력하고 추가 할 수 있는 컴포넌트이다.

![2.jpg](/img/2.jpg)

### `TodoListItem` : 각 할 일 항목에 대한 정보를 보여 주는 컴포넌트이다. 

![3.jpg](/img/3.jpg)

### `TodoList` : todos 배열을 props로 받아 온 후, 이를 배열 내장 함수 map을 사용해서 여러 개의 TodoListItem 컴포넌트로 변환하여 보여준다. 

![4.jpg](/img/4.jpg)

# ul 제작하기
## `src`폴더 내에 `components` 폴더를 생성하고 다음과 같은 컴포넌트를 생성한다.

### `TodoTemplate.js` 컴포넌트 만들기
```javascript 
import React from 'react';
import styled from "styled-components";

const TodoTemplate = ({children}) => {
    return (
        <TodoWrapper>
            <AppTile>Todo List</AppTile>
            <Content>{children}</Content>
        </TodoWrapper>
    );
};
const TodoWrapper = styled.div`
    width: 512px;
    margin: 6rem auto 0;
    border-radius: 4px;
    overflow: hidden;
`;

const AppTile = styled.div`
    background: #e7e5f3;
    color: #412e63;
    font-size: 40px;
    height: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Permanent Marker', cursive;
`;

const Content = styled.div`
    background: #e7e5f3;
`;

export default TodoTemplate;
```
### 위 컴포넌트를 App.js에 불러와 렌더링 한다
```javascript
import TodoTemplate from 'components/TodoTemplate';
```
### `TodoInsert.js` 컴포넌트 만들기
* `react-icon`s을 사용하기 위해 `import {MdAdd} from "react-icons/md";` import를 상단에 선언한다.

- [https://react-icons.github.io/react-icons/search?q=mdadd](https://react-icons.github.io/react-icons/search?q=mdadd)

##### TodoInsert 컴포넌트에서 input에 입력하는 값을 관리할 수 있도록 useState를 사용하여 value 상태를 정의 하여 보자. 추가로 input에 넣어 줄 onChange 함수도 작성해 보자. 
이 과정에서 렌더링될 때마다 함수를 새로 만드는 것이 아니라 useCallback을 사용하여 함수를 재 사용하는 방법으로 제작하여 보자.

#### `onSubmit` 이벤트 설정하기
App.js에서 TodoInsert에 넣어 준 onInsert함수에 현재 useState를 통해 관리하고 있는 value 값을 파라미터로 넣어서 호출한다.


```javascript
import React, {useCallback, useState} from 'react';
import {MdAdd} from "react-icons/md";
import styled from "styled-components";

const Todoinsert = ({onInsert}) => {
    const[value, setValue] = useState ("");

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');
        e.preventDefault();
    }, [onInsert, value]);
    
    return (
        <TodoInsertWrapper onSubmit={onSubmit}>
            <input 
                value={value} 
                type="text" 
                placeholder='할 일을 입력하세요' onChange={onChange} 
            />
            <button type='submit'>
                <MdAdd />
            </button>
            
        </TodoInsertWrapper>
    );
};

const TodoInsertWrapper = styled.form`
  display: flex;
  background: #7b4a8b;
  input{
    background: none;
    outline:none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: #fff;
    &::placeholder {
        color: #fff;
        font-family: 'Gamja Flower', cursive;
        text-indent: 15px;
    }
    flex: 1;
  }
  button{
    background: #7a71a8;
    outline: none;
    border: none;
    color: #fff;
    padding:0 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor:pointer;
    transition: 0.1s background ease-in;
    &:hover{
      background: #7a80a1;
    }
  }
`;

export default Todoinsert;
```

### 위 컴포넌트를 App.js에 불러와 렌더링 한다
```javascript
import TodoInsert from 'components/TodoInsert';
```
### `TodoListItem.js` 컴포넌트 만들기

```javascript
import React from 'react';
import styled from 'styled-components';
import {
  MdCheckCircle,
  MdOutlineRadioButtonUnchecked,
  MdRemoveCircleOutline
} from 'react-icons/md';
import cn from 'classnames';

const TodoListItem = ({todo, onRemove, onToggle}) => {
    const {id, text, checked} = todo;
  return (
    <TodoItemWrapper>
      <CheckBox className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
        {checked ? <MdCheckCircle /> : <MdOutlineRadioButtonUnchecked />}
        <div className="text">{text}</div>
      </CheckBox>
     <Remove>
        <MdRemoveCircleOutline />
      </Remove
    </TodoItemWrapper>
  );
};

const TodoItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  font-family: 'Gamja Flower', cursive;
  font-size: 20px;
  &:nth-child(even) {
    background: #f8f7fc;
  }
  & + & {
    border-top: 2px dashed #dee2e6;
  }
`;

const CheckBox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
  .text {
    margin-left: 0.5rem;
    flex: 1;
  }
  &.checked {
    svg {
      color: #5e22d0;
    }
    .text {
      color: #adb5bd;
      text-decoration: line-through #ff6b6b;
    }
  }
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

export default TodoListItem;
```
### `TodoList.js` 컴포넌트 만들기
todos 배열 안에는 id, text, checked 값이 포함 되어 있다. 이 배열은 TodoList에 props전달 해야 한다.
TodoList에서 이 값을 받아 온 후 TodoItem으로 변환하여 렌더링하도록 설정한다.
props로 받아온 todos 배열을 배열 내장 함수 map을 통해 TodoListItem으로 이루어진 배열로 변환하여 렌더링해 준다.
### map을 사용하여 컴포넌트로 변환할 때는 key props를 전달해줘야 한다

```javascript
import React from 'react';
import TodoListItem from 'components/TodoListItem';
import styled from 'styled-components';

const TodoList = ({todos}) => {
    
  return (
    <TodoListWrapper>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </TodoListWrapper>
  );
};

const TodoListWrapper = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow: auto;
`;

export default TodoList;
```

### 위 컴포넌트를 `App.js`에 불러와 렌더링 한다.
```javascript
import TodoList from 'components/TodoList';
```

----------------------
# 기능 구현하기
#### 모두 App 컴포넌트에서 관리한다.
### `App 컴포넌트에서 todos 배열에 새 객체를 추가하는 onInsert 함수를 만들어 보자.
이 함수에서는 새로운 객체를 만들 때마다 id 값에 1개씩 추가할 수 있도록 만든다.
id 값은 useRef를 사용하여 변수값이 유지가 될 수 있도록 만든다.
onInsert 함수의 컴포넌트 성능을 아낄 수 있도록 useCallback으로 만들고 해당 함수를 props 설정해준다.



```javascript
import React, { useState, useCallback, useRef } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const[todos, setTodos] = useState([
   
  ]);

  const nextId = useRef(4);
  const onInsert = useCallback(text => {
    const todo = {
      id : nextId.current,
      text,
      checked : false
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  }, [todos]);

  return (
     <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};


export default App;

```

-------------------
# 지우기 기능 구현하기
### `App.js`에서 todos 배열에서 id로 항목 지우기
위에서 설명한 filter 함수를 사용하여 onRemove 함수를 만들어 보자. 
이 함수를 만들고 props로 전달하여 준다.

```javascript
import React, { useState, useCallback, useRef } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const[todos, setTodos] = useState([
   
  ]);

  const nextId = useRef(4);
  const onInsert = useCallback(text => {
    const todo = {
      id : nextId.current,
      text,
      checked : false
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  }, [todos]);

<!-- 항목지우기 -->
  const onRemove = useCallback(id => {
    setTodos(todos.filter(todo => todo.id !==id));
  }, [todos]);


  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/> 
      <TodoList todos={todos} onRemove={onRemove}/>
    </TodoTemplate>
  );
};


export default App;
```
### `TodoList.js`에서 삭제한 함수 호출하기
```javascript
const TodoList = ({ todos, onRemove }) => {
  return (
    <TodoListWrapper>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
```
### `TodoListItem.js` 컴포넌트 수정
```javascript
const TodoListItem = ({ todo, onRemove }) => {
  const { id, text, checked } = todo;

  return (
    <TodoItemWrapper>
      <CheckBox className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </CheckBox>
      <Remove onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </Remove>
    </TodoItemWrapper>
  );
};

export default TodoListItem;
```
-----------------
# 수정기능구현하기
#### `App.js` 컴포넌트 수정
```javascript
  //항목 지우기
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
```
### `TodoList.js` 컴포넌트 수정
```javascript
const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <TodoListWrapper>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
```
### TodoListItem.js 컴포넌트 수정
```javascript
const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <TodoItemWrapper>
      <CheckBox
        className={cn('checkbox', { checked })}
        onClick={() => onToggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </CheckBox>
      <Remove onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </Remove>
    </TodoItemWrapper>
  );
};

export default TodoListItem;
```







