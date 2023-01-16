import React,{useState,useEffect} from 'react'


function Product() {

  const [data, setdata]=useState([]);
  const [filter, setFilter]=useState(data);
  const [loading setLoading]=useState(false);
  let componentMounted=true;

  return (
    <div>Producta</div>
  )
}

export default Product
