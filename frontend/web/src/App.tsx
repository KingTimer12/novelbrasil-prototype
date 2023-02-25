import "./styles/main.css";

import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export interface Novel {
  id: string;
  title: string;
  sinopse: string;
  view: number;
  rating: number;
  author: string;
  coverUrl: string;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
