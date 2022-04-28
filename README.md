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
#### `TodoTemplate` : 화면을 가운데 정렬시켜 주며, 앱 타이틀(Todo List)을 보여 준다.

![0.jpg](/img/0.JPG)

#### `TodoInsert` : 새로운 항목을 입력하고 추가 할 수 있는 컴포넌트이다.
![2.jpg](/img/2.JPG)

#### `TodoListItem` : 각 할 일 항목에 대한 정보를 보여 주는 컴포넌트이다. 
![3.jpg](/img/3.JPG)

#### `TodoList` : todos 배열을 props로 받아 온 후, 이를 배열 내장 함수 map을 사용해서 여러 개의 TodoListItem 컴포넌트로 변환하여 보여준다. 
![4.jpg](/img/4.JPG)
