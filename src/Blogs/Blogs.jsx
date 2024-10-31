import Blog from "../Blog/Blog";


const Blogs = ({blogs,handleBookmark, handleReadingTime}) => {

  return (
    <div>

      <h1>Blogs:</h1>
      length: {blogs.length}
      {blogs.map(blog=><Blog handleBookmark={handleBookmark} handleReadingTime={handleReadingTime} key={blog.id} blog={blog}></Blog>)}
    </div>
  );
};

export default Blogs;