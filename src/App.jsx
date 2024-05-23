import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Landing from './Pages/Landing'
import View from './Pages/View'

import Home from './Pages/Home'
function App() {
  

  return (
    <div className='bg-black' style={{minHeight:'100vh'}}>
    <Header/>
     <Routes>
      <Route element={<Landing/>} path='/'></Route>
      <Route element={<Home/>} path='/home'></Route>
      <Route element={<View/>} path='/:id/view'></Route>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
