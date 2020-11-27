# vanilaJS

JS에서 queryselector("")느 그 노드의 첫번째 자식을 반환해준다.

null - > undefined 와 같아. 존재하지(정의되지) 않으면 사용할 수 없는 것이다.

const title = document.querySelector(".title");

function handleMenter(){
    실행내용
}

title.addEventListener("mouseenter",handleMenter);   -> mouseenter이라는 이벤트가 발생할때만 handleMenter이라는 함수가 실행된다.
title.addEventListener("mouseenter",handleMenter()); -> 새로고침 하자 마자 바로 handleMenter이라는 함수가 실행된다.


tailwindcss 설치방법 


1.node js 설치
2.npm init - > modules등등 생김
3. npm install tailwindcss postcss autoprefixer
4. postcss.config.js 파일 만들어서 안에 작성
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}

npx tailwindcss init 한후 tailwind.config.js에 
  purge: [
     './src/**/*.html',
     './src/**/*.js',
   ],
와 같이 넣어 줘도 된다.

소스파일을 빌드시킬 거라면 파일 안에
@tailwind base;
@tailwind components;
@tailwind utilities; 
를 적는다.

npx tailwindcss-cli@latest build -o (tailwind.css-> css파일 만들고 싶은 경로)

소스파일인
@tailwind base;
@tailwind components;

.btn {
  @apply px-4 py-2 bg-blue-600 text-white rounded;
}

@tailwind utilities;

와 같이 적용시키고픈 것이 아직 나오지 않았을때 사용하면 좋다.

npx tailwindcss-cli@latest build ./src/tailwind.css -o ./dist/tailwind.css

-o를 기준으로 앞에는 소스파일 경로, 뒤에는 css넣고싶은 경로 