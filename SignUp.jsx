import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {

  // initialize hooks
  const[username,setUsername]=useState()
  const[email,setEmail]=useState()
  const[phone,setPhone]=useState()
  const[password,setPassword]=useState()

  // initialize other hooks for loadiing,success and error
  const[loading,setLoading]=useState()
  const[success,setSuccess]=useState()
  const[error,setError]=useState()

  // function that will send our data to the database
  const submit=async(e)=>{

    e.preventDefault()
    setLoading("Please wait...")

    // sending data to the database

    try {

    const data=new FormData()

    data.append("username",username)
    data.append("email",email)
    data.append("phone", phone)
    data.append("password", password)

    // call the api
    const response=await axios.post("https://mkadrian.alwaysdata.net/api/signup", data)

    setLoading("")

    setSuccess(response.data.message)
      
    } catch (error) {

      setLoading("")
      setError(error.message )
      
    }


  }


  return (
    <div className="row  justify-content-center mt-3">

      <div className="card shadow col-md-6">
        <h1>Sign Up</h1>
        <form action="" onSubmit={submit}>
          <p className='text-info'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>
          {/* {username} */}

          {/* form control makes it responsive since its a bs class */}
          <input type="text"  placeholder='Username'  className='form-control' required value={username}onChange={(e)=>setUsername(e.target.value)}/>
          <br /><br />

          {/* {email} */}

          <input type="email" placeholder='email' className='form-control' required value={email}onChange={(e)=>setEmail(e.target.value)}/>
          <br /><br />

          {/* {phone} */}

          <input type="tel" placeholder='number' className='form-control' required  value={phone}onChange={(e)=>setPhone(e.target.value)}/>
          <br /><br /> 

          {/* {password} */}

          <input type="password" placeholder='password' className='form-control' required value={password}onChange={(e)=>setPassword(e.target.value)}/>
          <br /><br />


          <input type="submit" value={"sign up" }className='w-100 form-control text-black  bg-info mb-3'/>

          <b>Already have an account?<Link to={'/signin'}>Sign In</Link></b>



        </form>
      </div>

    </div>
    

  )
}

export default SignUp