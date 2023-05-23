import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Homepage from './pages/Homepage';
import Postpage from './pages/Postpage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            element={<Homepage />} path="/" exact />
        </Routes>
        <Routes>

          <Route element={<Postpage />} path="/post/:userid/" exact />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
