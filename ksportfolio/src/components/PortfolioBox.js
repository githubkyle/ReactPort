import React, { useState } from "react";
import About from "./pages/about";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Nav from "./nav";
import Header from "./header";
import Footer from "./footer";
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("about");

  const renderPage = () => {
    if (currentPage === "about") {
      return <About />;
    }
    if (currentPage === "contact") {
      return <Contact />;
    }
    if (currentPage === "portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "resume") {
      return <Resume />;
    }
  };

  const handlePageChange = page => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
