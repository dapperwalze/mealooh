import React, { Suspense, lazy } from "react";
import "antd/dist/antd.min.css";
import "./normalize.css";

const PageLayout = lazy(() => import("./components/Layout"));
const LazyFallback = () => <h4>Loading...</h4>;

const App = () => {
  return (
    <div className="className">
      <Suspense fallback={<LazyFallback />}>
        <PageLayout />
      </Suspense>
    </div>
  );
};

export default App;
