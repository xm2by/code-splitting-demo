import React, { useState, useEffect } from "react";
import eliteImg from "../assets/eliteImg.jpg";

const EliteImg = () => {
  const [imgUrl, setImgUrl] = useState();
  useEffect(() => {
    setImgUrl(eliteImg);
  }, []);
  return (
    <div>
      {imgUrl && (
        <img
          src={imgUrl}
          alt="elite image"
          style={{ width: "500px", height: "auto" }}
        />
      )}
    </div>
  );
};

export default EliteImg;
