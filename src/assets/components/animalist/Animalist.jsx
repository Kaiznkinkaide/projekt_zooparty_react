import"./animallist.css"

import AnimalItem from "../animalItem/AnimalItem";

const AnimalList = ({animals}) => {
    return ( 
        <>
        {animals.map((animal, index)=>{
            return(
                <div className="card" key= {index}>
                    <AnimalItem
                    name={animal.name}
                    species={animal.species}
                    habitat={animal.habitat}
                    lifespan={animal.lifespan}
                    diet={animal.diet}
                    funFacts={animal.funFacts[0]}
                    funFacts1={animal.funFacts[1]}
                    funFacts2={animal.funFacts[2]}
                    emoji={animal.emoji}
                    />
                </div>
            )
        })}

        </>
     );
}
 
export default AnimalList;