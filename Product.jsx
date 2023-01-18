import React, {useSatate, useEffect, useState} from 'react';

const Product = () => {
const [data, setData]=useState([]);
const [filter, setFilter]=useState(data);
const [loading ,setLoading]=useState(false);
let componentMounted=true;

useEffect(()=>{
  const getProduct=async()=>{
    setLoading(true);
    const response =await fetch("https://fakestoreapi.com/products");
    if (componentMounted){
      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
      console.log(filter)
    }


    return ()=>{
      componentMounted=false;
    }
  }
  getProduct();
},[]);

const Loading =()=>{
  return(
    <>
    Loading...
    </>
  )
}
const ShowProduct =()=>{
  return(
    <>
    <div className="buttons d-flex justify-content-center">
    <button className="btn btn-outline-blue">All</button>
    <button className="btn btn-outline-blue me-2">Men's Clothing</button>
    <button className="btn btn-outline-blueme-2 ">Women's Clothing</button>
    <button className="btn btn-outline-blue me-2">Jewelery Clothing</button>
    <button className="btn btn-outline-blue me-2">Electronic Clothing</button>
  </div>
    </>
  )
  
}
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='display-6 fw-boldertext-center'>Latest Products</h1>
            <hr/>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading/> : <ShowProduct/>}
        </div>
      </div>
    </div>
  );
}

export default Product