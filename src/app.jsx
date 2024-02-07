import React, { useState } from "react";
import { Router, Link } from "wouter";
import "./styles/styles.css";
import PageRouter from "./components/router.jsx";
import Seo from "./components/seo.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Waves from "./components/Waves.jsx";
import WavesThree from "./components/WavesThree.jsx";

export default function App() {
  return (
    <Router>
      <Seo />
      <Header />
      <main role="main" className="wrapper">
        <div className="content">
          <PageRouter />
        </div>
      </main>
      <WavesThree />
      <Footer />
    </Router>
  );
}
