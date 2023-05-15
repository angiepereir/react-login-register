import { useContext } from "react"
import { JWtContext } from "../context/JwtContext"
import {useForm} from "react-hook-form"
import { API } from "../services/Api";
import "./Login.css"


const Login = () => {
     const{ setJwt } = useContext(JWtContext)

    const {register, handleSubmit} = useForm();
    const onSubmit = (formData)=>{
        //  console.log(formData);

        API.post("users/login", formData).then((res) => {
            console.log(res)
            localStorage.setItem("token", res.data.data.token)
            localStorage.setItem("user", res.data.data.user.usuario)
            setJwt(localStorage.getItem("token"));
        })
    }        
   
    
  return (
   <form className="Form" onSubmit={handleSubmit(onSubmit)}>
<label className="email" htmlFor="email">Email</label>
<input className="input" type="email" id="email" {...register("email",{required: true})}/>


<label className="label" htmlFor="password">Password</label>
<input className="password" type="password" id="password" {...register("password",{required: true})}/>


<button className="submit" type="submit">Loguearse</button>



   </form>
  )
}

export default Login