import React from "react";


import reactImage from "../assets/react.png";
import express from "../assets/express.png"
import python from "../assets/python.png"
import sqlserver from "../assets/sqlserver.png"
import mysql from "../assets/mysql.png"
import next from "../assets/images.png"
import linux from "../assets/linux.png"
import postman from "../assets/postman.png"
import spring from "../assets/spring.png"
import selenium from "../assets/selenium.png"
import tailwind from "../assets/tailwind.png";
import cypress from "../assets/cypress.png";
import node from "../assets/node.png";
import laravel from "../assets/Laravel.svg.png"
function tecnologias() {

  const techs = [
    
    {
      id: 1,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 2,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 3,
      src: express,
      title: "Express JS",
      style: "shadow-white",
    },
    
    {
      id: 4,
      src: python,
      title: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 5,
      src: postman,
      title: "Postman",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      src: selenium,
      title: "Selenium",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: sqlserver,
      title: "SQLServer",
      style: "shadow-zinc-400",
    },
    
    {
      id: 8,
      src: mysql,
      title: "MySQL",
      style: "shadow-cyan-400",
    },
    {
      id: 9,
      src: linux,
      title: "Linux",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: cypress,
      title: "Cypress",
      style: "shadow-gray-400",
    },
    
   
    {
      id: 11,
      src: node,
      title: "NodeJs",
      style: "shadow-green-500 ",
      
    },
    {
      id: 12,
      src: laravel,
      title: "Laravel",
      style: "shadow-violet-500 ",
      
    },
    {
      id: 13,
      src: next,
      title: "NextJs",
      style: "shadow-gray-500 ",
      
    },
    {
      id: 14,
      src: spring,
      title: "Spring",
      style: "shadow-green-500 ",
      
    },
  ];

  return (
    <div
      name="TECNOLOGIAS"
      className="h-screen w-full bg-gradient-to-b from-color2 via-color1  to-color0 md:h-screen"
    >
      <div  className="max-w-screen-lg mx-auto p-2 flex flex-col justify-center w-full h-full text-white">
        <div  >
          <p  name="experiencia" className="text-4xl font-bold border-b-4 border-blue-500 p-2 inline text-color0">
            Experiencia
          </p>
          <p   className="py-8">Estas son algunas tecnologias con las cuales eh venido trabajando</p>
        </div>

        <div  className="w-full grid grid-cols-5 sm:grid-cols-5 gap-5 text-center py-2 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default tecnologias;
