
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UniversityCompare from "./UiversityCompare";
import Navbar from "./NavBar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<UniversityCompare />} />
      </Routes>
    </Router>
  );
}

export default App;

