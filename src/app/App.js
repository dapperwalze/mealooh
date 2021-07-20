import React, { Suspense, lazy } from "react";
import "antd/dist/antd.min.css";
import styles from "./main.module.scss";
import "./normalize.css";

const PageLayout = lazy(() => import("../app/Layout"));
const LazyFallback = () => <h4>Loading...</h4>;

const App = () => {
  return (
    <div className={styles.app}>
      <Suspense fallback={<LazyFallback />}>
        <PageLayout />
      </Suspense>
    </div>
  );
};

export default App;
