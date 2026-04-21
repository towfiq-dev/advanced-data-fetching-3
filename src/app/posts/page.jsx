import React from 'react';

const postFetch = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  
  if (!res.ok) {
    throw new Error("Failed Data fetch");
    
  }
  return res.json()
  // try{
  //   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  //   return res.json()
  // }
  // catch(error){
  //   throw new Error("Failed Data fetch");
  // }
}
const postsPage = async() => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  // const posts = await res.json()
  const posts = await postFetch()
  return (
    <div>
      <h1>Length:{posts.length}</h1>
    </div>
  );
};

export default postsPage;