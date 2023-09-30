import React, { useState, useEffect } from "react";
import projectList from "../data/project-list.json";
import { Link } from "wouter";

const RelatedProjectGallery = ({ projectIds }) => {
  const id = projectIds[0];
  return (
    <section className="related-section">
      <div className="related-gallery">
        <div className="related-card">{projectIds[0]}</div>
        <div className="related-card">{projectIds[1]}</div>
      </div>
    </section>
  );
};
export default RelatedProjectGallery;
