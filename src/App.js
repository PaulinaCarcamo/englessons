// import './App.css';
import Hero from './components/Hero';
import TopNav from './components/TopNav';
import Section from './components/Section';
import './styles/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Email from './components/Email';


const App = () => {
  return (
    <div>
      <div className="header">
        <TopNav />
        <Hero />
      </div>
      <Section />
      <Cards />
      <Email />
      <Footer />
    </div>
  );
}

export default App;
