import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./Pages/Homepage/Homepage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { Navbar } from "./Components/Navbar/Navbar";
import { SiteContextProvider } from "./Context/Context";
import { Portfolio } from "./Pages/Portfolio/Portfolio";
import { About } from "./Pages/About/About";
import { Register } from "./Pages/Register/Register";
import { Footer } from "./Components/Footer/Footer";
import { Docs } from "./Pages/Docs/Docs";
import { Template } from "./Pages/Template/Template";
import { Testing } from "./Pages/Testing/Testing";
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";

function App() {
  return (
    <SiteContextProvider>
      <div className="mws-app">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/templates" element={<Template />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Template />} />
            <Route path="/test" element={<Testing />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </SiteContextProvider>
  );
}

export default App;
