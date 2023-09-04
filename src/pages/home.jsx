import * as React from "react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="page">
      <div className="home-header">
        <h1>Hi, I'm Andrew.</h1>
        <h2>I'm an architectural designer <br/> and application developer.</h2>
        <div className="home-intro">
        <p>I want to empower architects, engineers, and designers
           to accomplish more with less by integrating digital 
           technology and sustainability into their work.</p>
          {/*<p>It's here you can </p>
        <Link className="custom-underline" href="/projects">browse my work</Link>
        <p>, <br/></p>  
        <Link className="custom-underline" href="/about">get to know me</Link>
        <p>, or </p>  
        <Link className="custom-underline" href="/contact">get in touch</Link>
        <p>.</p> */}    
        </div>
      </div>
    </div>
  );
}
