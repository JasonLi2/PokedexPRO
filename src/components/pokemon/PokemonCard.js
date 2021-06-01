import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import spinner from "../../assets/images/spinner.gif";

const Sprite = styled.img`
    width: 6em;
    height: 6em;
    display: none;
`;

const Card = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); 
    }
    -moz-user-select: none;
    -website-user-select: none;
    user-select: none;
    -o-user-select: none;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus,
    &:hover,
    &visited,
    &link,
    &active {
        text-decoration: none;
    }
`;

const PokemonCard = ({ name, url }) => {
    const [pokemonName, setPokemonName] = useState(name.toLowerCase().split("-").map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(" "));
    const [pokemonIndex, setPokemonIndex] = useState(url.split("/")[url.split("/").length-2]);
    const [imgURL, setImgURL] = useState(`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`);
    const [tooManyRequests, setTooManyRequests] = useState(false);
    const [loading, setLoading] = useState(true);

    //Jangmo-O, Hakamo-O, Kommo-O special case handler
    if (pokemonName === "Jangmo O") {
        setPokemonName("Jangmo-O");
    };
    if (pokemonName === "Hakamo O") {
        setPokemonName("Hakamo-O");
    };
    if (pokemonName === "Kommo O") {
        setPokemonName("Kommo-O");
    };

    return (
        <div className="col-lg-3 col-sm-6 mb-5 mt-5">
            <StyledLink to={`pokemon/${pokemonIndex}`}>
                <Card className="card">
                    <h5 className="card-header"> {pokemonIndex} - {pokemonName} </h5>
                    {loading ? (
                        <img 
                            src={spinner} 
                            style={{width: "6em", height: "6em"}} 
                            className="card-img-top rounded mx-auto d-block mt-2" 
                        />
                    ) : null}
                    <Sprite 
                        className="card-img-top mx-auto mt=2"
                        onLoad={() => setLoading(false)}
                        onError={() => setTooManyRequests(true)}
                        src={imgURL}
                        style= {
                            tooManyRequests ? {display: "none"} : {display: "block"}
                        }
                    />
                    {tooManyRequests ? (
                        <h6 className="mx-auto">
                            <span className="badge badge-danger mt-2">
                                Too many requests. <br />
                                Wait a bit and try again.
                            </span>
                        </h6>) :
                        null
                    }
                </Card>
            </StyledLink>
        </div>
    );
};

export default PokemonCard;
