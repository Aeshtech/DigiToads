import './App.css';
import Contacts from './components/Contacts';
import Contracts from './components/Contracts';
import Footer from './components/Footer';
import Header from './components/Header';
import HowToBuy from './components/HowToBuy';
import Section from './components/Section';

function App() {
  return (
    <>
      <Header />
      <Section />
      <HowToBuy />
      <Contracts/>
      <Contacts/>
      <Footer/>
    </>
  );
}

export default App;
