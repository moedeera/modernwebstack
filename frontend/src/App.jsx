import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./Pages/Homepage/Homepage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { Budget } from "./Pages/BudgetPage/Budget";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/budget" element={<Budget />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
