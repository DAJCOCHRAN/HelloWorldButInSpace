import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./Home";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
