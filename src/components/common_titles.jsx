import '../style.css'

/**
 * CommonTitles — reusable section-heading component.
 *
 * This project uses plain JavaScript (JSX) and functional components, so there
 * are no abstract classes in the codebase. Abstraction is achieved through
 * reusable components like this one: the structure (heading + description) is
 * defined here, while callers supply the concrete content via props — the same
 * intent as an abstract base class in object-oriented languages.
 *
 * @param {string} title       - The section heading text.
 * @param {string} description - The supporting description text.
 */
function CommonTitles({title,description}){
    return(
        <div className='common-titles'>
            <div className='common-titles-content'>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
    
}
export default CommonTitles;