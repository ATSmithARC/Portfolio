const ProjectSplash = ({ project, details }) => {
  const { href, category, title, site, yearStart, yearEnd } = project;
  const { collab, description } = details;
  const api = "https://storage.googleapis.com/atsmitharc-media/img/";
  const endpt = `${href}/01/image-`
  const getCategory = () => {
    switch (project.category) {
      case 0:
        return "Professional";
      case 1:
        return "Pro-Bono";
      case 2:
        return "Undergraduate";
      case 3:
        return "Graduate";
    }
  };
  console.log(`${api}${endpt}2000.webp`);
  return (
    <section className="project-splash">
      
      <div className="splash-image">
        <img 
          rel="preload" 
          className="splashimg" 
          src={`${api}${endpt}2000.webp`}
          srcSet={`${api}${endpt}3000.webp 3100w,
                   ${api}${endpt}1000.webp 1100w,
                   ${api}${endpt}500.webp 600w`}
          alt="Placeholder Splash Image"/>
      </div>
      
      <div className="splash-info">
        
        <h1 className="splash-title">{project.name}</h1>
        
        <div className="splash-details">
          <div className="splash-stats">
          <ul>
            <li>
              <h5>Category:</h5>
              <p>{getCategory()}</p>
            </li>
            <li>
              <h5>Location:</h5>
              <p>{site}</p>
            </li>
            <li>
              <h5>Year(s):</h5>
              <p>
                {yearStart} - {yearEnd}
              </p>
            </li>
          </ul>
            </div>
          <div className="splash-collab">
            <h5>Collaborators:</h5>
            {collab.map((name, index) => (
              <p key={index}>{name}{index < collab.length - 1 ? ', ' : ''}</p>
            ))}
          </div>
        </div>
        <div className="splash-desc">
          <p>{description}</p>
        </div>
        
        
        
      </div>
      
      
      
    </section>
  );
};

export default ProjectSplash;
