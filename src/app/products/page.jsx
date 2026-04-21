import Product from '@/components/product/Product';
import React from 'react';
const getProducts = async()=>{
  // try{
    const res = await fetch('http://localhost:3004/products', 
      //{cache: 'force-cache'}
      //{cache: 'no-store'}
      {next: {revalidate: 10}}

    )
  return res.json()
  // }catch(error){
  //   throw new Error("Failed data fetch");
  // }
}
const productsPage = async() => {
  const products = await getProducts()
  return (
    <div >
      <h1>fffff{products.length}</h1>
      <div className='grid grid-cols-3 justify-between gap-4 items-center mt-10 max-w-300 mx-auto'>
        {
        products.map((product, index)=> 
        <Product product={product} 
        key={index}>
        </Product>)
      }
      </div>
    </div>
  );
};

export default productsPage;