import Navbar from './components/Navbar';
import Cover from './components/Cover';
import Events from './components/Events';
import About from './components/About';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

function App() {

  const [smallWindow,setSmallWindow] = useState((window.innerWidth > 640) ? false : true);
  const [mediumWindow, setMediumWindow] = useState((window.innerWidth > 768) ? false : true);
  const [largeWindow, setLargeWindow] = useState((window.innerWidth > 1024) ? false : true);
  const [eventPage, setEventPage] = useState(0);

  const windowSize = () => {
    ((window.innerWidth > 640) ? setSmallWindow(false) : setSmallWindow(true));
    ((window.innerWidth > 768) ? setMediumWindow(false) : setMediumWindow(true));
    ((window.innerWidth > 1024) ? setLargeWindow(false) : setLargeWindow(true));
  }

  useEffect(() => {
    window.addEventListener('resize', windowSize)
    return () => window.removeEventListener('resize', windowSize)
  })

  return (
    <div className="h-full w-full overflow-x-hidden select-none">
      <Navbar smallWindow={smallWindow} />
      <Cover/>
      <About />
      <Events eventPage={eventPage} setEventPage={(eventPage) => setEventPage(eventPage)} smallWindow={smallWindow} mediumWindow={mediumWindow} largeWindow={largeWindow}/>
      <Gallery smallWindow={smallWindow} mediumWindow={mediumWindow} largeWindow={largeWindow} />
      <Team />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
