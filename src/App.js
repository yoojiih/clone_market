import React from 'react';
import './App.css';
// router 3 - 라우트 태그 import 해 옴
import { Route , Switch } from 'react-router-dom';
// router 5 - 사용할 component 불러오기
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import PopularPage from "./components/PopularPage/PopularPage";
import LifePage from "./components/LifePage/LifePage";
import ShopPage from "./components/ShopPage/ShopPage";
import DirectPage from "./components/DirectPage/DirectPage";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />

      <LandingPage />
      {/* router 4 - 원하는 곳에 <Route><Route/>태그 <Route>안에 path와 path 방문시 보여줄 HTML 작성
          형식 : <Route path="/경로"></Route>*/}
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/popular" component={PopularPage} />
          <Route exact path="/life" component={LifePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/direct" component={DirectPage} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
