import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BibliotecaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: white;
    height: 78%;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 10px;
    }

    .apresentacao {
        max-width: 600px;
        text-align: center;
        background: rgba(255, 255, 255, 0.1);
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin-bottom: 30px;
        font-size: 1.2rem;
    }

    .livros {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }

    .livro {
        width: 200px;
        height: 300px;
        background: rgba(56, 25, 4, 0.9);
        border: 1px solid #ccc;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        cursor: pointer;
        color: white;
        font-size: 1.2rem;
        font-weight: bold;
        transition: transform 0.2s ease, background 0.3s ease;

        &:hover {
            background: rgba(80, 35, 10, 1);
            transform: scale(1.05);
        }

        &:focus {
            outline: 2px solid white;
        }
    }
`;

const livros = [
    { titulo: 'Grimório de Garimf', rota: '/biblioteca/grimorio' },
    { titulo: 'Prosas e Trovaduras', rota: '/biblioteca/prosas' },
    { titulo: 'Bestiário de Salomão', rota: '/biblioteca/bestiario' },
    { titulo: 'Como Construir Máquinas', rota: '/biblioteca/construir-maquinas' },
    { titulo: 'Teoria das Frutas', rota: '/biblioteca/teoria-das-frutas' },
];

const Biblioteca = () => {
    const navigate = useNavigate();

    const handleNavigation = useCallback((rota) => {
        navigate(rota);
    }, [navigate]);

    return (
        <BibliotecaContainer>
            <h1>Biblioteca</h1>
            <div className="apresentacao">
                Bem-vindo à nossa biblioteca virtual! Aqui contém todos os livros autorais do mundo de HG criados pelo Mestre e pelos Players. Clique em um livro para ler.
            </div>
            <div className="livros">
                {livros.map((livro, index) => (
                    <div
                        key={index}
                        className="livro"
                        role="button"
                        tabIndex="0"
                        onClick={() => handleNavigation(livro.rota)}
                        onKeyDown={(e) => e.key === 'Enter' && handleNavigation(livro.rota)}
                    >
                        {livro.titulo}
                    </div>
                ))}
            </div>
        </BibliotecaContainer>
    );
};

export default Biblioteca;
