"use client";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
}

interface Props {
  projects: Project[];
}

export default function EventCards3D({ projects }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {projects.map((project, index) => (
        <Tilt
          key={index}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.02}
          transitionSpeed={1000}
          className="cursor-grab active:cursor-grabbing"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-yellow-500/20 via-yellow-400/10 to-yellow-300/10 p-1 rounded-2xl sm:rounded-3xl shadow-2xl border border-yellow-200/10 hover:border-yellow-300/20 transition-all h-full flex flex-col"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-black/30">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
              <h3 className="text-lg sm:text-xl font-medium text-white mb-1 sm:mb-2">{project.title}</h3>
              <p className="text-white/50 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-0.5 sm:py-1 bg-yellow-500/20 text-white/80 rounded-full text-[10px] sm:text-xs border border-yellow-200/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && project.link !== "#" ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-white/60 hover:text-white text-xs sm:text-sm transition-colors w-fit"
                >
                  Live Preview <ExternalLink size={12} className="sm:w-[14px] sm:h-[14px]" />
                </a>
              ) : (
                <button 
                  disabled
                  className="flex items-center gap-1 text-white/30 text-xs sm:text-sm cursor-not-allowed"
                >
                  Live Preview <ExternalLink size={12} className="sm:w-[14px] sm:h-[14px]" />
                </button>
              )}
            </div>
          </motion.div>
        </Tilt>
      ))}
    </div>
  );
}