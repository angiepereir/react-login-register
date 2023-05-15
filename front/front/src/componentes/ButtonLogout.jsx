import { useContext } from "react"
import { JWtContext } from "../context/JwtContext"
import { useNavigate } from "react-router-dom"


const ButtonLogout = () => {
    const {setJwt} = useContext(JWtContext)
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setJwt(null)
        navigate("/login");
    }
  return <button onClick={logout}>Cerrar sesion</button>
   
  
}

export default ButtonLogout