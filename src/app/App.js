//import logo from '../logo.svg';
import React, {Suspense,lazy} from "react"
import {foodList} from "../mealData"
import './App.scss';
const MealLayout = lazy(() => import('../app/Layout'));
const LazyFallback=()=><h4>Loading .........</h4>;

function App() {
    //console.log("foodList", foodList[2].url);
  return (
        <div className="App">
            <Suspense fallback={<LazyFallback/>}>
               < MealLayout>
                      <h1>Hello World </h1>
               </MealLayout>
            </Suspense>
        </div>
  );
}

export default App;
