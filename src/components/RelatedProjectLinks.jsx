import React, { useState, useEffect } from "react";
import projectList from "../data/project-list.json";
import { Link } from "wouter";

const RelatedProjectLinks = (props) => {
  const projectIds = props.projectIds;
  const classNames = "custom-underline";

  function ReturnProjectLinks() {
    if (projectIds.length === 1) {
      const id = projectIds[0];

      if (typeof id === "string") {
        switch (id) {
          case "professional":
            return (
              <li>
                <Link className={classNames} href="/projects/professional">
                  See Professional Projects
                </Link>
              </li>
            );
          case "undergraduate":
            return (
              <li>
                <Link className={classNames} href="/projects/undergraduate">
                  See B.Arch Projects
                </Link>
              </li>
            );
          case "graduate":
            return (
              <li>
                <Link className={classNames} href="/projects/graduate">
                  See Graduate Projects
                </Link>
              </li>
            );
        }
      } else {
        return (
          <li>
            <Link
              role="link"
              className={classNames}
              href={`/projects/${projectList[id].href}`}
            >
              {projectList[id].name}
            </Link>
          </li>
        );
      }
    }
    if (projectIds.length > 1) {
      return (
        <>
          {projectIds.map((projectId, index) => (
            <li key={index}>
              <Link
                key={index}
                className={classNames}
                href={`/projects/${projectList[projectId].href}`}
              >
                {projectList[projectId].name}
              </Link>
            </li>
          ))}
        </>
      );
    } else {
      return <li>None Yet</li>;
    }
  }

  return (
    <ul>
      <ReturnProjectLinks />
    </ul>
  );
};

export default RelatedProjectLinks;
