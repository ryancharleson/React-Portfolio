import './App.css';
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home"
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"
import { useState } from "react";
import React from 'react';


function App() {

  const [currentPage, setCurrentPage] = useState("")

  const displayPage = () => {
    switch (currentPage) {
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  }

  return (
    
      <div>
        <NavBar setCurrentPage={setCurrentPage} />
        {displayPage()}
        <Footer />
      </div>
    

  );
}

export default App;
