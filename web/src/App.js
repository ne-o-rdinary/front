import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Test from "./Test";

const App = () => {
  // React.useEffect(() => {
  //   if (window.ReactNativeWebView) alert("Running inside WebView");
  //   else alert("This feature only works inside a React Native WebView.");
  // }, []);

  return (
    <div>
      <h1>React Web App Test</h1>
      <button
        onClick={() => {
          if (window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage("Hello from Web!");
          } else {
            alert("ReactNativeWebView not available.");
          }
        }}
      >
        Send to React Native
      </button>
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
