import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './features/Nav'
import HomePage from './features/Home/HomePage'
import SkillPage from './features/Skills/SkillPage'
import { BrowserRouter,Routes,Route} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
         <Nav/>
     <Routes>


     <Route path="" element={
            <HomePage/>
            }/>

     <Route path="skills" element={
            <SkillPage/>
            }/>       

             </Routes>

    </BrowserRouter>


  )
}

export default App
