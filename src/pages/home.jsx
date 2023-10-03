import * as React from "react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="page">
      <div className="home-header">
        <h1 className="heading-primary">Hi, I'm Andrew</h1>
        <h2>
          I'm a computational designer <br /> and part-time developer.
        </h2>
        <div className="home-intro">
          <p>
            My passion is empowering architects and designers to accomplish more
            with less by integrating technology and computational thinking into
            the way we work.
          </p>
        </div>
      </div>
    </div>
  );
}
