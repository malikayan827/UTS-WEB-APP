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
import Profile from './screens/Profile.js'
import UserOptions from "./components/user/UserOptions.js";
import Loader from "./components/layout/loader/Loader.js";

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
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
     
      
        <Route path="/" element={<LogInSignUp />} />
        {loading ? (<Route  path="/account" element={<Loader />}/>
      ) : (isAuthenticated && <Route  path="/account" element={<Profile />}/>)}
        {!isAuthenticated && <Route path="/account" element={<LogInSignUp />} />}
        
      </Routes>
      

    
    </Router>
  );
}

export default App;
