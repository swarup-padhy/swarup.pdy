import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import portfolioData from './data/portfolio.json';
import './styles/globalVariables.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main id="main-content">
        <Hero data={portfolioData.hero} />
        <About data={portfolioData.about} />
        <Skills data={portfolioData.skills} />
        <Projects data={portfolioData.projects} />
      </main>
      <Footer contact={portfolioData.contact} footer={portfolioData.footer} />
    </div>
  );
}

export default App;
