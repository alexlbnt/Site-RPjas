import React, { useState, useEffect, useRef } from 'react';
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

const SliderWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const SliderContainer = styled.div`
    display: flex;
    overflow-x: auto;
    gap: 20px;
    padding: 20px;
    scroll-behavior: smooth;
    white-space: nowrap;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const CardContainer = styled.div`
    display: inline-block;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    min-width: 250px;

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

const NavArea = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 10%;
    cursor: pointer;
    z-index: 2;

    &:first-of-type {
        left: 0;
    }

    &:last-of-type {
        right: 0;
    }
`;

const Grupo = () => {
    const [players, setPlayers] = useState([]);
    const sliderRef = useRef(null);
    let scrollInterval = useRef(null);

    useEffect(() => {
        const fetchedPlayers = [
            { name: 'Sed', image: 'https://via.placeholder.com/300x400', description: 'Um Paladino do balacobaco.' },
            { name: 'Yaris', image: 'https://via.placeholder.com/300x400', description: 'Uma Artificer fenomenal.' },
            { name: 'Garimf', image: 'https://via.placeholder.com/300x400', description: 'DEUS NA TERRA.' },
            { name: 'Zero', image: 'https://via.placeholder.com/300x400', description: 'Uma coisa de outro mundo.' },
            { name: 'Verena', image: 'https://via.placeholder.com/300x400', description: 'Uma Bruxa da pesada.' },
            { name: 'Claive', image: 'https://via.placeholder.com/300x400', description: 'Um Pistoleiro com olho de aguia.' },
            { name: 'Kambami', image: 'https://via.placeholder.com/300x400', description: 'Um Clerigo surreal.' },
            { name: 'Vaelith', image: 'https://via.placeholder.com/300x400', description: 'Uma Druida animal.' },
        ];
        setPlayers(fetchedPlayers);
    }, []);

    const startScrolling = (direction) => {
        if (sliderRef.current) {
            scrollInterval.current = setInterval(() => {
                sliderRef.current.scrollBy({ left: direction === 'left' ? -50 : 50, behavior: 'smooth' });
            }, 30);
        }
    };

    const stopScrolling = () => {
        clearInterval(scrollInterval.current);
    };

    return (
        <GrupoContainer>
            <PresentationContainer>
                <h1>Bem-vindo à Página dos Players</h1>
                <p>Descubra mais sobre cada personagem neste grupo incrível. Passe o mouse sobre os cards para saber mais!</p>
            </PresentationContainer>
            <SliderWrapper>
                <NavArea onMouseEnter={() => startScrolling('left')} onMouseLeave={stopScrolling} />
                <SliderContainer ref={sliderRef}>
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
                </SliderContainer>
                <NavArea onMouseEnter={() => startScrolling('right')} onMouseLeave={stopScrolling} />
            </SliderWrapper>
        </GrupoContainer>
    );
};

export default Grupo;
