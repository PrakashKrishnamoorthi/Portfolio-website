import { motion } from "framer-motion";
import { useState } from "react";

const skillCategories = [
  {
    id: 1,
    title: "AI/ML Frameworks",
    icon: "🤖",
    color: "#00ffff",
    skills: [
      { name: "PyTorch", level: 95, icon: "🔥" },
      { name: "TensorFlow", level: 90, icon: "📊" },
      { name: "Scikit-learn", level: 88, icon: "📈" },
      { name: "OpenCV", level: 85, icon: "👁️" },
      { name: "Hugging Face", level: 82, icon: "🤗" },
    ],
  },
  {
    id: 2,
    title: "Programming Languages",
    icon: "💻",
    color: "#9333ea",
    skills: [
      { name: "Python", level: 95, icon: "🐍" },
      { name: "JavaScript", level: 88, icon: "⚡" },
      { name: "Java", level: 85, icon: "☕" },
      { name: "C/C++", level: 80, icon: "⚙️" },
      { name: "SQL", level: 85, icon: "🗃️" },
    ],
  },
  {
    id: 3,
    title: "Cloud & DevOps",
    icon: "☁️",
    color: "#ec4899",
    skills: [
      { name: "AWS", level: 78, icon: "🌐" },
      { name: "Docker", level: 82, icon: "🐳" },
      { name: "Kubernetes", level: 75, icon: "⚙️" },
      { name: "Git/GitHub", level: 92, icon: "📂" },
      { name: "CI/CD", level: 80, icon: "🔄" },
    ],
  },
  {
    id: 4,
    title: "Web Technologies",
    icon: "🌐",
    color: "#10b981",
    skills: [
      { name: "React.js", level: 90, icon: "⚛️" },
      { name: "Node.js", level: 85, icon: "💚" },
      { name: "FastAPI", level: 88, icon: "🚀" },
      { name: "Spring Boot", level: 82, icon: "🍃" },
      { name: "MongoDB", level: 80, icon: "🍃" },
    ],
  },
  {
    id: 5,
    title: "AI/ML Specializations",
    icon: "🧠",
    color: "#f59e0b",
    skills: [
      { name: "Natural Language Processing", level: 90, icon: "💬" },
      { name: "Computer Vision", level: 85, icon: "👁️" },
      { name: "Deep Learning", level: 88, icon: "🔮" },
      { name: "Neural Networks", level: 87, icon: "🕸���" },
      { name: "MLOps", level: 82, icon: "⚡" },
    ],
  },
  {
    id: 6,
    title: "Hardware & Embedded",
    icon: "🔧",
    color: "#ef4444",
    skills: [
      { name: "Jetson Nano", level: 85, icon: "🖥️" },
      { name: "Embedded C", level: 78, icon: "⚡" },
      { name: "Arduino", level: 80, icon: "🔌" },
      { name: "Sensor Integration", level: 83, icon: "📡" },
      { name: "Edge AI", level: 85, icon: "🎯" },
    ],
  },
];

const SkillBar = ({ skill, delay, color }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-300 font-medium flex items-center gap-2">
          <span>{skill.icon}</span>
          {skill.name}
        </span>
        <span className="text-cyan-400 font-bold">{skill.level}%</span>
      </div>
      <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}80, ${color})`,
            boxShadow: `0 0 10px ${color}60`,
          }}
        />
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          style={{ left: `${skill.level}%` }}
        />
      </div>
    </motion.div>
  );
};

export default function SkillsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-background to-gray-900/50">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className={`group relative p-8 rounded-2xl glass-effect border transition-all duration-500 cursor-pointer ${
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
                  className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                  style={{
                    background: `linear-gradient(135deg, ${category.color}40, ${category.color}80)`,
                    boxShadow: `0 0 20px ${category.color}60`,
                  }}
                >
                  <span className="text-2xl">{category.icon}</span>
                </motion.div>
                <h3
                  className="text-xl font-bold group-hover:text-glow transition-all duration-300"
                  style={{ color: category.color }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    skill={skill}
                    delay={index * 0.1 + skillIndex * 0.05}
                    color={category.color}
                  />
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
                className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-50"
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
                className="absolute bottom-6 left-6 w-2 h-2 rounded-full opacity-40"
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

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl font-bold text-white text-lg transition-all duration-300 hover:shadow-[0_0_60px_rgba(34,211,238,0.5)] overflow-hidden"
          >
            <span className="relative z-10">Download Technical Resume</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
