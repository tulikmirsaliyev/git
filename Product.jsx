import { cleanup } from '@testing-library/react';
import React,{useState,useEffect} from 'react'


function Product() {

  const [data, setData]=useState([]);
  const [filter, setFilter]=useState(data);
  const [loading, setLoading]=useState(false);
  let componentMounted=true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted){
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter)

      }
      return()=>{
        componentMounted=false;
      }

    }
    getProducts();
    }, []);

    const Loading =() =>{
      return
        <>
        Loading...
        </>;
      
      };
    const ShowProducts =()=>{
      return(
        <>
        <div className="buttons">
          <buttonn className="btn btn-outline-blue">All</buttonn>
          <buttonn className="btn btn-outline-blue">All</buttonn> 
          <buttonn className="btn btn-outline-blue">All</buttonn>
        </div>
        </>
      );
      
    };
  
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
            <hr/>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading/>:<ShowProducts/>}

        </div>
      </div>

    </div>
  )
}

export default Product