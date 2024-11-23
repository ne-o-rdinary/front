import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Test from "./Test";
import { GlobalStyle } from "./styles/global-style";
import QuestionInput from "./components/QuestionInput";
import RandomQuestion from "./components/RandomQuestion";
import Option from "./option";
import Random from "./Random";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="/option" element={<Option />}></Route>
          <Route path="/randombox" element={<Random />}></Route>{" "}
          <Route path="/question-input" element={<QuestionInput />}></Route>
          <Route path="/random-question" element={<RandomQuestion />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
