//import logo from '../logo.svg';
import React, { Suspense, lazy } from "react";
import { foodList } from "../mealData";
import styles from "./main.module.scss";
import "./normalize.css";

const MealLayout = lazy(() => import("../app/Layout"));
const LazyFallback = () => <h4>Loading...</h4>;

const App = () => {
  return (
    <div className={styles.app}>
      <Suspense fallback={<LazyFallback />}>
        <MealLayout>
          <h1>Hello World </h1>
        </MealLayout>
      </Suspense>
    </div>
  );
};

export default App;
