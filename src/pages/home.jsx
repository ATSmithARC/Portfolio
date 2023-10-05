import * as React from "react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-text" role="heading" aria-level="1">
        Hi, I'm Andrew
      </h1>
      <h2 className="home-text" role="heading" aria-level="2">
        I'm a computational designer <br /> and part-time developer.
      </h2>
      <p className="home-text">
        My passion is empowering architects and designers to accomplish more
        with less by integrating technology and computational thinking into the
        way we work.
      </p>
    </div>
  );
}
