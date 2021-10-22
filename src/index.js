// pwa (progressive web app) 웹앱으로 만들기 위한 방식
// npx create-react-app 프로젝트명 --template cra-template-pwa 로 프로젝트 생성때부터 추가 해야함
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
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
