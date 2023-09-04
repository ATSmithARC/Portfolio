import React, { useState } from "react";
import { Router, Link } from "wouter";
import "./styles/styles.css";
import PageRouter from "./components/router.jsx";
import Seo from './components/seo.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Waves from  './components/Waves.jsx';
import ThemeSwitcher from "./components/ThemeSwitcher.jsx"
import ScrollToTopButton from  './components/ScrollToTopButton.jsx';

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
      <ThemeSwitcher/>
      <main role="main" className="wrapper">
        <div className="content">
          <PageRouter />
        </div>
        <Waves color={{r: 225, g: 0, b: 0, a: 1}}/>
        <ScrollToTopButton />
      </main>
      <Footer />
    </Router>
  );
}
