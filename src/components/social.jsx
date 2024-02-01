import {useEffect,useRef} from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Social= () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/joeseeplopez/",
      style: "rounded-tr-md bg-blue-600",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Edutroy",
      style: "bg-[#212120]",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:lbeduardo8@gmail.com",
      style: "bg-[#31DA45]",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/1iKksHocxxTuTZ4hBECLLjLp_xWXROk7i/view?usp=sharing",
      style: "rounded-br-md bg-[#F08B26]",
    
    },
  ];

  const socialRef = useRef();

  useEffect(() => {
    const bounceInterval = setInterval(() => {
      socialRef.current.classList.add("bounce");
      setTimeout(() => {
        socialRef.current.classList.remove("bounce");
      }, 1500); // Duración de cada rebote
    }, 3000); 
    return () => clearInterval(bounceInterval);
}, []);

  return (
    <div   ref={socialRef} className={`lg:flex flex-col fixed ${
      // Agrega una clase para dispositivos móviles
      window.innerWidth < 768 ? "bottom-0 left-0" : "top-[35%] left-0"
    }`}>
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 " +
              " " + style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;