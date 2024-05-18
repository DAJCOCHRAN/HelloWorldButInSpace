import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
