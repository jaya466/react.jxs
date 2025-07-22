import '../style.css'
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