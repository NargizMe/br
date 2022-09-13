import {Project} from './components/project';
import {Navbar} from './components/navbar';
import {Header} from './components/header';
import {Location} from './components/location';
import {About} from './components/about';
import {Contact} from './components/contact';
import {Footer} from './components/footer';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <div className="w3-content w3-padding" style={{maxWidth:'1564px'}}>
        <Project/>
        <About/>
        <Contact/>
        <Location/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
