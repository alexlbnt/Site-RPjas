import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const GrupoContainer = styled.div`
    color: white;
    text-align: center;
    padding: 20px;
`;

const CarouselContainer = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 20px;
    padding: 20px 0;

    &::-webkit-scrollbar {
        display: none; /* Oculta a barra de rolagem */
    }
`;

const Card = styled.div`
    flex: 0 0 auto;
    perspective: 1000px;
    width: 200px;
    height: 300px;
    scroll-snap-align: center;

    &:hover .inner {
        transform: rotateY(180deg);
    }
`;

const Inner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
`;

const Front = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: #333;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

const Back = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: #555;
    color: white;
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

const Image = styled.img`
    width: 80%;
    border-radius: 10px;
`;

const Grupo = () => {
    const players = [
        {
            name: 'Sed',
            image: 'https://via.placeholder.com/300x400',
            description: 'Um habilidoso guerreiro e líder nato.',
        },
        {
            name: 'Yaris',
            image: 'https://via.placeholder.com/300x400',
            description: 'Uma poderosa maga com um passado misterioso.',
        },
        {
            name: 'Garimf',
            image: 'https://via.placeholder.com/300x400',
            description: 'Uma poderosa maga com um passado misterioso.',
        },        {
            name: 'Zero',
            image: 'https://via.placeholder.com/300x400',
            description: 'Uma poderosa maga com um passado misterioso.',
        },        {
            name: 'Verena',
            image: 'https://via.placeholder.com/300x400',
            description: 'Uma poderosa maga com um passado misterioso.',
        },        {
            name: 'Claive',
            image: 'https://via.placeholder.com/300x400',
            description: 'Uma poderosa maga com um passado misterioso.',
        },        {
            name: 'Kambami',
            image: 'https://via.placeholder.com/300x400',
            description: 'Uma poderosa maga com um passado misterioso.',
        },        {
            name: 'Vaelith',
            image: 'https://via.placeholder.com/300x400',
            description: 'Uma poderosa maga com um passado misterioso.',
        },        {
            name: 'Edward',
            image: 'https://via.placeholder.com/300x400',
            description: 'Uma poderosa maga com um passado misterioso.',
        },
        
        
    ];

    const carouselRef = useRef(null);
    const [scrollDirection, setScrollDirection] = useState(null);
    const scrollSpeed = 2;

    useEffect(() => {
        let scrollInterval;

        if (scrollDirection && carouselRef.current) {
            scrollInterval = setInterval(() => {
                const carousel = carouselRef.current;
                if (scrollDirection === 'left') {
                    carousel.scrollLeft -= scrollSpeed;
                } else if (scrollDirection === 'right') {
                    carousel.scrollLeft += scrollSpeed;
                }
            }, 16); // Aproximadamente 60 FPS
        }

        return () => clearInterval(scrollInterval);
    }, [scrollDirection]);

    const handleMouseMove = (event) => {
        const { clientX } = event;
        const carousel = carouselRef.current;

        if (carousel) {
            const { left, width } = carousel.getBoundingClientRect();
            const midpoint = left + width / 2;

            if (clientX < midpoint) {
                setScrollDirection('left');
            } else {
                setScrollDirection('right');
            }
        }
    };

    const handleMouseLeave = () => {
        setScrollDirection(null); // Para o scroll automático ao sair
    };

    return (
        <GrupoContainer>
            <h1>Página sobre os Players</h1>
            <p>Conheça a rapazeada.</p>
            <CarouselContainer
                ref={carouselRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {players.map((player, index) => (
                    <Card key={index}>
                        <Inner className="inner">
                            <Front>
                                <Image src={player.image} alt={player.name} />
                                <h2>{player.name}</h2>
                            </Front>
                            <Back>
                                <h2>{player.name}</h2>
                                <p>{player.description}</p>
                            </Back>
                        </Inner>
                    </Card>
                ))}
            </CarouselContainer>
        </GrupoContainer>
    );
};

export default Grupo;
