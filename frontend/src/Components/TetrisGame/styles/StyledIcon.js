import React from 'react';
import styled from 'styled-components';
import LogoImage from "../../../public/logo.png";

const StyledIcon = styled.img`
    position: absolute;
    float: right;
    width: 150px;
    margin: 35px;    
`;

const Icon = () => {
    return (
    <StyledIcon src={LogoImage} alt="Tetris Block Puzzle" /> // Use src attribute to specify the image source
    );
};

export default Icon;
