// import './App.css';
import Header from './components/Header';
import About from './components/About';
import Featured from './components/Featured';
import Contact from './components/Contact';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css'

const App = () => {
  return (
    <div>
      {/* <TopNav /> */}
      <Header />
      <About />
      <Featured />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
