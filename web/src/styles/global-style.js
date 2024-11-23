import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    height: 100vh;

  max-width: 430px;
  min-width: 400px;

  margin: 0 auto;

  border: 1px solid red;
  
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
`
