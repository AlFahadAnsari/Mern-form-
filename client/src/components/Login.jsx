import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {

  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  let navi=useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    axios.post('http://localhost:3000/login' ,{email,password})
    .then(res =>{
        console.log(res);
        if(res.data === 'login successful'){
            navi('/')
        }
    })
    .catch(err=>console.log(err))
   
  }


  return (
    <div className='SignupBody '>

<form onSubmit={handleSubmit}>

    <div className=' rounded-5' id='form'>
  <h1 className='fs-4 mb-4 text-center text-uppercase'>please login</h1>


    <label htmlFor="gmail" >gamil</label> <br />
    <input type="email" value={email}  onChange={(e)=>setemail(e.target.value)} required /> <br />

    <label htmlFor="password" >Password</label> <br />
    <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)}  required /> <br />

    <button className="btn btn-success text-center mt-3 w-100 ">submit</button>
    <Link to={'/login'} className="btn btn-primary text-center mt-3 w-100 ">login</Link>
    </div>

    
</form>


    

    </div>




  )
}

export default Login