import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./Pages/Homepage/Homepage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { Budget } from "./Pages/BudgetPage/Budget";
import { Navbar } from "./Components/Navbar/Navbar";
import { SiteContextProvider } from "./Context/Context";
import { Portfolio } from "./Pages/Portfolio/Portfolio";
import { About } from "./Pages/About/About";

function App() {
  return (
    <SiteContextProvider>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/budget" element={<Budget />} />
          </Routes>
        </Router>
      </div>
    </SiteContextProvider>
  );
}

export default App;
