import React, { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg'
import Hero from './Components/Hero';
import Who from './Components/Who';
import Testimonials from './Components/Testimonials';
import LoadingPage from './Components/Loadingpage';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Services from './Components/Services';
// import Arrow from './Components/Arrow';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div> {loading ? <LoadingPage /> : <div>

      <Hero />
      <Who />
      <Services />
      <Projects />

      <Testimonials />

      <Footer />
    </div>}
    </div>

  )
}

export default App
