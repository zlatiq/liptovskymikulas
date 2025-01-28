import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Attractions from './components/Attractions';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const AppWrapper = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333;
`;

function App() {
    return (
        <AppWrapper>
            <Header />
            <Hero />
            <About />
            <Attractions />
            <Gallery />
            <Footer />
        </AppWrapper>
    );
}

export default App;