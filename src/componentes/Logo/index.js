import logo from '../../imagens/Logo_Circulo.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImage = styled.img`
    margin-right: 10px;
`

function Logo () {
    return(
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='logo'
            />
            <p><strong>Os</strong>RPjas</p>
        </LogoContainer>
    )
}

export default Logo