import React from 'react'; 
import styled from 'styled-components';
import ArvoreTraad from '../../imagens/ArvoreDeTraad.png';

const HomeContainer = styled.div`
    color: white;
    text-align: center;
    width: 100vw;
    background-image: url(${ArvoreTraad});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

const Presentation = styled.div`
    max-width: 400px;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    margin-left: 20px;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 10px;
    }

    p {
        font-size: 1.2rem;
        line-height: 1.5;
    }
`;

const ContentSection = styled.div`
    width: 100%;
    padding: 50px 20px;
    background-color: #121212;
    color: white;
    text-align: center;

    h2 {
        font-size: 2rem;
        margin-bottom: 20px;
    }

    p {
        font-size: 1.2rem;
        line-height: 1.5;
        max-width: 800px;
        margin: 0 auto;
    }
`;

const Home = () => {
    return (
        <>
            <HomeContainer>
                <Presentation>
                    <h1>Bem-vindo ao Mundo de HG</h1>
                    <p>
                    Um mundo adaptado a D&D-5E, com novas mecânicas, novos itens, novos Deuses e com sua própria história.
                    </p>
                </Presentation>
            </HomeContainer>
            <ContentSection>
                <h2>O Mundo de Honra e Egoísmo</h2>
                <p>
                    Em HG, o equilíbrio entre luz e trevas está em constante disputa. 
                    Cada escolha que você faz afeta o destino deste mundo. 
                    Reinos antigos, criaturas lendárias e um destino a ser moldado esperam por você.
                </p>
            </ContentSection>
        </>
    );
};

export default Home;

