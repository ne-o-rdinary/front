import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Test from "./Test";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/test" element={<Test />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
