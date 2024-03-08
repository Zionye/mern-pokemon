import React from 'react'
import Navbar from './sections/Navbar'
import Wrapper from './sections/Wrapper'
import Footer from './sections/Footer'
import Background from './components/Background'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './scss/index.scss'
import Search from './pages/Search'
import Pokemon from './pages/Pokemon'
import MyList from './pages/MyList'
import Compare from './pages/Compare'
import About from './pages/About'

const App = () => {
  return (
    <div className='main-container'>
      <Background />
      
      <BrowserRouter>
        <div className='app'>
          <Navbar />
          <Routes>
            <Route element={<Search />} path='/search'></Route>
            <Route element={<MyList />} path='/list'></Route>
            <Route element={<About />} path='/about'></Route>
            <Route element={<Compare />} path='/compare'></Route>
            <Route element={<Pokemon />} path='/pokemon/:id'></Route>
            <Route element={<Navigate to='/pokemon/1' />} path="*"></Route>
          </Routes>
          {/* <Wrapper /> */}
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App