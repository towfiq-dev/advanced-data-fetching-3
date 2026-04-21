import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Book = ({book}) => {
  const {title, author, price, category, stock, rating, description, image, id} = book
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <Image width={300} height={300}
      src={image}
      alt={'title'} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <h3 className="card-title">{price}</h3>
    <p>{category}</p>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <Link href={`/books/${id}`}>
      <button className="btn btn-primary">Buy Now</button>
      </Link>
    </div>
  </div>
</div>
  );
};

export default Book;