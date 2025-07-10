import { motion } from "framer-motion";

const highlights = [
  {
    id: 1,
    title: "GenAI + n8n Automation",
    description:
      "Built no-code AI agents using n8n + OpenAI workflows for resume parsing, Telegram bots, and WhatsApp message automation.",
    icon: "🤖",
    color: "#00ffff",
    technologies: [
      "n8n",
      "OpenAI",
      "Telegram Bot API",
      "WhatsApp API",
      "GenAI",
    ],
  },
  {
    id: 2,
    title: "Mobile-Controlled Drone Navigation",
    description:
      "Simulated UAV flight control using MAVProxy, Mavlink, and custom AI models.",
    icon: "🚁",
    color: "#9333ea",
    technologies: ["MAVProxy", "Mavlink", "AI Models", "UAV Control", "Python"],
  },
];

export default function ProjectHighlights() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-gray-900/50 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Project Highlights
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge innovations in AI automation and autonomous systems
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.id}
              initial={{
                opacity: 0,
                y: 50,
                rotateY: index % 2 === 0 ? -15 : 15,
              }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                y: -10,
                rotateY: index % 2 === 0 ? 5 : -5,
              }}
              className="group relative p-8 rounded-2xl glass-effect border border-gray-700 hover:border-gray-600 transition-all duration-500"
              style={{
                background: `linear-gradient(135deg, ${highlight.color}05, ${highlight.color}10)`,
              }}
            >
              {/* Icon and Title */}
              <div className="flex items-center mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                  style={{
                    background: `linear-gradient(135deg, ${highlight.color}40, ${highlight.color}80)`,
                    boxShadow: `0 0 30px ${highlight.color}60`,
                  }}
                >
                  <span className="text-3xl">{highlight.icon}</span>
                </motion.div>
                <h3
                  className="text-2xl font-bold group-hover:text-glow transition-all duration-300"
                  style={{ color: highlight.color }}
                >
                  {highlight.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                {highlight.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {highlight.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: index * 0.2 + techIndex * 0.1,
                      duration: 0.4,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 text-sm rounded-full border text-gray-300 hover:text-white transition-colors duration-300"
                    style={{
                      borderColor: `${highlight.color}40`,
                      backgroundColor: `${highlight.color}10`,
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `0 0 60px ${highlight.color}`,
                }}
              />

              {/* Animated Background Pattern */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-20 h-20 rounded-full border-2 border-dashed"
                  style={{ borderColor: highlight.color }}
                />
              </div>

              {/* Floating Particles */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
                className="absolute bottom-6 right-6 w-3 h-3 rounded-full opacity-50"
                style={{ backgroundColor: highlight.color }}
              />

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                className="absolute top-20 left-6 w-2 h-2 rounded-full opacity-40"
                style={{ backgroundColor: highlight.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl font-bold text-white text-lg transition-all duration-300 hover:shadow-[0_0_60px_rgba(34,211,238,0.5)] overflow-hidden"
          >
            <span className="relative z-10">
              Let's Build Something Amazing Together
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
