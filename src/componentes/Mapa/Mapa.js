import React from 'react';
import styled from 'styled-components';
import MapaBackground from '../../imagens/Mapa-Background.png'; 

const MapaContainer = styled.div`
    color: white;
    text-align: center;
    padding: 20px;
    width: 100vw;
    height: 100vh;
    background-image: url(${MapaBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: local;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Mapa = () => {
    return (
        <MapaContainer>
            <h1>Mapa do Mundo</h1>
            <p>Visualize as terras por onde sua jornada o levará.</p>
        </MapaContainer>
    );
};

export default Mapa;
