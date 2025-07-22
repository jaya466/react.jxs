import '../style.css'


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
