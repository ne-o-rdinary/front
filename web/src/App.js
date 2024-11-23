import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Main'
import Test from './Test'
import { GlobalStyle } from './styles/global-style'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/test' element={<Test />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
