//import logo from '../logo.svg';
import React, {Suspense,lazy} from "react"
import './App.css';
const MealLayout = lazy(() => import('../app/Layout'));

const LazyFallback=()=><h4>Loading .........</h4>;

function App() {
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
