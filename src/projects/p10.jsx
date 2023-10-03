import ProjectTypical from "../pages/project-typical.jsx";
import ContentSection from "../components/ContentSection.jsx";

const details = {
  "collab": ["Ryan Griffin (Co-Author)"],
  "description": "Hacking Fracking is a call to arms for the re-purposing of Texas’ network of hydraulic fracturing wells. The ambition of Hacking Fracking is to solve three problems facing the state’s hydrology: Aquifer depletion, worsening hydraulic extremes (droughts & floods), and widespread hydraulic fracturing by the oil and gas industry. This project exploits technical similarities between hydraulic fracturing wells and aquifer injection & recharge wells in order to propose how we can and must re-purpose Texas’ 430,000+ active and abandoned fracking wells into a decentralized state-wide aquifer storage, filtration, recovery, and groundwater quality monitoring network."
}

const sections = [
 <section></section>,
]

export default function P10() {
return (
      <ProjectTypical i={10} details={details} sections={sections}/>     
  );
}
