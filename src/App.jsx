import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import {Routes,Route} from "react-router-dom"
import page1 from "./Pages/Page1"
import Mainpage from './Pages/Mainpage'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/page1' element={<Page1/>}/>
        <Route path='/page2' element={<Page2/>}/>
        <Route path='/page3' element={<Page3/>}/>
      </Routes>
    </>
  )
}

export default App