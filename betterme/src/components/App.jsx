import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./sections/Navbar/Navbar";
import Login from "./User/login/Login";
import Profile from "./User/profile/Profile";
import About from "./sections/About/About"; 
import BookNow from "./sections/Book Now/BookNow";
import Home from "./sections/Home/Home";
import "../App.css"; 

function App() {
  console.log("App component rendered");

  const handleWelcomeClick = () => {
    alert("Welcome to Stress-Free Travel Planning!");
  };

  return (
    <>
      <Navbar />
      <div className="main-container">
        <section className="page page1">
          
          {/* <BookNow /> */}
          
          <Profile />
          
          {/* <Home /> */}
          <div>
            <h2>Stress-Free Travel Planning Starts Here.</h2>
            <button onClick={handleWelcomeClick}>Welcome</button>
          </div>
        </section>
        <section className="page page2">
       <Home />
        </section>
        <section className="page page3">
        <Login />
        </section>
        <section className="page page4">
        <About/>
        </section>
      </div>
    </>
  );
}

export default App;
