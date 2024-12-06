import React, { useContext } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext";

function Blogs() {
  const { posts, loading } = useContext(AppContext);
  console.log(posts);

  return (
    <div className="w-11/12 max-w-[650px] py-8 flex flex-col gap-y-4 mt-[62px] mb-[60px] justify-center items-center">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Posts Available</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className="font-bold text-lg">{post.title}</p>
            <p className="text-sm mt-[4px]">
              By <span className="italic">{post.author}</span>on{" "}
              <span className="underline font-bold">{post.category}</span>
           </p>
            <p className="text-sm mt-6px">Posted on {post.date}</p>
            <p className="text-md mt-[14px]">{post.content}</p>
            <div className="flex gap-x-3">
              {post.tags.map((tag, index) => {
                return <span className="text-blue-700 text-xs underline font-bold mt-[5px]" key={index}>{`#${tag}`}</span>;
              })}
            </div>
          </div>  
        ))
      )}
    </div>
  );
}

export default Blogs;
