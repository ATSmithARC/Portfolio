import * as React from "react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="page">
      <div className="home-header">
        <h1>Hi, I'm Andrew.</h1>
        <h2>I'm an architectural designer <br/> and part-time web developer.</h2>
        <div className="home-intro">
        <p>It's here you can </p>
        <Link href="/projects" className="animatedLinkLeft">browse my work</Link>
        <p>, <br/></p>  
        <Link href="/about" className="animatedLinkLeft">get to know me</Link>
        <p>, or </p>  
        <Link href="/contact" className="animatedLinkLeft">get in touch</Link>
        <p>.</p>    
        </div>
      </div>
    </div>
  );
}
