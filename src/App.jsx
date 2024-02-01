import { useState } from 'react'
import Navbar from './components/navbar';
import Home from './components/home';
import Sobremi from './components/sobremi';
import Proyectos from './components/portafolio';
import Tecnologias from './components/tecnologias';
import Contactame from './components/contactame';
import Social from './components/social';
import Fade_in from './animations/fade_in';
function App() {
 // const [count, setCount] = useState(0)
 const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
        <Home isMobileMenuOpen={isMobileMenuOpen} />
        <div className='bg-color2 h-1'></div>
      <Fade_in>
   
        <Sobremi />
      </Fade_in>
      <div className='bg-color0 h-1 '></div>
      <Fade_in>
        <Proyectos />
      </Fade_in>
      <div className='bg-color2 h-1 '></div>
      <Fade_in>
        <Tecnologias />
      </Fade_in>
      <div className='bg-color0 h-1 '></div>
      <Fade_in>
        <Contactame />
      </Fade_in>

      <Social />
    </>
  );
}

export default App
