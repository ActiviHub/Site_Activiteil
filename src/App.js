import React from "react";
import { BrowserRouter } from "react-router-dom";

// import "bootswatch/dist/sketchy/bootstrap.min.css";
import "./App.css";

import Nav from "./components/Elements/Navbar/Nav";
import ThemeContextProvider from "./Context/ThemeContext";
import Body from "./components/pages/Body";
import Footer from "./components/Elements/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeContextProvider>
          <Nav />
          <Body />
          <Footer />
        </ThemeContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
