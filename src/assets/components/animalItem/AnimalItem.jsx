import "./animalitem.css"

const AnimalItem = ({name, species, habitat, lifespan, diet, funFacts,funFacts1,funFacts2, emoji}) => {
    return ( 
        <>
        <div className="emoji">{emoji}</div>
        <h1>{name}</h1>
        <h3>{species}</h3>
        <h3>{habitat}</h3>
        <h3>{diet}</h3>
        <p>{lifespan} years</p>
        <div className="funfacts">
            <ul>
                <li>{funFacts}</li>
                <li>{funFacts1}</li>
                <li>{funFacts2}</li>
            </ul>
        </div>
        </>
     );
}
 
export default AnimalItem;