import React from 'react'
import { useParams } from 'react-router-dom'
import DATA from '../Data';

function YanGi() {
  const Proid = useParams ();
  const ProDetail = DATA.filter(x=>x.id ==Proid.id)
  const Product = ProDetail[0];
  console.log(Product)

  return (
    <>
    saolm
    </>
  )
};

export default YanGi;