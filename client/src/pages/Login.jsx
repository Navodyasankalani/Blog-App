import React from 'react'
import { useState } from 'react';
import { Link, useNavigate, } from "react-router-dom";
//import axios from "axios";
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

function Login() {
 
  const[inputs, setInputs] = useState({
    username:"",
    password:"",
  })

  const [err, setError] =useState(null);

  const navigate =useNavigate();

  const {login} = useContext(AuthContext)

  const handleChange = e =>{
    setInputs(prev =>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    // const res = await axios.post("/auth/register", inputs);
    // console.log(res)
    try{
      await login(inputs)
      navigate("/")
      //console.log(res)
    }catch(err){
      setError(err.response.data)
      //console.log(err)
    }
    
  }
  console.log(inputs)
  

return (
  <div className ='auth'>
      <h1>LOGIN</h1>
      <form>
          <input required type="text" placeholder='USERNAME' name='username' onChange={handleChange}/>
          <input required type="password" placeholder='PASSWORD' name='password'  onChange={handleChange}/>
          <button onClick={handleSubmit}>LOGIN</button>
          {err && <p>{err}</p>}
          <span>
          Don't you have an account? <Link to="/register">Register</Link>
          </span>
      </form>
  </div>
)
}


// function Login() {
//   return (
//     <div className ='auth'>
//         <h1>Login</h1>
//         <form>
//             <input type="text" placeholder='USERNAME'/>
//             <input type="password" placeholder='PASSWORD'/>
//             <button>LOGIN</button>
//             <span>
//               Don't you have an account? <Link to="/register">Register</Link>
//             </span>
//         </form>
//     </div>
//   )
// }

export default Login