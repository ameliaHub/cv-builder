function CvSection({ title, children, className }) {
  return (
    <div className={`cv-section ${className}`}>
      <h4>{title}</h4>
      {children}
    </div>
  );
}

function CvPreview({ generalInfo, education, experience }) {
  return (
    <div className="cv-preview">
      <CvSection title={generalInfo.userName} className="general-info">
        <p>
          <strong>{generalInfo.email}</strong>
        </p>
        <p>
          <strong>{generalInfo.phone}</strong>
        </p>
      </CvSection>

      <CvSection title="Educación" className="education">
        <div className="date">
          <p className="startDate">{education.startDate}</p>
          <p className="endDate">{education.endDate}</p>
        </div>

        <p>
          <strong>{education.school}</strong>
        </p>
        <p>{education.location}</p>
        <p>{education.degree}</p>
      </CvSection>

      <CvSection title="Experiencia Laboral" className="experience">
        <div className="date">
          <p className="startDate">{experience.startDate}</p>
          <p className="endDate">{experience.endDate}</p>
        </div>
        <p>
          <strong>{experience.company}</strong>
        </p>
        <p>{experience.location}</p>
        <p>{experience.position}</p>
        <p className="experience-desc">{experience.description}</p>
      </CvSection>
    </div>
  );
}

export default CvPreview;
