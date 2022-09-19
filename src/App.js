import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="Page1" element={<Page1 />} />

          <Route path="Page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
