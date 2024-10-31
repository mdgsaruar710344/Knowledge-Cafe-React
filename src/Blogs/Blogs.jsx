import Blog from "../Blog/Blog";


const Blogs = ({blogs}) => {

  return (
    <div>

      <h1>Blogs:</h1>
      length: {blogs.length}
      {blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)}
    </div>
  );
};

export default Blogs;