import React, { useState } from 'react';
import styled from 'styled-components';

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
        perspective: 1000px;
        cursor: pointer;
    }

    .conteudo-livro {
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.8s;
        transform: ${(props) => (props.aberto ? 'rotateY(180deg)' : 'rotateY(0deg)')};
    }

    .pagina {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(54, 25, 6, 0.9);
        border: 1px solid #ccc;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        backface-visibility: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 10px;
    }

    .frente {
        font-size: 1.2rem;
        font-weight: bold;
    }

    .verso {
        transform: rotateY(180deg);
    }
`;

const livros = [
    {
        titulo: 'Grimório de Garimf',
        descricao: 'Um livro antigo contendo segredos de magias perdidas.'
    },
    {
        titulo: 'Prosas e Trovaduras de Pervo Bitny',
        descricao: 'Registros das aventuras de heróis lendários do passado.'
    },
    {
        titulo: 'Bestiário de Salomão',
        descricao: 'Um guia ilustrado das criaturas magicas que habitam o mundo.'
    },
    {
        titulo: 'Como Construir Maquinas',
        descricao: 'Formulas e instruções sobre como fabricar as invenções de Altair.'
    },
    {
        titulo: 'Teoria das Frutas',
        descricao: 'Documentos que catalogam todas as frutas magicas do mundo de HG.'
    }
];

const Biblioteca = () => {
    const [livroAberto, setLivroAberto] = useState(null);

    const toggleLivro = (index) => {
        setLivroAberto(livroAberto === index ? null : index);
    };

    return (
        <BibliotecaContainer>
            <h1>Biblioteca</h1>
            <div className="livros">
                {livros.map((livro, index) => (
                    <div
                        key={index}
                        className="livro"
                        onClick={() => toggleLivro(index)}
                    >
                        <div className="conteudo-livro" style={{ transform: livroAberto === index ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
                            <div className="pagina frente">
                                {livro.titulo}
                            </div>
                            <div className="pagina verso">
                                {livro.descricao}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </BibliotecaContainer>
    );
};

export default Biblioteca;
