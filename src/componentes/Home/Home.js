import React from 'react';
import styled from 'styled-components';
import ArvoreTraad from '../../imagens/ArvoreDeTraad.png';

const HomeContainer = styled.div`
    color: white;
    text-align: center;
    padding: 20px;
    background-image: url(${ArvoreTraad});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 640px;

    @media (max-width: full) {
        background-size: contain;
        min-height: auto;
    }

    @media (max-width: full) {
        padding: 10px;
    }
`;

const Home = () => {
    return (
        <HomeContainer>
            
        </HomeContainer>
    );
};

export default Home;

