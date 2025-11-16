import { motion } from "framer-motion";

export default function CTAProBW() {
  return (
    <section className="py-28 px-6 bg-black text-white text-center relative overflow-hidden">
      {/* Fondo gris sutil */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 200, ease: "linear" }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          ¿Listo para tu nueva web?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-10 opacity-80 text-lg md:text-xl"
        >
          Creamos sitios elegantes y funcionales que reflejan tu marca.
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contacto"
          className="px-10 py-4 bg-white text-black font-bold rounded-full shadow-lg hover:bg-gray-200 transition text-lg"
        >
          Empezar Ahora
        </motion.a>
      </div>
    </section>
  );
}
