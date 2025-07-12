import { motion } from "framer-motion";
import { useState } from "react";

const contactMethods = [
  {
    id: 1,
    title: "Email",
    value: "prakashranjanr8@gmail.com",
    icon: "📧",
    color: "#00ffff",
    link: "mailto:prakashranjanr8@gmail.com",
    description: "Let's discuss your next AI project",
  },
  {
    id: 2,
    title: "Phone",
    value: "+91 9487821387",
    icon: "📱",
    color: "#9333ea",
    link: "tel:+919487821387",
    description: "Direct line for urgent discussions",
  },
  {
    id: 3,
    title: "LinkedIn",
    value: "prakashkbtech",
    icon: "💼",
    color: "#ec4899",
    link: "https://www.linkedin.com/in/prakashkbtech/",
    description: "Professional network & updates",
  },
  {
    id: 4,
    title: "GitHub",
    value: "Prakashsuriya",
    icon: "💻",
    color: "#10b981",
    link: "https://github.com/Prakashsuriya",
    description: "Open source contributions",
  },
];

const socialStats = [
  { label: "GitHub Repos", value: "25+", color: "#00ffff" },
  { label: "LinkedIn Connections", value: "500+", color: "#9333ea" },
  { label: "Open Source", value: "Active", color: "#10b981" },
];

export default function Contact() {
  const [hoveredMethod, setHoveredMethod] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-gray-900/50 to-background">
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
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to build the future of AI together? Let's discuss your next
            breakthrough project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>

            <div className="space-y-6 mb-12">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.id}
                  href={method.link}
                  target={method.link.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    method.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group relative flex items-center p-6 rounded-2xl glass-effect border border-gray-700 hover:border-gray-600 transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredMethod(method.id)}
                  onMouseLeave={() => setHoveredMethod(null)}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center mr-6"
                    style={{
                      background: `linear-gradient(135deg, ${method.color}40, ${method.color}80)`,
                      boxShadow:
                        hoveredMethod === method.id
                          ? `0 0 30px ${method.color}80`
                          : `0 0 15px ${method.color}40`,
                    }}
                  >
                    <span className="text-2xl">{method.icon}</span>
                  </motion.div>

                  <div className="flex-1">
                    <h4
                      className="text-xl font-semibold mb-1 transition-colors duration-300"
                      style={{
                        color:
                          hoveredMethod === method.id
                            ? method.color
                            : "#ffffff",
                      }}
                    >
                      {method.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-2">
                      {method.description}
                    </p>
                    <p
                      className="font-mono text-lg"
                      style={{ color: method.color }}
                    >
                      {method.value}
                    </p>
                  </div>

                  <motion.div
                    animate={{
                      x: hoveredMethod === method.id ? 0 : -20,
                      opacity: hoveredMethod === method.id ? 1 : 0,
                    }}
                    className="text-2xl"
                    style={{ color: method.color }}
                  >
                    →
                  </motion.div>

                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: `0 0 50px ${method.color}`,
                    }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Social Stats */}
            <div className="grid grid-cols-2 gap-4">
              {socialStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-xl glass-effect border border-gray-700 text-center"
                >
                  <div
                    className="text-2xl font-bold mb-2"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-cyan-400 font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300"
                    placeholder="Your Name"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-cyan-400 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="block text-cyan-400 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300"
                  placeholder="Project Collaboration"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label className="block text-cyan-400 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your AI/ML project ideas..."
                  required
                />
              </motion.div>

              <motion.a
                href="mailto:prakashranjanr8@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-full py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg font-bold text-white text-lg transition-all duration-300 hover:shadow-[0_0_60px_rgba(34,211,238,0.5)] overflow-hidden block text-center"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-gray-700 text-center"
        >
          <p className="text-gray-400 mb-4">
            "Building the future, one algorithm at a time."
          </p>
          <p className="text-cyan-400 font-semibold">
            © 2025 Prakash K. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
