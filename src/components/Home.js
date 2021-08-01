import React, { useState } from "react";
import EliteImg from "./EliteImg";

const Home = () => {
  const [showImg, setShowImg] = useState(false);
  return (
    <div>
      <button onClick={() => setShowImg(true)}>展示人类高质量男性</button>
      {showImg && <EliteImg></EliteImg>}
    </div>
  );
};

export default Home;
