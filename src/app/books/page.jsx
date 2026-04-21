import Book from '@/components/book/Book';
import React from 'react';
const getBooks = async()=>{
  const res = await fetch('http:localhost:3004/books',
  //{cache: 'no-store'}
  //{cache: 'force-cache'}
  {next:{revalidate: 10}}
  )
  return res.json()
}
const booksPage = async() => {
  const books = await getBooks()
  return (
    <div className='grid grid-cols-3 justify-between gap-4 items-center mt-10 max-w-300 mx-auto'>
    {
      books.map((book, index)=> <Book 
      book={book} 
      key={index}>
      </Book>)
    }
    </div>
  );
};

export default booksPage;