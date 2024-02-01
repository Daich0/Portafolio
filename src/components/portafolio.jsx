import React from 'react'
import { v4 as uuidv4 } from "uuid";
import Card from "./card";
import Carousel from "./carousel";
function portafolio() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen="/pokemon.PNG" title="PokeInfoApp" descripcion="Aplicativo web que permite buscar pokemones de la pokeapi " live ="https://pokemon-edutroy.vercel.app/" code="https://github.com/Edutroy/pokemon"/>
      )
    },
    { 
      key: uuidv4(),
      content: (
        <Card imagen="/sistema_venta_botica_1.png" title="Zorritos"  descripcion="Aplicativo de escritorio con base de datos que permite la gestion de ventas,personal y productos de una tienda de licores "live ="https://drive.google.com/file/d/1CI_OZ1yyMH7NXx17WMcaiaBmNOwVxoMo/view?usp=drive_link" code="https://github.com/Edutroy/Sistema_de_Venta_Botica#sistema-de-venta-de-boticas-del-pueblo"/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="/parking1.png" title="ParkingIA"  descripcion=" Red neuronal convolucional basada en yolov5 que detecta estacionamientos vacios y ocupados" live ="https://drive.google.com/file/d/1eOXj-zcL-n08ghGMaPpB2YekKK29sA6x/view?usp=drive_link" code="https://github.com/Edutroy/IA_Parking"/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="/links-app.png" title="LinksApp" descripcion=" Aplicativo web de almacenamiento de links mediante sesiones y conexion con base de datos" live ="https://drive.google.com/file/d/14l4KWecbKjLP86bpu_UVlAna5gwca387/view?usp=drive_link" code="https://github.com/Edutroy/Links-App" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="/foods.png"  title="MikhunApp" descripcion=" Aplicativo web de busqueda de recetas andinas peruanas mediante ingredientes" live ="https://drive.google.com/file/d/1MUvQIoNWtzZ78Oj_1p7JmGUdqeBtH6xc/view?usp=drive_link" code="https://github.com/Edutroy/ComidasAndinas_App"/>
      )
    },

    {
      key: uuidv4(),
      content: (
        <Card imagen="/choclitos.PNG"  title="Next_App" descripcion=" Aplicativo web de gestion de productos de tienda virtual con sesiones" live ="https://drive.google.com/file/d/15Ulobnd0uz4sa-4RVIqWZh6c5t_5cL4o/view?usp=drive_link" code="https://github.com/Edutroy/ECOMERCEAPP"/>
      )
    }
  ];

  return (
    <div
      name="PORTAFOLIO"
      className="h-screen w-full bg-gradient-to-b from-color0 via-color1  to-color2 md:h-screen"
    >
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500 text-white">
            Portafolio
          </p>
        </div>
        <div className="bottom-4">
          <Carousel
            cards={cards}
            height="650px"
            width="80%"
            margin="0 auto"
            offset={200}
            showArrows={false}
            top="8"
          />
        </div>
      </div>
    </div>
  );
}

export default portafolio