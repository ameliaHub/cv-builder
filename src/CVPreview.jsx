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
      <div className="cv-preview-inner">
        <CvSection title={generalInfo.userName} className="general-info">
          <p>
            <strong>{generalInfo.email}</strong>
          </p>
          <p>
            <strong>{generalInfo.phone}</strong>
          </p>
        </CvSection>

        <CvSection title="Educación" className="education">
          <div className="education-container">
            {education.map((educ, index) => (
              <div key={index} className="education-item">
                <div className="date">
                  <p className="startDate">{educ.startDate}</p>
                  <p className="endDate">{educ.endDate}</p>
                </div>

                <p>
                  <strong>{educ.school}</strong>
                </p>
                <p>{educ.location}</p>
                <p>{educ.degree}</p>
              </div>
            ))}
          </div>
        </CvSection>

        <CvSection title="Experiencia" className="experience">
          <div className="experience-container">
            {experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="date">
                  <p className="startDate">{exp.startDate}</p>
                  <p className="endDate">{exp.endDate}</p>
                </div>
                <p>
                  <strong>{exp.company}</strong>
                </p>
                <p>{exp.location}</p>
                <p>{exp.position}</p>
                <p className="experience-desc">{exp.description}</p>
              </div>
            ))}
          </div>
        </CvSection>
      </div>
    </div>
  );
}

export default CvPreview;
