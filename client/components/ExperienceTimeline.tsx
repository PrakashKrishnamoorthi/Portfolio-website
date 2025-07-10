import { motion } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    id: 1,
    title: "Application Development Intern",
    company: "Zulu Defence Systems Pvt. Ltd.",
    period: "May 2024 – July 2024",
    description:
      "Developed hybrid AI system using Ardupilot, Embedded C, and Python",
    achievements: [
      "Integrated sensor modules with ML inference pipelines",
      "Worked with Jetson Nano & JetPack 6.0 for edge AI deployments",
      "Optimized real-time processing for defense applications",
    ],
    technologies: ["Python", "Ardupilot", "Embedded C", "Jetson Nano", "ML"],
    color: "#00ffff",
    icon: "🛡️",
  },
  {
    id: 2,
    title: "Java Fullstack Developer Intern",
    company: "Alphabit Technologies",
    period: "Jan 2024 – Mar 2024",
    description:
      "Built AI-driven e-commerce platform using Spring Boot and ReactJS",
    achievements: [
      "Designed ML modules and REST APIs with FastAPI",
      "Integrated SQL Server for backend analytics",
      "Implemented AI-powered recommendation engine",
    ],
    technologies: ["Spring Boot", "ReactJS", "FastAPI", "SQL Server", "ML"],
    color: "#9333ea",
    icon: "🚀",
  },
  {
    id: 3,
    title: "SGC Core Member & Technical Head",
    company: "Student Government Council",
    period: "2021 – 2024",
    description:
      "Led technical initiatives and coordinated student government activities",
    achievements: [
      "Spearheaded digital transformation projects",
      "Managed technical teams for various events",
      "Developed student portal and management systems",
    ],
    technologies: ["Leadership", "Project Management", "Web Development"],
    color: "#ec4899",
    icon: "👥",
  },
  {
    id: 4,
    title: "City Leader",
    company: "U&I NGO",
    period: "June 2023 – Present",
    description:
      "Leading social impact initiatives and community development programs",
    achievements: [
      "Coordinated educational programs for underprivileged children",
      "Implemented technology solutions for NGO operations",
      "Led community outreach and volunteer programs",
    ],
    technologies: ["Community Management", "Social Impact", "Leadership"],
    color: "#10b981",
    icon: "🌟",
  },
];

export default function ExperienceTimeline() {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(
    null,
  );

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
              Professional Journey
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building the future through innovative technology and leadership
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 transform md:-translate-x-1/2" />

          {/* Experience Items */}
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col md:flex-row`}
            >
              {/* Timeline Node */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`absolute left-8 md:left-1/2 w-16 h-16 rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10 cursor-pointer`}
                style={{
                  background: `linear-gradient(135deg, ${experience.color}40, ${experience.color}80)`,
                  border: `3px solid ${experience.color}`,
                  boxShadow: `0 0 30px ${experience.color}60`,
                }}
                onClick={() =>
                  setSelectedExperience(
                    selectedExperience === experience.id ? null : experience.id,
                  )
                }
              >
                <span className="text-2xl">{experience.icon}</span>
              </motion.div>

              {/* Experience Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`group ml-28 md:ml-0 ${
                  index % 2 === 0
                    ? "md:mr-auto md:pr-16"
                    : "md:ml-auto md:pl-16"
                } w-full md:w-5/12`}
              >
                <div
                  className={`relative p-8 rounded-2xl glass-effect border transition-all duration-500 ${
                    selectedExperience === experience.id
                      ? `border-[${experience.color}] shadow-[0_0_50px_rgba(${experience.color.slice(1)},0.3)]`
                      : "border-gray-700 hover:border-gray-600"
                  }`}
                >
                  {/* Period Badge */}
                  <motion.div
                    className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${experience.color}20, ${experience.color}40)`,
                      color: experience.color,
                    }}
                  >
                    {experience.period}
                  </motion.div>

                  {/* Title and Company */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-glow transition-all duration-300">
                    {experience.title}
                  </h3>
                  <p
                    className="font-semibold mb-4"
                    style={{ color: experience.color }}
                  >
                    {experience.company}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: achIndex * 0.1 }}
                          className="flex items-start text-gray-300"
                        >
                          <span
                            className="mr-3 mt-1 text-sm"
                            style={{ color: experience.color }}
                          >
                            ▶
                          </span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: index * 0.1 + techIndex * 0.05,
                        }}
                        className="px-3 py-1 text-sm rounded-full border border-gray-600 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                        style={{
                          borderColor: `${experience.color}40`,
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
                      boxShadow: `0 0 50px ${experience.color}`,
                    }}
                  />

                  {/* Connecting Line to Timeline */}
                  <div
                    className={`absolute top-8 ${
                      index % 2 === 0
                        ? "md:-right-8 right-auto -left-8"
                        : "md:-left-8 left-auto -left-8"
                    } w-8 h-0.5 hidden md:block`}
                    style={{ backgroundColor: experience.color }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
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
            <span className="relative z-10">
              View Complete Resume on LinkedIn
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
