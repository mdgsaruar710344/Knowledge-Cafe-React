

const Blog = ({blog}) => {
  const{id,author,author_img,reading_time,cover,date_of_posting,hash_tags}=blog
  return (
    <div>
      Blog Author: {author}
    </div>
  );
};

export default Blog;