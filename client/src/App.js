import React from "react";
import Home from "./pages/Home";
import Flights from "./pages/My-Flights";
import Search from "./pages/Search-Flights";
import Trips from "./pages/Trips";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import Login from "./pages/Login-Signup/login";
import signUp from "./pages/Login-Signup/signUp";
import NoMatches from "./pages/NoMatches";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./pages/ProtectedRoute";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <ProtectedRoute exact path={["/", "/dashboard"]} component={Home} />
        <ProtectedRoute exact path="/search-flights" component={Search} />
        <ProtectedRoute exact path="/messages" component={Messages} />
        <ProtectedRoute exact path="/trips" component={Trips} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={signUp} />
        <ProtectedRoute component={NoMatches} />
      </Switch>
    </Router>
  );
}

export default App;
