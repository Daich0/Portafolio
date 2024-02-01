import React from 'react'

function contactame() {
  return (
    <div   name="CONTACTAME" className="h-screen w-full bg-gradient-to-b from-color0 via-color1  to-color2 md:h-screen">

<div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="p-[-10] ">
          <p className="text-4xl  font-bold inline border-b-4 border-blue-500 text-white  ">
            Contactame
          </p>
          <p className="py-6 font-semibold text-white">¿Quieres saber mas de mi y mis servicios? Escribeme estoy disponible para una reunion o llamada</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/803d0149-3c9e-463d-b6f5-51a7334cd960"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
           />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
           ></textarea>

            <button className=" animate-bounce text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Hablemos!
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default contactame