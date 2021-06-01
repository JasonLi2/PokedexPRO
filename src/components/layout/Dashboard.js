import React from 'react';
import PokemonList from "../pokemon/PokemonList";

const Dashboard = ({ selectedGen }) => {
    console.log("dashboard " + selectedGen);

    return (
        <div className="row">
            <div className="col">
                <PokemonList selectedGen={selectedGen}/>
            </div>
        </div>
    )
}

export default Dashboard;
