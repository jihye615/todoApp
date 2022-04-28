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



![1.jpg](/img/1.JPG)
