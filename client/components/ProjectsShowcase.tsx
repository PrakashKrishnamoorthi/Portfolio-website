import { motion } from "framer-motion";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "@react-three/drei";

const ProjectCard3D = ({ position, rotation, color }: any) => {
  return (
    <Box
      position={position}
      rotation={rotation}
      args={[2, 3, 0.1]}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial color={color} transparent opacity={0.8} />
    </Box>
  );
};

const projects = [
  {
    id: 1,
    title: "Infogram'22",
    company: "Department Symposium",
    description:
      "Created a comprehensive website for the Department symposium using HTML, CSS, and JavaScript with modern design principles and interactive features.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    category: "Web Development",
    color: "#00ffff",
    glowColor: "cyan",
    githubLink: "https://github.com/Prakashsuriya/Infogram-22",
    liveLink: "https://infogram-22.vercel.app/",
  },
  {
    id: 2,
    title: "Lab Application",
    company: "Educational Platform",
    description:
      "Developed a laboratory management application for educational institutions with booking systems, experiment tracking, and resource management.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    category: "Full Stack",
    color: "#9333ea",
    glowColor: "purple",
    githubLink: "https://github.com/Prakashsuriya/Lab-App",
    liveLink: "https://lab-app-nine.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce Grocery Store",
    company: "Online Marketplace",
    description:
      "Built a full-featured e-commerce platform for grocery shopping with cart functionality, payment integration, and inventory management.",
    technologies: ["React.js", "Node.js", "Express.js", "Payment Gateway"],
    category: "E-commerce",
    color: "#ec4899",
    glowColor: "pink",
    githubLink: "https://github.com/Prakashsuriya/Store",
    liveLink: "https://store-umber-two.vercel.app/",
  },
  {
    id: 4,
    title: "Personalized Educational Chatbot",
    company: "AI Project",
    description:
      "Developed an intelligent educational chatbot using OpenAI API integration for personalized learning experiences and doubt clarification.",
    technologies: ["Python", "OpenAI GPT-3.5", "NLP", "FastAPI"],
    category: "AI/ML",
    color: "#10b981",
    glowColor: "green",
    githubLink:
      "https://github.com/Prakashsur/Personalized-Educational-Chatbot-with-OpenAI-API-Integration",
    liveLink: null,
  },
  {
    id: 5,
    title: "Virtual Mouse System",
    company: "Accessibility Project",
    description:
      "Created an innovative virtual mouse system using eye tracking technology to help physically challenged users control computer interfaces.",
    technologies: ["Python", "OpenCV", "Mediapipe", "PyAutoGUI"],
    category: "Computer Vision",
    color: "#f59e0b",
    glowColor: "orange",
    githubLink: "https://github.com/Prakashsur/Virtual-Mouse-Using-Eye",
    liveLink: null,
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
            Innovative solutions that bridge technology and real-world problems
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
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10 }}
              className={`group relative p-6 rounded-2xl glass-effect border transition-all duration-500 cursor-pointer ${
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
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-gradient-to-r`}
                style={{
                  background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)`,
                  color: project.color,
                }}
              >
                {project.category}
              </motion.div>

              {/* Project Title */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-glow transition-all duration-300">
                {project.title}
              </h3>

              {/* Company */}
              <p className="text-cyan-400 font-medium mb-3 text-sm">
                {project.company}
              </p>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                    className="px-2 py-1 text-xs rounded-full border border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-1 text-center px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-300 overflow-hidden`}
                  style={{
                    background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)`,
                    color: project.color,
                    border: `1px solid ${project.color}40`,
                  }}
                >
                  GitHub
                </motion.a>
                {project.liveLink && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 text-center px-3 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white transition-all duration-300"
                  >
                    Live Demo
                  </motion.a>
                )}
              </div>

              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `0 0 50px ${project.color}60`,
                }}
              />
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
          <motion.a
            href="https://github.com/Prakashsuriya"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl font-bold text-white text-lg transition-all duration-300 hover:shadow-[0_0_60px_rgba(34,211,238,0.5)] overflow-hidden"
          >
            <span className="relative z-10">View All Projects on GitHub</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
