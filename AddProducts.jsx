import React, { useState } from 'react'


const AddProducts = () => {

  const[product_name, setProductname]=useState("")
  const[product_description, setProductdescription]=useState("")
  const[product_cost, setProductcost]=useState("")
  const[product_photo, setProductphoto]=useState("")


  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  const submit = async(e)=>{
    
  }
  




  return (
    <div  className='row justify-content-center mt-3'>
      <div className='card shadow col-md-6' >
        <h1>Upload products</h1>

        <form action="" onSubmit={submit}>

          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>

          <input 
          type="text" 
          placeholder='Product name' 
          className='form-control' 
          required
          value={product_name}
          onChange={(e)=>setProductname(e.target.value)}
          /><br />

          <textarea 
          placeholder='Describe your product' 
          className='form-control'
          required
          value={product_description}
          onChange={(e)=>setProductdescription(e.target.value)}
          ></textarea><br />

          <input 
          type="textarea" 
          placeholder='product cost' 
          className='form-control'
          required
          value={product_cost}
          onChange={(e)=>setProductcost(e.target.value)}          
          /><br />

          <b>Upload product photo</b><br />
          <input 
          type="file" 
          className='form-control' 
          required
          onChange={(e)=>setProductphoto(e.target.value)}
          /><br />

          <input type="submit"  value={"Upload Product"} className='w-100 form-control text-black  bg-info mb-3'/>

        </form>

      </div>
        
        
    </div>
  )
}

export default AddProducts