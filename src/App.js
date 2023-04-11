// import './App.css';

import Header from './components/Header';
import About from './components/About';
import Featured from './components/Featured';
import Placement from './components/Placement';
import Footer from './components/Footer';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css'
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      {/* <TopNav /> */}
      <Header />
      <About />
      <Featured />
      <Placement />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
