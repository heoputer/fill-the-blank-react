import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Meta from "./pages/Meta";
import Html from "./pages/Html";
import CSS from "./pages/CSS";
import JS1 from "./pages/JS1";
import JS2 from "./pages/JS2";
import Menu from "./component/Menu";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Menu />
        </div>
        <div className="h-screen bg-teal-800 border-2 border-rose-600">
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/meta" element={<Meta />}></Route>
            <Route path="/html" element={<Html />}></Route>
            <Route path="/css" element={<CSS />}></Route>
            <Route path="/javascript1" element={<JS1 />}></Route>
            <Route path="/javascript2" element={<JS2 />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
