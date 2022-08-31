import React, { Suspense, lazy } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import "./normalize.css";

const PageLayout = lazy(() => import("./components/Layout"));
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const LazyFallback = () => antIcon;

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
