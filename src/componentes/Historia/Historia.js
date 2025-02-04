import React from 'react';
import styled from 'styled-components';

const HistoriaContainer = styled.div`
    color: white;
    text-align: center;
    padding: 50px 20px;
    background-color: #121212;
`;

const Section = styled.div`
    margin: 50px auto;
    padding: 20px;
    max: 800px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

    h2 {
        font-size: 2rem;
        margin-bottom: 15px;
    }

    p {
        font-size: 1.2rem;
        line-height: 1.5;
    }
`;

const RowContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    ${Section} {
        flex: 1;
        max-width: 48%;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        ${Section} {
            max-width: 100%;
        }
    }
`;

const Historia = () => {
    return (
        <HistoriaContainer>
            <h1>História do Mundo</h1>
            <Section>
                <h2>Acontecimentos</h2>
                <p>
                Bla bal bla bla bla ...
                </p>
            </Section>
            <RowContainer>
                <Section>
                    <h2>Geografia</h2>
                    <p>
                    Bla bal bla bla bla ...
                    </p>
                </Section>
                <Section>
                    <h2>Locais</h2>
                    <p>
                    Bla bal bla bla bla ...
                    </p>
                </Section>
            </RowContainer>
            <Section>
                <h2>NPCs</h2>
                <p>
                    Bla bal bla bla bla ...
                </p>
            </Section>
        </HistoriaContainer>
    );
};

export default Historia;
