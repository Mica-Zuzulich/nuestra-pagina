import { motion } from "framer-motion";

export default function ContactoBW() {
  return (
    <section className="py-20 px-6 bg-white" id="contacto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-black">Contáctanos</h2>
        <p className="mb-10 text-gray-700">
          ¿Listo para llevar tu marca al siguiente nivel? Escríbenos y empecemos juntos.
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Tu nombre"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            placeholder="Tu correo"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <textarea
            placeholder="Tu mensaje"
            rows={5}
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-8 py-3 bg-black hover:bg-gray-800 rounded-full text-white text-lg shadow-lg transition"
          >
            Enviar
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
