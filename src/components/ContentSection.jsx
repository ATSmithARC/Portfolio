import projectList from "../data/project-list.json";

const ContentSection = ({ properties }) => {
  const { templateType, title, text, projectID, imgID, alt, addClassNames } =
    properties;
  let templateElements;
  if (templateType === "img") {
    const api = "https://storage.googleapis.com/atsmitharc-media/img/";
    ("sofi-stadium/01/image-1000");
    const src = `${api}${projectList[projectID].href}/${imgID}/image-2000.webp`;
    const srcset = [
      `${api}${projectList[projectID].href}/${imgID}/image-3000.webp 3200w`,
      `${api}${projectList[projectID].href}/${imgID}/image-1000.webp 1200w`,
      `${api}${projectList[projectID].href}/${imgID}/image-500.webp 600w`,
    ];
    const classNames = "image";
    templateElements = (
      <img
        src={src}
        alt={alt}
        srcset={srcset}
        className={classNames + addClassNames}
      />
    );
  }
  if (templateType === "text") {
    const classNames = "content-section image";
    templateElements = (
      <>
        <div className={classNames + addClassNames}>
          <p>some text</p>
        </div>
      </>
    );
  }
  if (templateType === "quote") {
    const classNames = "content-section quote";
    templateElements = <h2></h2>;
  }

  return <section className="content-section">{templateElements}</section>;
};

export default ContentSection;
