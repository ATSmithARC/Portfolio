import projects from "../data/project-data.json";

const ContentSection = (props) => {
  const { template, projectID, imgID, alt, className } = props.content;
  let templateElements;
  const api = "https://storage.googleapis.com/atsmitharc-media/img/";
  "sofi-stadium/01/image-1000"

  const src = `${api}${projects[projectID].href}/${imgID}/image-2000.webp`;
  const srcset = [
    `${api}${projects[projectID].href}/${imgID}/image-3000.webp 3200w`,
    `${api}${projects[projectID].href}/${imgID}/image-1000.webp 1200w`,
    `${api}${projects[projectID].href}/${imgID}/image-500.webp 600w`,
  ]
  
  if (template === 'img') {
    templateElements = <img src={src} alt={alt} srcset={srcset} className={className} />;
  }
  // You can add more conditions for other content types here

  return (
    <section>
      {contentElement}
    </section>
  );
};

export default ContentSection;
