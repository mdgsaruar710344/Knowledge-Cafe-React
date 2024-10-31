import { useEffect } from 'react'
import './App.css'
import Blogs from './Blogs/Blogs'
import Bookmarks from './Bookmarks/Bookmarks'
import Header from './Header/Header'
import { useState } from 'react'

function App() {
  const[blogs,setBlogs]=useState([]);

  useEffect(()=>{
    fetch('/src/blogsdata.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))

  },[])



  return (
    <>
      <div>
        <Header></Header>
      </div>
    length: {blogs.length}
      <div className='flex justify-between'>
          <div>
          <Blogs blogs={blogs}></Blogs>
          </div>
          
          <div>
          <Bookmarks></Bookmarks>
          </div>
      </div>

    </>
  )
}

export default App
