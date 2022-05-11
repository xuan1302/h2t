
import './App.css';
import './styles.css';
import './assets/css/style.scss';
import Header from './components/header';
import Footer from './components/footer';
import MainRouter from './routes/mainRouters';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MainRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
