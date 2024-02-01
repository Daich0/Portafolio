
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaAlignJustify } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
function navbar({ setMobileMenuOpen, isMobileMenuOpen }) {

  const [scrolled, setScrolled] = useState(false);



  const links = [
      { id: 1, link: "HOME" },
      { id: 2, link: "SOBRE MI" },
      { id: 3, link: "PORTAFOLIO" },
      { id: 4, link: 'TECNOLOGIAS' },
      { id: 5, link: 'CONTACTAME' },
  ];

  
  useEffect(() => {
    // Función para detectar el evento de scroll y cambiar el estado "scrolled"
    function handleScroll() {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    // Agregar un event listener para el evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Retirar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  const handleMobileMenuToggle = () => {
    
    setMobileMenuOpen((prev) => !prev);
  };
  
  
  return (
    <header className="bg-color0 z-50 ">
      <nav  className={` flex fixed w-full h-14 z-50 md:h-14 md:fixed   ${scrolled ? "bg-color0 " : ""}`}
    >
      
      <p id ="nick_name" className="px-4 ml-auto text-4xl text-white">Taicho</p>
        <ul className="p-2 max-w mx-auto items-center justify-between hidden md:flex ">
          
          
{links.map(({ id, link})=>(
        <li 
        key ={id} 
        className ="px-4 cursor-pointer capitalize font-medium
         text-gray-400   hover:scale-300 hover:text-white hover:underline decoration-cyan-500 hover:underline-offset-8 hoverunderl duration-200"
         >
            <Link to={link} smooth duration={500}>
              {link}
            </Link> 
            </li>
        ))}
        </ul> 
        <div className=" md:hidden flex justify-end mx-4 py-1 w-full ">
      <button id="toggleBtn" onClick={handleMobileMenuToggle}>
      {isMobileMenuOpen ? (
              <AiOutlineClose className="text-4xl text-white" />
            ) : (
              <FaAlignJustify className="text-4xl text-white" />
            )}
      </button>
      {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-center justify-center top-14 left-0 bg-color1 absolute w-full h-dvh">
       
      {/*  md:hidden flex flex-col items-center justify-center absolute top-full left-0 w-full bg-nav */}
          {links.map(({ id, link }) => (
            <Link
              key={id}
              to={link}
              smooth
              duration={500}
              className="text-gray-400 mb-4 cursor-pointer w-full text-center py-8 text-3xl hover:text-white"
              onClick={handleMobileMenuToggle}
            >
              {link}
            </Link>
          ))}
        </div>
        )}
    </div>
    
 
      </nav>
    </header>
  );
}

export default navbar