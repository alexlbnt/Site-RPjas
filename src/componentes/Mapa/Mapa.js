import React, { useState } from 'react';
import styled from 'styled-components';
import MapaBackground from '../../imagens/Mapa-Background.png';


const MapaContainer = styled.div`
    color: white;
    text-align: center;
    padding: 20px;
    width: 100vw;
    height: 120vh;
    background-image: url(${MapaBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: local;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        padding: 10px;
        h1 {
            font-size: 1.5rem;
        }
        p {
            font-size: 1rem;
        }
    }
`;

const DetalhesContainer = styled.div`
    margin-top: 20px;
    background: rgba(0, 0, 0, 0.6);
    padding: 15px;
    border-radius: 10px;
    max-width: 500px;
    text-align: left;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
`;

const BotaoMapa = styled.button`
    position: absolute;
    background-color: rgb(67, 0, 83);
    color: black;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.2);
    }
`;

const Mapa = () => {
    const [informacaoRegiao, setInformacaoRegiao] = useState(null);

    const regioes = [
        { id: 1, nome: 'Norte', descricao: 'Região cheia de picos nevados e vales profundos.', top: '30%', left: '40%' },
        { id: 2, nome: 'Sul', descricao: 'Uma densa floresta com fauna diversificada.', top: '50%', left: '20%' },
        { id: 3, nome: 'Leste', descricao: 'Território árido com vastas dunas de areia.', top: '70%', left: '50%' },
        { id: 4, nome: 'Oeste', descricao: 'Campos verdes, bosques e plantações fartas.', top: '60%', left: '80%' },
    ];

    const exibirInformacao = (regiao) => {
        setInformacaoRegiao(regiao);
    };

    return (
        <MapaContainer aria-label="Mapa interativo do mundo">
            <h1>Mapa do Mundo</h1>
            <p>Visualize as terras por onde sua jornada o levará.</p>

            {regioes.map((regiao) => (
                <BotaoMapa
                    key={regiao.id}
                    style={{ top: regiao.top, left: regiao.left }}
                    onClick={() => exibirInformacao(regiao)}
                    aria-label={`Mais informações sobre ${regiao.nome}`}
                >
                    i
                </BotaoMapa>
            ))}

            {informacaoRegiao && (
                <DetalhesContainer>
                    <h2>{informacaoRegiao.nome}</h2>
                    <p>{informacaoRegiao.descricao}</p>
                </DetalhesContainer>
            )}
        </MapaContainer>
    );
};

export default Mapa;