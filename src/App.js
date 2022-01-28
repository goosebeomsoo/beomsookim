import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./router/Home";
import Works from "./router/Works";

function App() {
    return (
        <div id="wrap">
            <Navigation />
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/Works" element={<Works/>} />
            </Routes>
            <Footer />
        </div>
    )
    /* 
    1. Home 부분에서 어떻게 임팩트 줄건지
    2. About에 채워놓을 자기소개
    3. Portfolio에서는 elobe forest 하나만, elobe forest 구성 어떻게 할건지 생각해서 섹션 3개 정도 해서 진행
    4. Contact는 하지 말기
    */
}

export default App;