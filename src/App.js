import './App.css';
import Header from './componentes/Header';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componentes/Home/Home';
import Mapa from './componentes/Mapa/Mapa';
import Historia from './componentes/Historia/Historia';
import Grupo from './componentes/Grupo/Grupo';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, rgb(34, 1, 56) 35%, rgb(95, 0, 119));

    li {
        list-style: none;
    }
`;

function App() {
    return (
        <Router>
            <AppContainer>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mapa" element={<Mapa />} />
                    <Route path="/historia" element={<Historia />} />
                    <Route path="/grupo" element={<Grupo />} />
                </Routes>
            </AppContainer>
        </Router>
    );
}

export default App;
