
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/nav/nav';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contacts/Contact';
import Footer from './Components/footer/footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
