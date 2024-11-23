import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Main'
import Test from './Test'
import { GlobalStyle } from './styles/global-style'
import Share from './Share'
import Option from './option'
import Random from './Random'
import RandomQuestion from './components/RandomQuestion'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/test' element={<Test />}></Route>
          <Route path='/random-question' element={<RandomQuestion />}></Route>
          <Route path='/option' element={<Option />}></Route>
          <Route path='/randombox' element={<Random />}></Route>
          <Route path='/share' element={<Share />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
