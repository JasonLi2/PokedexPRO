import React, { useState, useEffect } from 'react';
import axios from "axios";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ selectedGen }) => {
    const [genCheck, setGenCheck] = useState("1");
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=151");
    const [pokemon, setPokemon] = useState([]);

    //to solve problem where selectedGen prop would be correct, but data in this component would be behind by 1 render
    if (genCheck !== selectedGen) {
        if(selectedGen === "1") {
            setUrl("https://pokeapi.co/api/v2/pokemon?limit=151");
            setGenCheck(selectedGen);
        }
        if(selectedGen === "2") {
            setUrl("https://pokeapi.co/api/v2/pokemon?offset=151&limit=100");
            setGenCheck(selectedGen);
        }
        if(selectedGen === "3") {
            setUrl("https://pokeapi.co/api/v2/pokemon?offset=251&limit=135");
            setGenCheck(selectedGen);
        }
        if(selectedGen === "4") {
            setUrl("https://pokeapi.co/api/v2/pokemon?offset=386&limit=107");
            setGenCheck(selectedGen);
        }
        if(selectedGen === "5") {
            setUrl("https://pokeapi.co/api/v2/pokemon?offset=493&limit=156");
            setGenCheck(selectedGen);
        }
        if(selectedGen === "6") {
            setUrl("https://pokeapi.co/api/v2/pokemon?offset=649&limit=72");
            setGenCheck(selectedGen);
        }
        if(selectedGen === "7") {
            setUrl("https://pokeapi.co/api/v2/pokemon?offset=721&limit=88");
            setGenCheck(selectedGen);
        }
        if(selectedGen === "8") {
            setUrl("https://pokeapi.co/api/v2/pokemon?offset=809&limit=89");
            setGenCheck(selectedGen);
        }
    }

    useEffect(() => {
        async function fetch() {
            const response = await axios.get(url);
            setPokemon(response.data["results"]);
            console.log("hello");
            console.log(pokemon);
            console.log({selectedGen})
        }
        fetch();
    }, [url]);

    return (
        <>
            {pokemon ? (
                <div className="row">
                    {pokemon.map(pokemon => (
                        <PokemonCard 
                            key={pokemon.name}
                            name={pokemon.name}
                            url={pokemon.url}
                        />
                    ))}
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    )
}

export default PokemonList;
