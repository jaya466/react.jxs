import '../style.css';

function CommonOurProgramsCard({ title, description, imageUrl }) {
  return (
    <div className='our-programs-card'>
      <img src={imageUrl} alt={title} />
      <div className='our-programs-card-content'>
        <div className='our-programs-card-title'>{title}</div>
        <div className='our-programs-card-description'>{description}</div>
      </div>
    </div>
  );
}

export default CommonOurProgramsCard;
