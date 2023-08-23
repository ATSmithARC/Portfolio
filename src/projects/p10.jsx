import ProjectTypical from "../pages/project-typical.jsx";

const details = {
  "collab": [
      "Sandro Siefert",
      "Søren Henning",
      "Camila Alarcon",
      "Daniel Bilesky",
      "Yuliya Sinke"
    ]
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P10() {
return (
      <ProjectTypical i={10} details={details} sections={sections}/>     
  );
}
