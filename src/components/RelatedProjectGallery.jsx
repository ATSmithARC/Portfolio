import React, { useState, useEffect } from "react";
import projectList from "../data/project-list.json";
import { Link } from "wouter";

const RelatedProjectGallery = ({ projectIds }) => {
  const id = projectIds[0];
  const api = "https://storage.googleapis.com/atsmitharc-media/thumb/";

  return (
    <section className="related-section">
      <div className="related-gallery">
        {projectIds.map((id) => (
          <Link
            role="link"
            rel="preload"
            as="image"
            key={projectList[id].id}
            href={"/projects/" + projectList[id].href}
            className="masonryLink"
          >
            <div className="related-card">
              <img
                role="img"
                rel="preload"
                key={projectList[id].id}
                src={api + projectList[id].href + "-800.webp"}
                srcSet={`${api}${projectList[id].href}-400.webp 500w,
                         ${api}${projectList[id].href}-600.webp 700w`}
                alt={projectList[id].name}
              />
              <h3 role="heading" aria-level="3">{projectList[id].name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default RelatedProjectGallery;
