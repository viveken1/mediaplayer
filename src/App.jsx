import { Route,Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Landingpage from './pages/Landingpage'
import Watch from './pages/Watch'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
 

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watch' element={<Watch/>}/>
    </Routes>
   <Footer/>
    </>
  )
}

export default App
