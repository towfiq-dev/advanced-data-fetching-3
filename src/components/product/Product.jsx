import Image from 'next/image';
import React from 'react';

const Product = ({product}) => {
  const {name, price, category, stock, rating, description, image, brand} = product
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <Image
    width={300}
    height={300}
      src={image}
      alt={name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
    <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  );
};

export default Product;