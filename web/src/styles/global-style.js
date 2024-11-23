import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;  
    width: 100%;   
  }

  body {
    display: flex;            
    justify-content: center;  
    align-items: center;      
    background-color: #fff;
    overflow-y: hidden;   
  }

  #root {
    width: 100%;
    height: 100%;
  }


  // 이미지 선택, 드래그 방지
  img {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}
`;
