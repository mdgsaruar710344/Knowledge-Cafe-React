import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks, readingTime}) => {
console.log(bookmarks);
  return (
    <div>
      <div className="m-4"> Reading Time:{readingTime} </div>
      <div>
      Bookmarks:{bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)} 
      </div>
     
    
    </div>
  );
};

export default Bookmarks;