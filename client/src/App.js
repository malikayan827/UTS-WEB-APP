import "./App.css";

// Import Bootstrap CSS in your index.js or App.js file
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import webfont from "webfontloader";
import React from "react";

import LogInSignUp from "./components/user/loginsignup";
import store from "./store";
import { loadUser } from "./actions/userAction.js";
import { useSelector } from "react-redux";
import Profile from "./components/user/Porfile.js";
import UpdateProfile from "./components/user/UpdateProfile.js";
import UpdatePassword from "./components/user/UpdatePassword.js";
import ForgotPassword from "./components/user/ForgotPassword.js";
import ResetPassword from "./components/user/ResetPassword.js";


function App() {
  
  const { user, isAuthenticated,loading} = useSelector((state) => state.user);
  React.useEffect(() => {
    webfont.load({
      google: {
        families: ["Chilanka", "Droid Sans", "Roboto", "sans-serif"],
      },
    });
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      
      <Routes>
     
        
        <Route path="/login-register" element={<LogInSignUp />} />
        
      </Routes>
      

    
    </Router>
  );
}

export default App;
