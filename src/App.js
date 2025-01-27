import Header from './componentes/Header';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componentes/Home/Home';
import Mapa from './componentes/Mapa/Mapa';
import Historia from './componentes/Historia/Historia';
import Biblioteca from './componentes/Biblioteca/Biblioteca';
import Grupo from './componentes/Grupo/Grupo';
import Footer from './componentes/Footer/Footer';

// Importações das páginas individuais dos livros
import Grimorio from './componentes/Biblioteca/Grimorio';
import Prosas from './componentes/Biblioteca/Prosas';
import Bestiario from './componentes/Biblioteca/Bestiario';
import ConstruirMaquinas from './componentes/Biblioteca/ConstruirMaquinas';
import TeoriaDasFrutas from './componentes/Biblioteca/TeoriaDasFrutas';

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
                    <Route path="/biblioteca" element={<Biblioteca />} />
                    <Route path="/grupo" element={<Grupo />} />

                    {/* Rotas individuais dos livros */}
                    <Route path="/biblioteca/grimorio" element={<Grimorio />} />
                    <Route path="/biblioteca/prosas" element={<Prosas />} />
                    <Route path="/biblioteca/bestiario" element={<Bestiario />} />
                    <Route path="/biblioteca/construir-maquinas" element={<ConstruirMaquinas />} />
                    <Route path="/biblioteca/teoria-das-frutas" element={<TeoriaDasFrutas />} />
                </Routes>
                <Footer />
            </AppContainer>
        </Router>
    );
}

export default App;
