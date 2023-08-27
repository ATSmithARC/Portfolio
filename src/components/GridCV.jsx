import Experience from  '../components/Experience.jsx';
import data from "../data/cv-data.json";

const educationText = "";

const GridCV = () => {
  return (
    <div className="resume-grid">
      <div className="grid-item profile" colSpan={3}>
        <h2>{data.profile.title}</h2>
        <p>{data.profile.text}</p>
      </div>
      <div className="grid-item experience-grid">
        <h2 className="exp-title">{data.experience.title}</h2>
          {data.experience.jobs.map((experience, index) => (
            <Experience key={index} experience={experience} />
          ))}
      </div>
      <div className="grid-item education">
        {/* Education section */}
        {/* Your education content */}
      </div>
      <div className="grid-item competencies" colSpan={1}>
      </div>
      <div className="grid-item it-skills" colSpan={1}>
      </div>
    </div>
  );
};

export default GridCV;
