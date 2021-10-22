// pwa (progressive web app) 웹앱으로 만들기 위한 방식
// npx create-react-app 프로젝트명 --template cra-template-pwa 로 프로젝트 생성때부터 추가 해야함
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

// <router 1 - npm install react-router-dom & import>

//<React Router 특징> - 여러가지 페이지 만들고 싶을 때 이용
// 1. 앞으로 가기 뒤로가기 작동 가능
// 2. 페이지마다 다른 html 파일이 아님 (index.html 하나만 있음)
// 3. html 내부의 내용을 갈아치워서 다른페이지처럼 보여주는 것
//    (1) / 여기로 접속시 메인페이지 보여줌
//    (2) /detail로 접속시 상세페이지 보여줌

// HashRouter vs BrowserRouter 
// hash : url맨뒤 #가 붙고 #뒤에 붙은 것들은 절대 서버로 요청되지 않아 위험하지 않음 즉 라우팅 안전하게 가능 
// browser : #없이 깔끔하고 /abc접속하면 abc보여달라고 하면 리액트가 알아서 해줌 but 서버에게 라우팅 요청할수도 있어서 위험해 서버에서 서버라우팅 방지하는 api 작성 필수 

import {
  BrowserRouter as Router,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* router 2 - App.js 파일에서 Route 만들어 페이지 나누기 (메인, 상품 상세페이지 등등) */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// PWA 설치시 추가되는 부분 -> Service Workers를 사용한 캐싱 덕분에 앱을 설치한 후에 로딩 시간이 줄어들어 소중한 데이터와 시간을 절약.
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
