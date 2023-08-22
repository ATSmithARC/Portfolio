import React, { useState } from "react";
import { Router, Link } from "wouter";
import "./styles/styles.css";
import PageRouter from "./components/router.jsx";
import Seo from './components/seo.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Waves from  './components/Waves.jsx';

export default function Home() {
  const body = document.body;
  const userPreference = localStorage.getItem('darkMode');
  /*
  if (userPreference === 'enabled') {
    body.classList.add('dark-mode');
  }
  */
  return (
    <Router>
      <Seo />
      <Navbar />
      <main role="main" className="wrapper">
        <Waves />
        <div className="content">
          <PageRouter />
        </div>
      </main>
      <Footer />
    </Router>
  );
}
