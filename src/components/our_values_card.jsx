import '../style.css'
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