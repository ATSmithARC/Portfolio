import React, { useState } from "react";
import { Router, Link, useLocation } from "wouter";
import projects from "../data/project-data.json";
import Masonry from "react-masonry-css";
const breakpointColumnsObj = {
  default: 4,
  1400: 3,
  1000: 2,
  400: 1,
};
const api = "https://storage.googleapis.com/atsmitharc-media/thumb/";
const ext = ".webp";
function ProjectMasonry(props) {
  const [location] = useLocation();
  return (
    <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
      {projects
        .filter((project) => {
          switch (props.category) {
            case "all":
              return true;
            case "professional":
              return project.category === 0;
            case "pro-bono":
              return project.category === 1;
            case "undergraduate":
              return project.category === 2;
            case "graduate":
              return project.category === 3;
            default:
              return false;
          }
        })
        .map((project) => (
          <Link rel="preload" as="image" key={project.id} href={"projects/" + project.href}>
          <div className="masonryItem" style={project.style}>
            <p>{project.desc}</p>
            <img
              rel="preload"
              key={project.id}
              src={api + project.href + "-800" + ext}
              srcSet={`${api}${project.href}-400${ext} 500w,
                       ${api}${project.href}-600${ext} 700w,
                       ${api}${project.href}-1000${ext} 1100w`}
              alt={project.name}
              title={project.name}
            />
          </div>
        </Link>
        ))}
    </Masonry>
  );
}
export default ProjectMasonry;
