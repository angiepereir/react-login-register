
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { JWtContext } from '../context/JwtContext'
import ButtonLogout from '../componentes/ButtonLogout'
import "./Nav.css"
const Nav = () => {

    const {jwt} = useContext(JWtContext)
    const usuario = localStorage.getItem("user")
  return (
    <nav className='nav'>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>

           {jwt && (
            <>
               <li>
               <Link to="/gallery">Gallery</Link>
           </li>

           <li className='logout'><ButtonLogout/></li>
           </>
           )} 
           {jwt === null && (
            <>
              <li>
              <Link to="/login">Login</Link>
          </li>

          <li>
              <Link to="/register">Register</Link>
          </li>
          </>
           )}
           {usuario != undefined && (<li>Welcome</li>)}

           


        </ul>
    </nav>
  )
}

export default Nav