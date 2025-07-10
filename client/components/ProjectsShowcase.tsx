import { motion } from "framer-motion";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Box, Text } from "@react-three/drei";

const ProjectCard3D = ({ position, rotation, color, title }: any) => {
  return (
    <motion.group position={position} rotation={rotation}>
      <Box args={[2, 3, 0.1]} castShadow receiveShadow>
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </Box>
    </motion.group>
  );
};

const projects = [
  {
    id: 1,
    title: "Hybrid AI Defense System",
    company: "Zulu Defence Systems Pvt. Ltd.",
    description:
      "Developed hybrid AI system using Ardupilot, Embedded C, and Python with ML inference pipelines on Jetson Nano",
    technologies: ["Python", "Ardupilot", "Embedded C", "Jetson Nano", "ML"],
    category: "AI/Embedded Systems",
    color: "#00ffff",
    glowColor: "cyan",
  },
  {
    id: 2,
    title: "AI-Driven E-commerce Platform",
    company: "Alphabit Technologies",
    description:
      "Built intelligent e-commerce platform with ML-powered recommendations using Spring Boot, ReactJS, and FastAPI",
    technologies: ["Spring Boot", "ReactJS", "FastAPI", "SQL Server", "ML"],
    category: "Full Stack AI",
    color: "#9333ea",
    glowColor: "purple",
  },
  {
    id: 3,
    title: "Neural Language Processing Engine",
    company: "Personal Project",
    description:
      "Advanced NLP engine leveraging GPT-3.5 and custom PyTorch models for intelligent text analysis",
    technologies: ["PyTorch", "TensorFlow", "NLP", "GPT-3.5", "Python"],
    category: "NLP/AI",
    color: "#ec4899",
    glowColor: "pink",
  },
  {
    id: 4,
    title: "Computer Vision Analytics",
    company: "Research Project",
    description:
      "Real-time computer vision system for object detection and tracking using deep learning",
    technologies: ["OpenCV", "YOLO", "TensorFlow", "Python", "Deep Learning"],
    category: "Computer Vision",
    color: "#10b981",
    glowColor: "green",
  },
];

export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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
              Project Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative AI/ML solutions that push the boundaries of technology
          </p>
        </motion.div>

        {/* 3D Background Canvas */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 10] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <ProjectCard3D
              position={[-4, 2, 0]}
              rotation={[0, 0.2, 0]}
              color="#00ffff"
            />
            <ProjectCard3D
              position={[4, -1, -2]}
              rotation={[0, -0.3, 0]}
              color="#9333ea"
            />
            <ProjectCard3D
              position={[-2, -3, 1]}
              rotation={[0, 0.1, 0]}
              color="#ec4899"
            />
          </Canvas>
        </div>

        {/* Projects Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10 }}
              className={`group relative p-8 rounded-2xl glass-effect border transition-all duration-500 cursor-pointer ${
                selectedProject === project.id
                  ? `border-${project.glowColor}-400 shadow-[0_0_50px_rgba(${project.color},0.3)]`
                  : "border-gray-700 hover:border-gray-600"
              }`}
              onClick={() =>
                setSelectedProject(
                  selectedProject === project.id ? null : project.id,
                )
              }
            >
              {/* Category Badge */}
              <motion.div
                className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r`}
                style={{
                  background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)`,
                  color: project.color,
                }}
              >
                {project.category}
              </motion.div>

              {/* Project Title */}
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-glow transition-all duration-300">
                {project.title}
              </h3>

              {/* Company */}
              <p className="text-cyan-400 font-medium mb-4">
                {project.company}
              </p>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                    className="px-3 py-1 text-sm rounded-full border border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Explore Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group/btn relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 overflow-hidden`}
                style={{
                  background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)`,
                  color: project.color,
                  border: `1px solid ${project.color}40`,
                }}
              >
                <span className="relative z-10">Explore Details</span>
                <div
                  className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}30, ${project.color}50)`,
                  }}
                />
              </motion.button>

              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `0 0 50px ${project.color}60`,
                }}
              />

              {/* Animated Background Pattern */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-16 h-16 rounded-full border-2 border-dashed"
                  style={{ borderColor: project.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl font-bold text-white text-lg transition-all duration-300 hover:shadow-[0_0_60px_rgba(34,211,238,0.5)] overflow-hidden"
          >
            <span className="relative z-10">View All Projects on GitHub</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
