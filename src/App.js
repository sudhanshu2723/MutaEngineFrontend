import "./App.css";
import {Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/common/Navbar"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import About from "./pages/About";
import Contact from "./pages/Contact";





function App() {
  return (
   <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route
          path="signup"
          element={

              <Signup />
      
          }
        />
    <Route
          path="login"
          element={
            
              <Login />
 
          }
        /> 

    <Route
          path="/about"
          element={
            
              <About />
            
          }
        />
    <Route path="/contact" element={<Contact />} />

    </Routes>

   </div>
  );
}

export default App;
