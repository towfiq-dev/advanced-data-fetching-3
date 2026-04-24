import React from 'react';

export const generateStaticParams = async()=>{
  const res = await fetch('http://localhost:3004/books')
  const books = await res.json()
  return books.slice(1,3).map((book)=>({bookId: book.id}))

}
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