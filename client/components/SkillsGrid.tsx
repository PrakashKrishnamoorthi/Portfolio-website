import { motion } from "framer-motion";
import { useState } from "react";

const skillCategories = [
  {
    id: 1,
    title: "Programming",
    icon: "💻",
    color: "#00ffff",
    skills: [
      { name: "Python 3", icon: "🐍" },
      { name: "Embedded C", icon: "⚡" },
      { name: "C++", icon: "⚙️" },
      { name: "JavaScript", icon: "🟨" },
    ],
  },
  {
    id: 2,
    title: "ML Frameworks",
    icon: "🤖",
    color: "#9333ea",
    skills: [
      { name: "PyTorch", icon: "🔥" },
      { name: "TensorFlow", icon: "📊" },
      { name: "Scikit-learn", icon: "📈" },
    ],
  },
  {
    id: 3,
    title: "NLP/GenAI",
    icon: "🧠",
    color: "#ec4899",
    skills: [
      { name: "Transformers", icon: "🔄" },
      { name: "OpenAI GPT-3.5", icon: "🤖" },
      { name: "Google GenAI", icon: "🎯" },
    ],
  },
  {
    id: 4,
    title: "Data Handling",
    icon: "📊",
    color: "#10b981",
    skills: [
      { name: "Pandas", icon: "🐼" },
      { name: "NumPy", icon: "🔢" },
      { name: "SQL", icon: "🗃️" },
      { name: "Polaris", icon: "⭐" },
      { name: "PyDoc", icon: "📚" },
    ],
  },
  {
    id: 5,
    title: "APIs & Deployment",
    icon: "🚀",
    color: "#f59e0b",
    skills: [
      { name: "REST APIs", icon: "🌐" },
      { name: "Docker", icon: "🐳" },
    ],
  },
  {
    id: 6,
    title: "Cloud & Tools",
    icon: "☁️",
    color: "#ef4444",
    skills: [
      { name: "AWS", icon: "☁️" },
      { name: "Git", icon: "📂" },
      { name: "GitHub", icon: "🐙" },
      { name: "Jupyter", icon: "📓" },
      { name: "Vite", icon: "⚡" },
      { name: "VS Code", icon: "🔧" },
    ],
  },
  {
    id: 7,
    title: "Hardware & Others",
    icon: "🔧",
    color: "#8b5cf6",
    skills: [
      { name: "Mavlink", icon: "📡" },
      { name: "Raspberry Pi", icon: "🍓" },
      { name: "Lidar LD-19", icon: "📏" },
      { name: "NVIDIA Jetpack", icon: "🎮" },
      { name: "OpenCV", icon: "👁️" },
      { name: "Mediapipe", icon: "🤚" },
    ],
  },
];

export default function SkillsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="relative py-20 px-6 bg-gradient-to-b from-background to-gray-900/50"
    >
      <div className="max-w-7xl mx-auto">
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                y: -10,
                rotateY: 5,
              }}
              className={`group relative p-6 rounded-2xl glass-effect border transition-all duration-500 cursor-pointer ${
                selectedCategory === category.id
                  ? `border-[${category.color}] shadow-[0_0_50px_rgba(${category.color.slice(1)},0.3)]`
                  : "border-gray-700 hover:border-gray-600"
              }`}
              style={{
                background: `linear-gradient(135deg, ${category.color}05, ${category.color}10)`,
              }}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category.id ? null : category.id,
                )
              }
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-3"
                  style={{
                    background: `linear-gradient(135deg, ${category.color}40, ${category.color}80)`,
                    boxShadow: `0 0 20px ${category.color}60`,
                  }}
                >
                  <span className="text-xl">{category.icon}</span>
                </motion.div>
                <h3
                  className="text-lg font-bold group-hover:text-glow transition-all duration-300"
                  style={{ color: category.color }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: index * 0.1 + skillIndex * 0.05,
                      duration: 0.4,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center p-3 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 group/skill"
                  >
                    <span className="text-lg mr-3 group-hover/skill:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Hover Effects */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `0 0 60px ${category.color}`,
                }}
              />

              {/* Floating Particles */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
                className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-50"
                style={{ backgroundColor: category.color }}
              />

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full opacity-40"
                style={{ backgroundColor: category.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl glass-effect border border-cyan-500/30"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
              <div className="text-gray-300">Years Experience</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl glass-effect border border-purple-500/30"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
              <div className="text-gray-300">Technologies</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl glass-effect border border-pink-500/30"
            >
              <div className="text-3xl font-bold text-pink-400 mb-2">10+</div>
              <div className="text-gray-300">AI/ML Projects</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl glass-effect border border-green-500/30"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">2</div>
              <div className="text-gray-300">Industry Internships</div>
            </motion.div>
          </div>

          <motion.a
            href="https://cdn.builder.io/o/assets%2Fb26c4fb6e1e04ca4b8712ea381757839%2F716554f36880445ebf244e85ea1e14f8?alt=media&token=df47440c-ef85-40d1-8420-b56d1059e3ad&apiKey=b26c4fb6e1e04ca4b8712ea381757839"
            download="Prakash_K_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl font-bold text-white text-lg transition-all duration-300 hover:shadow-[0_0_60px_rgba(34,211,238,0.5)] overflow-hidden"
          >
            <span className="relative z-10">Download Technical Resume</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
