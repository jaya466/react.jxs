import '../style.css'

/**
 * CommonValuesCard — reusable institutional-value card component.
 *
 * No abstract classes exist in this project; JavaScript lacks an `abstract`
 * keyword and the project uses only functional components. This component
 * abstracts the layout for a single value entry so that any number of values
 * can be displayed by passing different `iconURL` and `title` props.
 *
 * @param {string} iconURL - URL of the icon image for the value.
 * @param {string} title   - Display name of the institutional value.
 */
function CommonValuesCard({iconURL,title}){
    return(
        <div className="our-values-card">
            <img className='icon' src={iconURL}/>
            <div className='text'>{title}
            </div>
        </div>

    ) ;
}
export default CommonValuesCard;