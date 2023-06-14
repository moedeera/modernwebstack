import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./Pages/Homepage/Homepage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
