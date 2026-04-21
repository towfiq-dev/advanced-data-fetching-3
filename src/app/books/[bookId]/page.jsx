import React from 'react';

const detailPage = async({params}) => {
  const {bookId} = await params
  const resFetch = await fetch(`http://localhost:3004/books/${bookId}`)
  const books = await resFetch.json()
  const {title, author, price, category, stock, rating, description, image, id} = books
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default detailPage;