import ProjectTypical from "../pages/project-typical.jsx";

const details = {
  "collab": ["Maximilian Vomhoff","Valerio Bompadre","Marcus Steinbrecher","Heidi Wittmann","Elia Gonzalez","Christian Kongensgaard","Tom Svilans"]
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P21() {
return (
      <ProjectTypical i={21} details={details} sections={sections}/>     
  );
}
