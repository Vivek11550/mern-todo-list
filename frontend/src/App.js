import React from "react";
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';

import Navbar from "./components/navbar/navbar"
import Home from "./components/home/home"
import Footer from "./components/footer/Footer"
import About from "./components/about/about"
import SignUp from "./components/signup/signup"
import SignIn from "./components/signup/signin"
import Todo from "./components/todo/todo"

const App  = () =>{
  return( 
  <div>
  <Router>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/todo" element={<Todo/>} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    <Footer />
  </Router>
 
</div>
);
};

export default App;