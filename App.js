import React from "react";
//import {Form} from "./Components/Form"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from "./Components/About";
import Contact from "./Components/Contact";
import Shop from "./Components/Shop";
//import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar"


function App(){
    return(
        <div>
        
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/shop" element={<Shop/>}/>
            
            

            
        </Routes>
        </BrowserRouter>
            

        </div>
        
        
        
    )

}

export default App