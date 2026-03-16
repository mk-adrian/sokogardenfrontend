import React, {useState} from "react"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'





const SignIn = () => {


  // initialize hooks
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  // initialize other hooks for loadiing,success and error
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

 // hook used to redirect a user 
  const navigate = useNavigate();


  // function for api
  const submit=async(e)=>{

    e.preventDefault()
    setLoading("Please wait...")
    
    // sending to database
    try{
      const data= new FormData()

      data.append("email",email)
      data.append("password", password)

      // call the api
      const response=await axios.post("https://mkadrian.alwaysdata.net/api/signin", data)

      setLoading("")

      if(response.data.user){
        // if user is found, store user details in local storage
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setSuccess(response.data.message);

        // redirect to getproducts component
        setTimeout(()=>{

          navigate("/");
        },2000);

      }

      else{
        // user not found, show error msg
        setError(response.data.message)
      }
      // if there was an error, clear loading

    }
    catch (error) {
      setLoading("")
      setError(error.data.message)
      

    }
  };

  return (
    <div  className="row  justify-content-center mt-5">
      <div  className='card shadow col-md-6'>
        <h1>Sign In</h1>

        <form action="" onSubmit={submit}>
          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>


          <input type="email" placeholder='email' className='form-control'required value={email}onChange={(e)=>setEmail(e.target.value)}/>
          <br />

          <input type="password" placeholder='password' className='form-control' required value={password}onChange={(e)=>setPassword(e.target.value)}/>
          <br />

          <input type="submit" value={"sign in" }className='w-100 form-control text-black  bg-info mb-3'/>


          <b>Don't have an account?<Link to={'/signup'}>Sign Up</Link></b>
          <br />
          <br />


        </form>

      </div>
    </div>
  )
}

export default SignIn