import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    width: 100%;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    text-align: center;
    position: static;

    p {
        margin: 0;
        font-size: 0.875rem;

        @media (max-width: 768px) {
            font-size: 0.75rem;
        }
    }

    a {
        color:rgb(207, 100, 193);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

function Footer({ name = "Alex", profileLink = "https://www.linkedin.com/in/alexandre-lopes-97352b287/" }) {
    return (
        <FooterContainer>
            <p>
                &copy; {new Date().getFullYear()} Os RPjas. Todos os direitos reservados. Desenvolvido por{' '}
                <a href={profileLink} target="_blank" rel="noopener noreferrer">
                    {name}
                </a>.
            </p>
        </FooterContainer>
    );
}

export default Footer;
