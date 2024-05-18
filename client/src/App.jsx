import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Splash } from "./components/Splash";

function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Splash />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
