import './App.css';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React, {Suspense, lazy} from "react";

const Page1 = lazy(() => import('./components/Page1'));
const Page2 = lazy(() => import('./components/Page2'));
const Page3 = lazy(() => import('./components/Page3'));

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page3 />} />
          <Route path="Page1" element={<Page1 />} />
          <Route path="Page2" element={<Page2 />} />
          <Route path="Page3" element={<Page3 />} />
        </Routes>
      </BrowserRouter> */}


      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<Page1></Page1>}/>
            <Route path="/Page1" element={<Page1></Page1>}/>
            <Route path="/Page2" element={<Page2></Page2>}/>
            <Route path="/Page3" element={<Page3></Page3>}/>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
