import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["Roberto Naboni",
             "Anja Kunic",
             "Alessandro Zomparelli",
             "Luca Breseghello",
             "Sandro Sanin",
             "Aina Radovan",
             "Andreas Nielsen",
             "Angelina Garipova",
             "Anne Beyer",
             "Asger Pedersen",
             "Aske Kiehn",
             "Averina Annisa",
             "Cyril Novotny",
             "Guijia Zhao",
             "Ilya Lebedev",
             "Jonathan Nielsen",
             "Juraj Stetiar",
             "Mathilde Eriksen",
             "Maxime Fouillat",
             "Robin Petersen",
             "Veranika Sidorka",
             "Xan Browne",
             "Vojtech Vrtal"
            ],
  "description": "This project is the process and outcome of a three-week summer program held at the University of Southern Denmark that focused on exploring data-driven construction and the production of full-scale prototypes aimed at advancing timber fabrication through the use of digital design-to-fabrication workflows. Several concepts were introduced such as circular assemblies, robotic fabrication, and wood forming through programmed material behavior. With an iterative approach, we experimented with various digital designs and physical prototypes where material, form, and structure were all open to investigation."
}

const sections = [
  <section></section>,
]

export default function P17() {
return (
      <ProjectTypical i={17} details={details} sections={sections}/>     
  );
}
