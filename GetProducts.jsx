import React, { use } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const GetProducts = () => {

  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")
  const[products,setProducts]=useState([])

  const image_url="https://mkadrian.alwaysdata.net/static/images/"

  // function to fetch the api
  const fetchProducts = async()=>{
    setLoading("Please wait as we retrieve your products")

    try {
      // call api
      const response=await axios.get("https://mkadrian.alwaysdata.net/api/getproductdetails")
      console.log("the resopnse is", response);
      
      setProducts(response.data)
      setLoading("")
      
    } catch (error) {
      setLoading("")
      setError(error.message)
    }

  };
  // end of function and callign of useEffect

  useEffect(()=>{
    fetchProducts()

  },[]);

  return (
    <div  className='row'>
        <h1>Available products</h1>

        <p  className='text-warning'>{loading}</p>
        <p  className='text-danger'>{error}</p>

        {/* calling .map method to iterate thru each item  */}
        {products.map((product)=>(

 


        <div  className='col-md-3 justify-content-center'>

          <div  className='card shadow  mb-3'>

            <img src={image_url + product.product_photo} alt="cake" className='product_img mt-4 '/>

            <div  className='card-body'>
              <h5 className='text-success'>{product.product_name}</h5>
              <p  className='text-secondary'>{product.product_description}</p>
              <p  className=''>{product.product_cost}</p>
              <input type="button" className='btn btn-success w-100'value="make payment"/>
            </div>

          </div>

        </div>
))}


    </div>
  )
}

export default GetProducts