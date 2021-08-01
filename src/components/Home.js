import React, { useState, Suspense } from "react";
import Loading from "./Loading";
import ErrorBoundary from "./ErrorBoundary";

const EliteImg = React.lazy(() => import("./EliteImg"));

const Home = () => {
  const [showImg, setShowImg] = useState(false);
  return (
    <div>
      <button onClick={() => setShowImg(true)} style={{ margin: "32px 0" }}>
        展示人类高质量男性
      </button>
      {showImg && (
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <EliteImg></EliteImg>
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
};

export default Home;
