import React, { useState } from "react";
import Card from "./Card";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function Testimonials(props) {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function backHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function forwardHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }
  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-lg rounded-md">
      <Card review={reviews[index]} />

      <div className="flex justify-center text-3xl gap-3 mt-5 text-violet-400 font-bold ">
        <button
          onClick={backHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={forwardHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <IoIosArrowForward />
        </button>
      </div>

      <div className="">
        <button
          onClick={surpriseHandler}
          className="bg-violet-400 hover:text-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 mt-5 rounded-md font-bold text-lg text-white"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
