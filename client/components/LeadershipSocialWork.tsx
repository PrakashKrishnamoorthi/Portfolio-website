import { motion } from "framer-motion";
import { useState } from "react";

const leadershipRoles = [
  {
    id: 1,
    title: "SGC Core Member & Technical Head",
    organization: "Students Guidance Cell",
    period: "2021 - 2024",
    description:
      "Led technical initiatives and coordinated student government activities, driving digital transformation and technical innovation.",
    achievements: [
      "Conducted 10+ workshops on technical skills and career development",
      "Organized 3 National Level Symposiums with industry experts",
      "Developed student portal and management systems",
      "Coordinated between technical and administrative teams",
    ],
    skills: [
      "Leadership",
      "Project Management",
      "Team Coordination",
      "Web Development",
    ],
    color: "#00ffff",
    icon: "https://cdn.builder.io/api/v1/image/assets%2Fb26c4fb6e1e04ca4b8712ea381757839%2F2693ded65b77492c906ac724138277d7?format=webp&width=800",
    category: "Leadership",
  },
  {
    id: 2,
    title: "City Leader & English Teacher",
    organization: "U&I NGO",
    period: "June 2023 – Present",
    description:
      "Leading social impact initiatives and community development programs while teaching English to underprivileged children.",
    achievements: [
      "Coordinated educational programs for underprivileged children",
      "Implemented technology solutions for NGO operations",
      "Led community outreach and volunteer programs",
      "Organized skill development workshops",
    ],
    skills: ["Community Management", "Social Impact", "Teaching", "Leadership"],
    color: "#ec4899",
    icon: "https://cdn.builder.io/api/v1/image/assets%2Fb26c4fb6e1e04ca4b8712ea381757839%2F25c225660e714f9b94fb47651de04963?format=webp&width=800",
    category: "Social Work",
  },
];

const impactStats = [
  { label: "Students Taught", value: "200+", color: "#00ffff", icon: "👨‍🎓" },
  { label: "Projects Led", value: "15+", color: "#9333ea", icon: "📊" },
  { label: "Volunteers Managed", value: "50+", color: "#ec4899", icon: "🤝" },
  { label: "Years of Service", value: "3+", color: "#10b981", icon: "⏰" },
];

export default function LeadershipSocialWork() {
  const [selectedRole, setSelectedRole] = useState<number | null>(null);

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
              Leadership & Social Work
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering communities and leading change through technology and
            education
          </p>
        </motion.div>

        {/* Leadership Roles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={role.id}
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
              className={`group relative p-8 rounded-2xl glass-effect border transition-all duration-500 cursor-pointer ${
                selectedRole === role.id
                  ? `border-[${role.color}] shadow-[0_0_50px_rgba(${role.color.slice(1)},0.3)]`
                  : "border-gray-700 hover:border-gray-600"
              }`}
              style={{
                background: `linear-gradient(135deg, ${role.color}05, ${role.color}10)`,
              }}
              onClick={() =>
                setSelectedRole(selectedRole === role.id ? null : role.id)
              }
            >
              {/* Category Badge */}
              <motion.div
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                style={{
                  background: `linear-gradient(135deg, ${role.color}20, ${role.color}40)`,
                  color: role.color,
                }}
              >
                {role.category}
              </motion.div>

              {/* Icon and Title */}
              <div className="flex items-center mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mr-4 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${role.color}40, ${role.color}80)`,
                    boxShadow: `0 0 30px ${role.color}60`,
                  }}
                >
                  {role.icon.startsWith("http") ? (
                    <img
                      src={role.icon}
                      alt={role.organization}
                      className="w-12 h-12 object-contain rounded-full"
                    />
                  ) : (
                    <span className="text-3xl">{role.icon}</span>
                  )}
                </motion.div>
                <div>
                  <h3
                    className="text-2xl font-bold group-hover:text-glow transition-all duration-300"
                    style={{ color: role.color }}
                  >
                    {role.title}
                  </h3>
                  <p className="text-gray-300 font-medium">
                    {role.organization}
                  </p>
                </div>
              </div>

              {/* Period */}
              <p className="text-cyan-400 font-semibold mb-4">{role.period}</p>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {role.description}
              </p>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {role.achievements.map((achievement, achIndex) => (
                    <motion.li
                      key={achIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: achIndex * 0.1 }}
                      className="flex items-start text-gray-300"
                    >
                      <span
                        className="mr-3 mt-1 text-sm"
                        style={{ color: role.color }}
                      >
                        ▶
                      </span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {role.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: index * 0.1 + skillIndex * 0.05,
                    }}
                    className="px-3 py-1 text-sm rounded-full border text-gray-300 hover:text-white transition-colors duration-300"
                    style={{
                      borderColor: `${role.color}40`,
                      backgroundColor: `${role.color}10`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `0 0 60px ${role.color}`,
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
                  style={{ borderColor: role.color }}
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
                style={{ backgroundColor: role.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-8">
            Social Impact & Leadership Metrics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative p-6 rounded-xl glass-effect border border-gray-700 hover:border-gray-600 text-center transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${stat.color}05, ${stat.color}10)`,
                }}
              >
                <motion.div
                  className="text-4xl mb-3"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.icon}
                </motion.div>
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
                <div
                  className="absolute inset-0 rounded-xl opacity-0 hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `0 0 30px ${stat.color}`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Passionate about combining technology with social impact to create
            meaningful change in communities.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl font-bold text-white text-lg transition-all duration-300 hover:shadow-[0_0_60px_rgba(34,211,238,0.5)] overflow-hidden"
          >
            <span className="relative z-10">
              Let's Collaborate for Social Good
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
