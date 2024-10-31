

const Blog = ({blog,handleBookmark, handleReadingTime}) => {
  const{id,author,title,author_img,reading_time,cover,date_of_posting,hash_tags}=blog
  return (
    <div>

      <div>
        <img  src={cover}/>
      </div>

      <div> {title}</div>
      <div>
      <div className="flex justify-between">
      Blog Author: {author}
      
      {date_of_posting}

      <button className="bg-green-500 m-4 p-2"  onClick={()=>handleBookmark(blog)}>Click to Bookmark</button>

      </div>
      </div>
      

      <div>
      Reading Time:  {reading_time}
      </div>
      <div>
        {hash_tags.map((hash,idx)=> <div key={idx} >{hash}</div>)}
      </div>
      <div className="bg-yellow-400 justify-center m-4 w-20" >
      <button onClick={()=>handleReadingTime(reading_time,id)}> Mark as Read</button>
      </div>
      
     

    </div>
  );
};

export default Blog;