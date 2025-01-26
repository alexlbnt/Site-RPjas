import logo from '../../imagens/Logo_Circulo.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 30px;
`;

const LogoImage = styled.img`
    margin-right: 10px;
    height: 50px;
    width: auto;
`;

const LogoText = styled.p`
    font-weight: bold;
    color: rgb(255, 255, 255);
    margin: 0;

    & > strong {
        color:rgb(67, 0, 83); 
    }
`;

function Logo() {
    return (
        <LogoContainer>
            <LogoImage
                src={logo}
                alt="Logotipo da empresa"
            />
            <LogoText>
                <strong>Os</strong>RPjas
            </LogoText>
        </LogoContainer>
    );
}

export default Logo;
