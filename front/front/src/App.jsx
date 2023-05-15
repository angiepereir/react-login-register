
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from "./core/Nav"
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { useState } from 'react'
import { JWtContext } from './context/JwtContext'
import Gallery from './pages/Gallery'
import { RequireAuth } from './componentes/RequireAuth'
function App() {
  const [jwt, setJwt] = useState(null);
  //  console.log(jwt);
  return (

    <>
      <JWtContext.Provider value={{ jwt, setJwt }}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
              path="/gallery"
              element={
                <RequireAuth>
                  <Gallery />
                </RequireAuth>
              }
            />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

        </Routes>
      </JWtContext.Provider>


    </>
  )
}

export default App
