import projects from "../projects.json";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

function ProjectMasonry(props) {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {projects
        .filter((project) => {
          switch (props.category) {
            case "All":
              return true;
            case "Professional":
              return project.category === 0;
            case "Pro Bono":
              return project.category === 1;
            case "Undergraduate":
              return project.category === 2;
            case "Graduate":
              return project.category === 3;
            default:
              return false;
          }
        })
        .map((project) => (
          <div className="masonryItem" key={project.id}>
            <img src={project.thumb} alt={project.name} />
          <b>{project.name}</b>
          </div>
        ))}
    </Masonry>
  );
}

export default ProjectMasonry;
