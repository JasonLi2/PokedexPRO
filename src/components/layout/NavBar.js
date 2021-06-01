import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import styled from 'styled-components';

const Branding = styled.a`
    -moz-user-select: none;
    -website-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -o-user-select: none;
`;

const NavBar = ({ selectedGen, changeGen }) => {

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <Branding 
                href=""
                className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center anchor"
                >
                    Pokedex PRO
                </Branding>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        Generation {selectedGen}
                    </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onSelect={() => {changeGen("1")}}>Gen 1</Dropdown.Item>
                    <Dropdown.Item onSelect={() => {changeGen("2")}}>Gen 2</Dropdown.Item>
                    <Dropdown.Item onSelect={() => {changeGen("3")}}>Gen 3</Dropdown.Item>
                    <Dropdown.Item onSelect={() => {changeGen("4")}}>Gen 4</Dropdown.Item>
                    <Dropdown.Item onSelect={() => {changeGen("5")}}>Gen 5</Dropdown.Item>
                    <Dropdown.Item onSelect={() => {changeGen("6")}}>Gen 6</Dropdown.Item>
                    <Dropdown.Item onSelect={() => {changeGen("7")}}>Gen 7</Dropdown.Item>
                    <Dropdown.Item onSelect={() => {changeGen("8")}}>Gen 8</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </nav>
        </div>
    );
};

export default NavBar;