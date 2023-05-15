import { useForm } from "react-hook-form"
import { API } from "../services/Api";
import { useNavigate } from "react-router-dom";
import "./Register.css"


const Register = () => {
 const {register, handleSubmit} = useForm();
 const navigate = useNavigate();
 const onSubmit = (FormData)=>{
    // console.log(FormData);
    API.post("users/register", FormData).then((res)=>{
        console.log(res);
    })
    
    navigate("/login")
 };

  return (
    <form className="Form" onSubmit={handleSubmit(onSubmit)}>
    <label className="email" htmlFor="email">Email</label>
    <input className="input" type="email" id="email" {...register("email",{required: true})}/>
    
    
    <label className="label" htmlFor="password">Password</label>
    <input className="password" type="password" id="password" {...register("password",{required: true})}/>
    
    <label className="usuario " htmlFor="usuario">Usuario</label>
    <select className="id" name="usuario" id="usuario" {...register("usuario",{required:true})}>
       <option className="option1" value="basico">Basico</option> 
       <option className="option2" value="intermedio">Intermedio</option> 
       <option className="option3" value="avanzado">Avanzado</option> 
    </select>


    <button className="submit" type="submit">Registrarse</button>
    
    
    
       </form>
  )
}

export default Register