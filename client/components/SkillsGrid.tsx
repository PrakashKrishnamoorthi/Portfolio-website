import { motion } from "framer-motion";

const skills = [
  // Programming
  { name: "Python 3", icon: "🐍", category: "Programming" },
  { name: "Embedded C", icon: "⚡", category: "Programming" },
  { name: "C++", icon: "⚙️", category: "Programming" },
  { name: "JavaScript", icon: "🟨", category: "Programming" },

  // ML Frameworks
  { name: "PyTorch", icon: "🔥", category: "ML Frameworks" },
  { name: "TensorFlow", icon: "📊", category: "ML Frameworks" },
  { name: "Scikit-learn", icon: "📈", category: "ML Frameworks" },

  // NLP/GenAI
  { name: "Transformers", icon: "🔄", category: "NLP/GenAI" },
  { name: "OpenAI GPT-3.5", icon: "🤖", category: "NLP/GenAI" },
  { name: "Google GenAI", icon: "🎯", category: "NLP/GenAI" },

  // Data Handling
  { name: "Pandas", icon: "🐼", category: "Data Handling" },
  { name: "NumPy", icon: "🔢", category: "Data Handling" },
  { name: "SQL", icon: "🗃️", category: "Data Handling" },
  { name: "Polaris", icon: "⭐", category: "Data Handling" },
  { name: "PyDoc", icon: "📚", category: "Data Handling" },

  // APIs & Deployment
  { name: "REST APIs", icon: "🌐", category: "APIs & Deployment" },
  { name: "Docker", icon: "🐳", category: "APIs & Deployment" },

  // Cloud & Tools
  { name: "AWS", icon: "☁️", category: "Cloud & Tools" },
  { name: "Git", icon: "📂", category: "Cloud & Tools" },
  { name: "GitHub", icon: "🐙", category: "Cloud & Tools" },
  { name: "Jupyter", icon: "📓", category: "Cloud & Tools" },
  { name: "Vite", icon: "⚡", category: "Cloud & Tools" },
  { name: "VS Code", icon: "🔧", category: "Cloud & Tools" },

  // Hardware & Others
  { name: "Mavlink", icon: "📡", category: "Hardware & Others" },
  { name: "Raspberry Pi", icon: "🍓", category: "Hardware & Others" },
  { name: "Lidar LD-19", icon: "📏", category: "Hardware & Others" },
  { name: "NVIDIA Jetpack", icon: "🎮", category: "Hardware & Others" },
  { name: "OpenCV", icon: "👁️", category: "Hardware & Others" },
  { name: "Mediapipe", icon: "🤚", category: "Hardware & Others" },
];

export default function SkillsGrid() {
  return (
    <section
      id="skills"
      className="relative py-20 px-6 bg-gradient-to-b from-background to-gray-900/50"
    >
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
              Technical Arsenal
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mastery in cutting-edge technologies that power the future of AI
          </p>
        </motion.div>

        {/* Skills Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative p-8 md:p-12 rounded-3xl glass-effect border border-gray-700/50 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"
        >
          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-600/20 blur-xl" />
          <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-600/20 blur-xl" />

          {/* Skills Grid */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0, rotateY: 180 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.03,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  rotateY: 15,
                  z: 50,
                }}
                className="group relative flex flex-col items-center p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-cyan-400/50 backdrop-blur-sm transition-all duration-300 cursor-pointer"
              >
                {/* Skill Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-4xl mb-3 group-hover:drop-shadow-lg"
                >
                  {skill.icon}
                </motion.div>

                {/* Skill Name */}
                <h3 className="text-xs md:text-sm font-semibold text-center text-gray-300 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Category Badge - Shows on Hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900/90 text-xs text-cyan-400 rounded-md whitespace-nowrap border border-cyan-400/30"
                >
                  {skill.category}
                </motion.div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gray-700/50"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">
                  5+
                </div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">
                  25+
                </div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-pink-400 mb-1">
                  10+
                </div>
                <div className="text-sm text-gray-400">AI/ML Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">
                  2
                </div>
                <div className="text-sm text-gray-400">
                  Industry Internships
                </div>
              </div>
            </div>
          </motion.div>

          {/* Download Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <motion.a
              href="https://cdn.builder.io/o/assets%2Fb26c4fb6e1e04ca4b8712ea381757839%2F716554f36880445ebf244e85ea1e14f8?alt=media&token=df47440c-ef85-40d1-8420-b56d1059e3ad&apiKey=b26c4fb6e1e04ca4b8712ea381757839"
              download="Prakash_K_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl font-bold text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] overflow-hidden"
            >
              <span className="relative z-10">Download Technical Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
