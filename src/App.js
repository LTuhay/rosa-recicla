import './Components/styles.css';
import Container from './Components/Container';
import About from './Components/About';
import Header from './Components/Header';

function App() {
  const photoUrl = '/assets/photo.jpg';

  return (
    <div className="app">
      <Container>
        <Header title="Rosa Recicla" photoUrl={photoUrl} />
        <About />
      </Container>
    </div>
  );
}
export default App;
