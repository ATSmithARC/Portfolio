import { Router, Link, useLocation } from "wouter";
import projects from "../projects.json";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  1400: 3,
  1000: 2,
  400: 1,
};

function ProjectMasonry(props) {
  const [location] = useLocation();
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
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
          <Link key={project.id} href={'projects/' + project.href}>
              <div className="masonryItem" key={project.id}>
                <div className="imageWrapper" style={{ backgroundColor: `#000000` }}>
                  <p>{project.desc}</p>
                  <img src={project.thumb} alt={project.name} />
                </div>
                <b>{project.name}</b>
            </div>
          </Link>
        ))}
    </Masonry>
  );
}

export default ProjectMasonry;
