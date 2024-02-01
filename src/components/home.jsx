import { useEffect, useState } from "react";
  import { TypeAnimation } from "react-type-animation";
  import { MdOutlineKeyboardArrowRight } from "react-icons/md";
  import { Link } from "react-scroll";
  import { motion } from "framer-motion";
  import VanillaTilt from "vanilla-tilt";

  function home({ isMobileMenuOpen}) {
    const [typewritingVisible, setTypewritingVisible] = useState(true);
    const typewritingSequence = [
      'Trainee Frontend',
      1000,
      'Trainee  Backend',
      1000,
      'Trainee Analytics',
      1000,
    ];
    const emptytypewritingSequence = [];
    
    useEffect(() => {
      // Oculta la animación cuando el menú móvil está abierto
      setTypewritingVisible(!isMobileMenuOpen);
    }, [isMobileMenuOpen]);
    
    
    useEffect(() => {
      VanillaTilt.init(document.querySelectorAll(".tiltcard"), {
        max: 20,
        speed: 200,
        scale:1.3,
        glare: true,
        transition:true,
        "max-glare": 0.5,
      });
    }, []);
  
   
    return (
      <div
        name="HOME"
        className="h-screen w-full bg-gradient-to-b from-color0 via-color1  to-color2 md:h-screen"
      >
        <motion.div
          initial={{ y: "600" }}
          animate={{ y: 0 , transition: { duration: 0.6 } }}
          className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row  md:max-w-screen  md:justify-between"
        >
          <div className="flex flex-col justify-between">
            <p className="text-blue-500">¡Hola! Permíteme presentarme: </p>
            <h1 className="pb-2 text-4xl sm:text-6xl font-bold text-white">
              Joeseep López
            </h1>

            {typewritingVisible && (
              <TypeAnimation
                sequence={typewritingSequence}
                wrapper="span"
                speed={30}
                className="text-4xl font-bold text-neutral-200 "
                repeat={Infinity}
              />
            )}

            <p className="text-gray-800 py-4 max-w-md text-justify font-semibold">
              Soy un universitario interesado en el desarrollo de software &
              ciencia de datos.Trabajo en aplicaciones usando herramientas como
              React,Tailwind, Boostrap, Nodejs,Java,Spring ,Python y mas.Dejame
              mostrarte...
            </p>
            <div>
              <Link
                to="PORTAFOLIO"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-sky-500 hover:bg-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                  {/*Que hace esto repasar  */}
                </span>
              </Link>
            </div>
          </div>

          <div className="tiltcard mx-auto items-center justify-center relative bottom-12 ">
            <div className="spinner relative right-4 top-12"> </div>
            <div className="cube left-72 relative bottom-4 ">
              <div className="cube__face" id="cube__face--front">
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
              </div>

              <div className="cube__face" id="cube__face--back">
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
              </div>

              <div className="cube__face" id="cube__face--right">
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
              </div>

              <div className="cube__face" id="cube__face--left">
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
              </div>

              <div className="cube__face" id="cube__face--top">
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
              </div>

              <div className="cube__face" id="cube__face--bottom">
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
                <span className="faceBox"></span>
              </div>
            </div>

            <img
              src="/yo.png"
              alt="my profile"
              className=" px-8 rounded-2xl  relative w-3/4 left-8 "
            />

            <div className="cube-loader">
              <div className="cube-top"></div>
              <div className="cube-wrapper">
                <span style={{ "--i": 0 }} className="cube-span"></span>
                <span style={{ "--i": 1 }} className="cube-span"></span>
                <span style={{ "--i": 2 }} className="cube-span"></span>
                <span style={{ "--i": 3 }} className="cube-span"></span>
              </div>
            </div>
            <div className="bar relative left-64  ">
    <div className="ball "></div>
</div>
          </div>
        </motion.div>
      </div>
    );
  }

  export default home