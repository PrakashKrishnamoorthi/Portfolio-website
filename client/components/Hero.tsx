import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Float,
} from "@react-three/drei";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedSphere = () => {
  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#00ffff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.4}
        />
      </Sphere>
    </Float>
  );
};

const MatrixRain = () => {
  const [drops, setDrops] = useState<
    Array<{ id: number; left: number; delay: number }>
  >([]);

  useEffect(() => {
    const newDrops = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setDrops(newDrops);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute text-neon-cyan text-xs opacity-50 font-mono animate-matrix-rain"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
          }}
        >
          {Math.random() > 0.5 ? "1" : "0"}
        </div>
      ))}
    </div>
  );
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-blue-950/20">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* 3D Canvas Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedSphere />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 text-glow animate-text-glow"
            style={{
              transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)`,
            }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Prakash K
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl font-light text-cyan-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            AI/ML Engineer
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Engineering the future with{" "}
            <span className="text-cyan-400 font-semibold">
              Artificial Intelligence
            </span>
            ,{" "}
            <span className="text-purple-400 font-semibold">
              Machine Learning
            </span>
            , and{" "}
            <span className="text-pink-400 font-semibold">Deep Innovation</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-[0_0_40px_rgb(34,211,238)] overflow-hidden"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 border-2 border-purple-500 rounded-lg font-semibold text-purple-400 transition-all duration-300 hover:bg-purple-500/10 hover:shadow-[0_0_40px_rgb(168,85,247)] glass-effect"
          >
            <span className="relative z-10">Get In Touch</span>
          </motion.button>
        </motion.div>

        {/* Floating Tech Icons */}
        <motion.div
          className="absolute top-20 left-20 text-cyan-400 opacity-60"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-16 h-16 rounded-full border-2 border-cyan-400 flex items-center justify-center glow">
            <span className="text-2xl">🤖</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-20 text-purple-400 opacity-60"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-16 h-16 rounded-full border-2 border-purple-400 flex items-center justify-center glow-purple">
            <span className="text-2xl">⚡</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-10 text-pink-400 opacity-60"
          animate={{
            x: [0, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-12 h-12 rounded-full border-2 border-pink-400 flex items-center justify-center glow-pink">
            <span className="text-xl">🧠</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-cyan-400"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
