

const Bookmark = ({bookmark}) => {
  const{title,id}=bookmark;
  return (
    <div className="m-4">
      Bookmark:{title}
    </div>
  );
};

export default Bookmark;