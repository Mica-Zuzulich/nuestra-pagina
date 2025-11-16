export default function FooterBW() {
  return (
    <footer className="bg-black text-white py-10 px-6 text-center">
      <div className="mb-4 flex justify-center gap-6">
        <a href="#inicio" className="hover:underline">Inicio</a>
        <a href="#servicios" className="hover:underline">Servicios</a>
        <a href="#portfolio" className="hover:underline">Portfolio</a>
        <a href="#contacto" className="hover:underline">Contacto</a>
      </div>
      <div className="flex justify-center gap-4 mb-4 text-2xl">
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
      <p className="text-gray-400">&copy; 2025 TuMarca. Todos los derechos reservados.</p>
    </footer>
  );
}
