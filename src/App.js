import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Featured from './components/Featured';
import Placement from './components/Placement';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <About />
      <Featured />
      <Placement />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
