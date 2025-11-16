import { motion } from "framer-motion";

const steps = [
  { step: "1", title: "Planificación", desc: "Entendemos tu marca y objetivos." },
  { step: "2", title: "Diseño", desc: "Creamos prototipos y UI elegante." },
  { step: "3", title: "Desarrollo", desc: "Sitios web rápidos y responsivos." },
  { step: "4", title: "Entrega", desc: "Lanzamiento y soporte inicial." },
];

export default function Process() {
  return (
    <section id="proceso" className="py-28 px-6 bg-gray-50">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-black"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Nuestro Proceso
      </motion.h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((s, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-xl shadow-lg text-center cursor-pointer hover:scale-105 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="text-3xl font-bold mb-2 text-black">{s.step}</div>
            <h3 className="text-xl font-semibold mb-2 text-black">{s.title}</h3>
            <p className="text-gray-700">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
