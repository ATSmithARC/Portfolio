import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["Maximilian Vomhoff","Valerio Bompadre","Marcus Steinbrecher","Heidi Wittmann","Elia Gonzalez","Christian Kongensgaard","Tom Svilans"],
  "description": "'OpenMaterialData' won the ‘Best Overall Project’ award at the 2023 BLOXHUB AEC Hackathon. The project addressed the lack of accessible product data for software in the construction industry. OpenMaterialData aimed to solve issues with existing EPD databases by providing an alternative to a patchwork of proprietary data exposure services and by improving data quality by replacing inconsistent proprietary data standards with an open standard. OpenMaterialData proposed and prototyped an open-source distributed database architecture that can meet our industry’s demand for comprehensive, transparent, and standardized digital product data."
}

const sections = [
  <section key={1}>this is a test section</section>,
  <section key={2}>this is also a test section</section>
]

export default function P21() {
return (
      <ProjectTypical i={21} details={details} sections={sections}/>     
  );
}
