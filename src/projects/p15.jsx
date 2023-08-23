import ProjectTypical from "../pages/project-typical.jsx";

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
            ]
}

const sections = [
  <section>this is a test section</section>,
  <section>this is also a test section</section>
]

export default function P15() {
return (
      <ProjectTypical i={15} details={details} sections={sections}/>     
  );
}
