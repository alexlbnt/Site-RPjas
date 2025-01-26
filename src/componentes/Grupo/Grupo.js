import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const GrupoContainer = styled.div`
    color: white;
    text-align: center;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.57);
    min-height: 100vh;
`;

const PresentationContainer = styled.div`
    background-color: rgba(0, 0, 0, 0);
    color: white;
    padding: 50px 20px;
    margin-bottom: 40px;
    border-radius: 10px;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px 30px;
    padding: 80px;
`;

const CardContainer = styled.div`
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

const Card = styled.div`
    background: #333;
    color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    text-align: center;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    z-index: 1;
`;

const InfoCard = styled.div`
    position: relative;
    background: #222;
    color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    margin-top: 10px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;

    /* Mostra a carta com animação */
    ${CardContainer}:hover & {
        opacity: 1;
        transform: translateY(0);
    }

    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 0;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
`;

const PlayerName = styled.h2`
    margin: 10px 0 5px;
    font-size: 1.5rem;
`;

const Description = styled.p`
    font-size: 1rem;
    color: #ddd;
    text-align: center;
`;

const Grupo = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        // Simulando o carregamento dos dados de uma API
        const fetchedPlayers = [
            {
                name: 'Sed',
                image: 'https://via.placeholder.com/300x400',
                description: 'Um Paladino do balacobaco.',
            },
            {
                name: 'Yaris',
                image: 'https://via.placeholder.com/300x400',
                description: 'Uma Artificer fenomenal.',
            },
            {
                name: 'Garimf',
                image: 'https://via.placeholder.com/300x400',
                description: 'DEUS NA TERRA.',
            },
            {
                name: 'Zero',
                image: 'https://via.placeholder.com/300x400',
                description: 'Uma coisa de outro mundo.',
            },
            {
                name: 'Verena',
                image: 'https://via.placeholder.com/300x400',
                description: 'Uma Bruxa da pesada.',
            },
            {
                name: 'Claive',
                image: 'https://via.placeholder.com/300x400',
                description: 'Um Pistoleiro com olho de aguia.',
            },
            {
                name: 'Kambami',
                image: 'https://via.placeholder.com/300x400',
                description: 'Um Clerigo surreal.',
            },
            {
                name: 'Vaelith',
                image: 'https://via.placeholder.com/300x400',
                description: 'Uma Druida animal.',
            },
        ];
        setPlayers(fetchedPlayers);
    }, []);

    return (
        <GrupoContainer>
            <PresentationContainer>
                <h1>Bem-vindo à Página dos Players</h1>
                <p>Descubra mais sobre cada personagem neste grupo incrível. Passe o mouse sobre os cards para saber mais!</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
            </PresentationContainer>
            <GridContainer>
                {players.map((player, index) => (
                    <CardContainer key={index}>
                        <Card>
                            <Image src={player.image} alt={`${player.name} image`} />
                            <PlayerName>{player.name}</PlayerName>
                        </Card>
                        <InfoCard>
                            <Description>{player.description}</Description>
                        </InfoCard>
                    </CardContainer>
                ))}
            </GridContainer>
        </GrupoContainer>
    );
};

export default Grupo;

