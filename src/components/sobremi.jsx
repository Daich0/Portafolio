import {useEffect}from 'react'
import { motion ,useAnimation} from "framer-motion";
import Social from "./social.jsx";

function sobremi() {
 
 /*  const controls = useAnimation();

  
  useEffect(() => {
    const runAnimation = async () => {
      await controls.start({
        y: ['-30%', '30%', '-35%'],
        x: ['-30%', '30%', '-35%'], // En dispositivos móviles, mueve el elemento horizontalmente
        
        transition: {
          duration: 3 , // Duración total de la animación (ida y vuelta)
          ease: 'linear', // Hace que el movimiento sea lineal
        },
      });

      // Reinicia la animación al completarse
      runAnimation();
    };

    runAnimation();
  }, [controls]); */

  return (
    <div
      name="SOBRE MI"
      className="h-screen w-full bg-gradient-to-b from-color2 via-color1  to-color0 md:h-screen"
    >
      <div className="max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-16">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500 text-color0">
            Sobre mi
          </p>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold text-gray-300">
            <p>
              Soy Joeseep .Si ! mi nombre puede ser inusual, pero es solo una de
              las cosas que me hace unico.
            </p>
          </div>
   
         {/*  <motion.div
              animate={controls}
              className="bg-color4 w-2 h-64 absolute  md:left-72 md:ml-96"
          /> */}
          <div>
            <p className='text-justify  pt-8 font-semibold'>
              Me encanta explorar nuevos géneros musicales, especialmente el
              indie & pop. Disfruto aprender nuevas tecnologías y enfrentar
              retos. ¿Tienes algún
              reto en mente?
            </p>
          </div>
      {/*     <div className=''><Social/></div> */}

          
        </div>
      </div>
    </div>
  );
}

export default sobremi