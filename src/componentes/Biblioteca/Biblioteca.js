import React from 'react';
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
        margin-bottom: 20px;
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
    const navigate = useNavigate(); // Hook para navegar entre as rotas

    return (
        <BibliotecaContainer>
            <h1>Biblioteca</h1>
            <div className="livros">
                {livros.map((livro, index) => (
                    <div
                        key={index}
                        className="livro"
                        onClick={() => navigate(livro.rota)} // Redireciona para a rota do livro
                    >
                        {livro.titulo}
                    </div>
                ))}
            </div>
        </BibliotecaContainer>
    );
};

export default Biblioteca;
