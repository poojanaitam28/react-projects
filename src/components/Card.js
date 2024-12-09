import React from "react";
import { FcLike ,FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props) {
  let course = props.course;
  let liked = props.liked;
  let setLiked = props.setLiked;

  function clickHandler(){
    if(liked.includes(course.id)){
      setLiked( (prev) => prev.filter((cid) => (cid !== course.id) ) );
      toast.warning("Liked Removed");
    }else{
      if(liked.length === 0){
        setLiked([course.id]);
      }else{
        setLiked((prev) => [...prev, course.id])
      }
      toast.success("Liked Successfully")
    }
  }

  return (
    <div className="w-[300px] bg-slate-900 bg-opacity-50 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt="img" />

        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
          <button onClick={clickHandler}>
         {
          liked.includes(course.id) ? ( <FcLike fontSize="1.5rem" />) : ( <FcLikePlaceholder  fontSize="1.5rem" />)
         }
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">{
        course.description.length > 100 ? (course.description.substr(0,100)) + "..." : (course.description)
        }</p>
      </div>
    </div>
  );
}

export default Card;
