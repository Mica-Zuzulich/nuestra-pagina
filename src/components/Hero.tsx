import { motion } from "framer-motion";

export default function HeroProBW() {
  return (
    <section className="h-screen relative flex items-center justify-center text-center px-6 bg-white overflow-hidden">
      
      {/* Fondo gris sutil */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gray-100 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 200, ease: "linear" }}
      />

      <div className="relative z-10 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-black mb-6 leading-tight"
        >
          Creamos tu Identidad Digital
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-700 mb-10"
        >
          Páginas web limpias, modernas y que convierten visitantes en clientes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contacto"
            className="px-8 py-3 bg-black text-white font-bold rounded-full shadow-lg hover:bg-gray-900 transition"
          >
            Comenzar
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#portfolio"
            className="px-8 py-3 border border-black text-black font-bold rounded-full hover:bg-black hover:text-white transition"
          >
            Ver Portfolio
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
