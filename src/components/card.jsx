
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";

function Card({ imagen ,title,descripcion,live,code}) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (
    <animated.div
      className="flex flex-col justify-center bg-color4 w-64 min-h-0 p-6 rounded-md"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} className="-mt-24 w-full rounded-2xl h-36" alt="" />
      <h2 className="m-0 mt-4 text-center text-white text-2xl font-bold">
        {title}
      </h2>
      <p className="m-0 mt-2 mb-6 text-justify">{descripcion}</p>
      <div className="flex space-between items-center">
       
       
      
          <Button text={<a href={live} target="_blank" rel="noopener noreferrer">Demo</a>} />
          <Button text={<a href={code} target="_blank" rel="noopener noreferrer">Code</a>} />

        
      </div>
    </animated.div>
  );
}

export default Card;
