import React from "react";
import OddManOutGame from "./components/OddManOutGame/OddManOutGame";
import GuessTheShape from "./components/GuessTheShape/GuessTheShape";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    //< OddManOutGame ></OddManOutGame >
    <div>
      <Routes>
        <Route exact path="/OddManOutGame" element={<OddManOutGame />} />
        <Route exact path="/GuessTheShape" element={<GuessTheShape />} />
      </Routes>

      <Link to="/OddManOutGame"> odds man out</Link>
      <Link to="/GuessTheShape"> guess the shape </Link>
    </div>
  );
}

export default App;
