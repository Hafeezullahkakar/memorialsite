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
import ThemeSelection from "./ui/pages/themeselection/ThemeSelection";
import Profile from "./ui/pages/profile/Profile";
import Mymemorial from "./ui/pages/mymemorial/Mymemorial";
import MyAccount from "./ui/pages/myaccount/MyAccount";
import React, { useState } from "react";
function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <Router>
      <div className="App">
        <Header loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pricing" element={<PlaneFeature />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/creatememorial" element={<CreateMemorial />} />
          <Route
            path="/login"
            element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/theme" element={<ThemeSelection />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mymemo" element={<Mymemorial />} />
          <Route path="/myaccount" element={<MyAccount />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
