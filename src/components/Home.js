import React, { useState } from "react";
import loadable from "@loadable/component";
import Loading from "./Loading";
import ErrorBoundary from "./ErrorBoundary";

const EliteImg = loadable(() => import("./EliteImg"), {
  fallback: <Loading />,
});

const Home = () => {
  const [showImg, setShowImg] = useState(false);
  return (
    <div>
      <button onClick={() => setShowImg(true)} style={{ margin: "32px 0" }}>
        展示人类高质量男性
      </button>
      {showImg && (
        <ErrorBoundary>
          <EliteImg></EliteImg>
        </ErrorBoundary>
      )}
    </div>
  );
};

export default Home;
