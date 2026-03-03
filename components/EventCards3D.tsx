"use client";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
}

interface Props {
  projects: Project[];
}

export default function EventCards3D({ projects }: Props) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <Tilt
          key={index}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          className="cursor-grab active:cursor-grabbing"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-yellow-500/20 via-yellow-400/10 to-yellow-300/10 p-1 rounded-3xl shadow-2xl border border-yellow-200/10 hover:border-yellow-300/20 transition-all"
          >
            <div className="relative rounded-3xl overflow-hidden bg-black/30">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-white mb-2">{project.title}</h3>
              <p className="text-white/50 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-yellow-500/20 text-white/80 rounded-full text-xs border border-yellow-200/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button className="flex items-center gap-1 text-white/60 hover:text-white text-sm">
                Live Preview <ExternalLink size={14} />
              </button>
            </div>
          </motion.div>
        </Tilt>
      ))}
    </div>
  );
}