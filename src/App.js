import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard"
import Login from "./components/Login";
import SignUp from "./components/Signup";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          {/* <Route path="/userDetails" element={<UserDetails />} /> */}
        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
  );
}

export default App;

