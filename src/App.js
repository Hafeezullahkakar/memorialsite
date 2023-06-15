import logo from "./logo.svg";
import "./App.css";
import Header from "./ui/components/header/Header";
import PlaneFeature from "./ui/pages/planfeature/PlaneFeature";
import About from "./ui/pages/about/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contactus from "./ui/pages/contact/Contactus";
import CreateMemorial from "./ui/pages/creatememorial/CreateMemorial";
import Homepage from "./ui/pages/Home/Homepage";
import Footer from "./ui/components/footer/Footer";
import Login from "./ui/pages/auth/Login";
import Signup from "./ui/pages/auth/Signup";
import ThemeSelection from './ui/pages/themeselection/ThemeSelection'
import Profile from "./ui/pages/profile/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pricing" element={<PlaneFeature />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/creatememorial" element={<CreateMemorial />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/theme" element={<ThemeSelection />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
