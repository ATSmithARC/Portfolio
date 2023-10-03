import React, { useState } from "react";
import { Router, Link } from "wouter";
import "./styles/styles.css";
import PageRouter from "./components/router.jsx";
import Seo from "./components/seo.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Waves from "./components/Waves.jsx";

export default function Home() {
  return (
    <Router>
      <Seo />
      <Header />
      <main role="main" className="wrapper">
        <div className="content">
          <PageRouter />
        </div>
        <Waves color={{ r: 225, g: 0, b: 0, a: 1 }} />
      </main>
      <Footer />
    </Router>
  );
}
