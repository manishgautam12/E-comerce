import React, { useEffect } from 'react';
import Poster1 from '../components/Poster/Poster1';
import Products from "../components/Products/Products"
import Poster2 from '../components/Poster/Poster2';
import Poster3 from '../components/Poster/Poster3';
import { useSelector } from 'react-redux';
import Loader from '../components/Tools/Loader';
import Footer from '../components/Footer/Footer';

const Home = () => {
  const {data:products,status,message}=useSelector((state)=>state?.products)

  if(status==='loading')
  {
    return <Loader/>
  }

  return (
    <>
      <Poster1/>
      <Products products={products.slice(0,8)}/>
      <Poster3/>
      <Products heading="Monsoon Sales" title="Monsoon products at your point" products={products}/>
      {/* <Poster2/> */}
      <Footer/>
    </>
  )
}

export default Home