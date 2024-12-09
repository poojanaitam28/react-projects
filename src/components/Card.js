import { useState } from "react";

function Card({ id, name, image, info, price, removeTour }) {
  const [readmore, setReadMore] = useState(false);

  const description = readmore ? info : `${info.substring(0, 200)}....`;

  function readMoreHandler() {
    setReadMore(!readmore);
  }

  return (
    <div className="card">
      <img className="image" src={image} alt=""></img>

      <div className="tour-info">
        <div className="tours-details">
          <h2 className="tour-price"> $ {price}</h2>
          <h2 className="tour-name">{name}</h2>
        </div>

        <div className="description">
          {description}
          <span className="read-more" onClick={readMoreHandler}>
            {readmore ? `Show Less` : `Read More`}
          </span>
        </div>
      </div>

      <button className="btn-red" onClick={() => removeTour(id)}>
        Not intrested
      </button>
    </div>
  );
}
export default Card;
