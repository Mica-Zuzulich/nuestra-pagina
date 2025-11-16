import { motion } from "framer-motion";

export default function PortfolioDestacado() {
  return (
    <section
      id="portfolio"
      className="py-28 px-6 bg-white text-black"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Proyecto Destacado
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200 cursor-pointer hover:shadow-2xl transition"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="relative w-full h-64 md:h-96 overflow-hidden">
          <img
            src="/assets/proj1.png"  // Cambialo por la imagen real de tu proyecto
            alt="Proyecto Rizzi Inversiones"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 bg-gray-50">
          <h3 className="text-3xl font-bold mb-4">Rizzi Inversiones</h3>
          <p className="text-lg text-gray-700 mb-4">
            Sitio web dinámico para Rizzi Inversiones: diseño elegante, estructura clara y enfoque profesional para reflejar su marca de inversiones.
          </p>
          <a
            href="https://rizziinversiones.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-900 transition"
          >
            Ver sitio en vivo
          </a>
        </div>
      </motion.div>
    </section>
  );
}
