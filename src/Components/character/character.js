import React from "react";
import { Link } from "react-router-dom";
import "./character.css"

const Character = (props) =>{
    const { character } = props
    return(
        <React.Fragment>

<span className="fw-bold">
    <div class="container mt-4">
    <div className="container d-flex justify-content-center mb-4">
            <div className ="Character__container" className = "card" style={{minWidth: "200px"}}>
                <Link 
                    className="Character__image"
                    to={`/character/${character.id}`}
                >
                
                    <img 
                        className= "Character__image"
                        src={props.character.image} 
                        alt={props.character.name}
                    />
        
                </Link>
                <div className="Character__data">
                    <h2 className = "Character__name">{props.character.name}</h2>
                    <p className = "Character__species">{props.character.species}</p>
                    <p className = "Character__status">{props.character.status}</p>
                    <p>{props.character.gender}</p>
                </div>
            </div>
    </div>
    </div>
</span>
        </React.Fragment>
    );
};

export default Character;
