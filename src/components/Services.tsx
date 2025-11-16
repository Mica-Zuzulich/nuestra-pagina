import { motion } from "framer-motion";

const services = [
  { title: "Diseño Web", desc: "Landing, ecommerce y sitios corporativos.", icon: "🌐" },
  { title: "Branding", desc: "Identidad visual completa para tu marca.", icon: "🎨" },
  { title: "Marketing Digital", desc: "Estrategias que convierten visitantes en clientes.", icon: "📈" },
];

export default function Services() {
  return (
    <section id="servicios" className="py-28 px-6 bg-white">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-black"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Nuestros Servicios
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((s, index) => (
          <motion.div
            key={index}
            className="p-8 bg-gray-100 rounded-xl text-center shadow-lg cursor-pointer hover:scale-105 transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="text-5xl mb-4">{s.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-black">{s.title}</h3>
            <p className="text-gray-700">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
