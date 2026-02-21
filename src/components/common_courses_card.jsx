import '../style.css'

/**
 * CommonCourses — reusable course-card component.
 *
 * No abstract classes are used in this project (JavaScript has no `abstract`
 * keyword and all components here are functional). This component serves as the
 * abstraction for a course entry: it defines the card layout once and lets
 * callers inject any course's data through props.
 *
 * @param {string} imageUrl    - URL of the course image.
 * @param {string} title       - Course name.
 * @param {string} description - Short course description.
 * @param {string|number} year     - Academic year.
 * @param {string|number} semester - Semester number.
 */
function CommonCourses({ imageUrl, title, description, year, semester }) {
  return (
    <div className='our-courses-card'>
      <img src={imageUrl} alt={title} />
      <div className='courses-card-mini'>
        <div className='our-courses-title'>{title}</div>
        <div className='our-courses-description'>{description}</div>
        <div className='common-year'>Year: {year} Semester: {semester}</div>
      </div>
    </div>
  );
}

export default CommonCourses;
