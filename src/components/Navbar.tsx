import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-purple-600">TuMarca</div>
        <div className="hidden md:flex space-x-6">
          <a href="#inicio" className="hover:text-purple-600 transition">Inicio</a>
          <a href="#servicios" className="hover:text-purple-600 transition">Servicios</a>
          <a href="#portfolio" className="hover:text-purple-600 transition">Portfolio</a>
          <a href="#proceso" className="hover:text-purple-600 transition">Proceso</a>
          <a href="#contacto" className="hover:text-purple-600 transition">Contacto</a>
        </div>
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <div className="space-y-1 cursor-pointer">
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-center space-y-4 py-4">
          <a href="#inicio" className="hover:text-purple-600 transition">Inicio</a>
          <a href="#servicios" className="hover:text-purple-600 transition">Servicios</a>
          <a href="#portfolio" className="hover:text-purple-600 transition">Portfolio</a>
          <a href="#proceso" className="hover:text-purple-600 transition">Proceso</a>
          <a href="#contacto" className="hover:text-purple-600 transition">Contacto</a>
        </div>
      )}
    </nav>
  );
}
