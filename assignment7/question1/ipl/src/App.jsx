import React, { useEffect, useState } from 'react'
import Heading from './heading/Heading'
import axios from 'axios';


export default function App() {


  const [iplData, setIplData] = useState([]);

  useEffect(() => {
    const fatchProducts = async () => {
      const products = await axios.get("https://my-json-server.typicode.com/FreSauce/json-ipl/data");
      const productData = await products.data;
      setIplData(productData)
    }
    fatchProducts()
  }, [])


  // console.log(typeof (iplData))

  return (
    <>


      <Heading iplTeam={iplData} />
    </>

  )
}
