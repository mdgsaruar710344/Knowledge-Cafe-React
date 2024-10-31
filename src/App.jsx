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


const[bookmarks, setBookmarks]=useState([]);
const[readingTime,setReadingTime]=useState(0)

function handleBookmark(blog){
  
const newbookmarks=[...bookmarks, blog]
setBookmarks(newbookmarks);
}

function handleReadingTime(reading_time,id){
const newReadingTime=readingTime+ reading_time;
setReadingTime(newReadingTime);
console.log(id)
const updatedBookmarked=bookmarks.filter(bookmark=>bookmark.id!==id)
//console.log(updatedBookmarked);

setBookmarks(updatedBookmarked);
}
  return (
    <>
      <div>
        <Header></Header>
      </div>
    length: {blogs.length}
      <div className='flex justify-between'>
          <div>
          <Blogs handleBookmark={handleBookmark} handleReadingTime={handleReadingTime} blogs={blogs}></Blogs>
          </div>
          
          <div>
          <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
          </div>
      </div>

    </>
  )
}

export default App
