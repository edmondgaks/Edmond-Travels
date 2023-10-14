import { AiFillStar } from "react-icons/ai";
import React from "react";
const Star = () => {
    return (
        <span>
            <AiFillStar color="orange" width={12} />
        </span>
    )
}

const StarContainer = () => {
    const starCount = 5;
    const starArray = Array.from({ length: starCount })

    return (
        <div className="flex flex-row">
          {starArray.map((_, index) => (
            <Star key={index} />
          ))}
        </div>
      )
}
export default StarContainer