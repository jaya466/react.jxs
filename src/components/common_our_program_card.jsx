import '../style.css';

/**
 * CommonOurProgramsCard — reusable academic-program card component.
 *
 * This project has no abstract classes; abstraction is achieved through
 * prop-driven functional components. This component defines the visual
 * structure for a program card and accepts any program's data via props,
 * playing the same role an abstract template would in a class hierarchy.
 *
 * @param {string} title       - Program name.
 * @param {string} description - Short program description.
 * @param {string} imageUrl    - URL of the program image.
 */
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
