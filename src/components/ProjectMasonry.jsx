import React, { useState } from "react";
import { Router, Link, useLocation } from "wouter";
import projectList from "../data/project-list.json";
import Masonry from "react-masonry-css";
const breakpointColumnsObj = {
  default: 4,
  1400: 3,
  1000: 2,
  400: 1,
};
const api = "https://storage.googleapis.com/atsmitharc-media/thumb/";
function ProjectMasonry(props) {
  // Reverse the projectList so newest entries appear first
  const reversedProjectList = [...projectList].reverse();

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {reversedProjectList
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
          <Link
            rel="preload"
            as="image"
            key={project.id}
            href={"/projects/" + project.href}
            className="masonryLink"
          >
            <div className="masonryItem" style={project.style}>
              <h2
                className="heading-small bold t200 left"
                role="heading"
                aria-level="2"
              >
                {project.name}
              </h2>
              <img
                role="img"
                rel="preload"
                key={project.id}
                src={api + project.href + "-800.webp"}
                srcSet={`${api}${project.href}-400.webp 500w,
                       ${api}${project.href}-600.webp 700w,
                       ${api}${project.href}-1000.webp 1100w`}
                alt={project.name}
                aria-label={`Project thumbnail image of ${project.name}`}
              />
              <p>{project.desc}</p>
            </div>
          </Link>
        ))}
    </Masonry>
  );
}
export default ProjectMasonry;
