"use client";
import EventCards3D from "../components/EventCards3D";
import { motion, useScroll, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { 
  Github, Linkedin, Mail, Instagram, 
  Code, Terminal, Database, Globe, Server, Cpu,
  ExternalLink, MapPin, Award,
  ChevronRight, User, Briefcase, GraduationCap,
  Heart, Sparkles, BookOpen, Coffee
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "Java", icon: <Terminal size={20} /> },
    { name: "PHP", icon: <Server size={20} /> },
    { name: "HTML5", icon: <Globe size={20} /> },
    { name: "CSS3", icon: <Cpu size={20} /> },
    { name: "JavaScript", icon: <Code size={20} /> },
    { name: "React.js", icon: <Database size={20} /> },
  ];

  const projects = [
    {
      title: "Hotel Booking System",
      description: "Full-stack reservation platform with real-time availability and secure payments.",
      tech: ["Java", "Springtool", "pgadmin4"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "3D Portfolio",
      description: "Interactive portfolio with 3D elements and smooth scroll animations.",
      tech: ["Next.js", "Three.js", "Framer"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "E-Commerce App",
      description: "Modern shopping platform with cart, auth, and payment integration.",
      tech: ["React", "Redux", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Esport WebSite ",
      description: "Collaborative with real-time updates and team features.",
      tech: ["html", "css", "js"],
      image: "https://wallpapercrafter.com/th8006/1522652-Video-Game-Fnatic-Esports-Gaming-Team-1080P.jpg",
    }
  ];

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden scroll-smooth relative">
      
      {/* Floating background blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-r"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-gradient-to-r"></div>

      {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-3 border-b border-white/5" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-lg font-light tracking-wider">
            <span className="text-white/90">Aayush</span>
            <span className="text-white/30 ml-2">Singh</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {["Home", "About", "Work", "Skills", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm text-white/40 hover:text-white/90 transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

{/* HERO SECTION */}
<section
  id="home"
  className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 relative overflow-hidden"
>
  {/* Left Content */}
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="max-w-xl z-10"
  >
    {/* Tagline */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-4"
    >
      <span className="uppercase text-yellow-400 text-sm tracking-[0.3em] font-medium">
        Full-Stack Developer
      </span>
    </motion.div>

    {/* Name */}
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
      className="text-6xl md:text-8xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white"
    >
      Aayush
      <span className="block text-white/40 mt-2 tracking-tight">
        Singh
      </span>
    </motion.h1>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="text-white/50 text-lg md:text-xl mt-6 max-w-md leading-relaxed"
    >
      I build <span className="text-red-600 font-semibold">interactive websites</span> and <span className="text-blue-400 font-semibold">modern web apps</span> using cutting-edge technologies.
    </motion.p>

    {/* Social Links */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex gap-4 mt-8"
    >
      {[
        { href: "https://github.com/Aayushpratapsingh", icon: <Github size={18}/> },
        { href: "https://www.linkedin.com/in/aayush-singh-16287b321/", icon: <Linkedin size={18}/> },
        { href: "mailto:aayushpratapsingh098@gmail.com", icon: <Mail size={18}/> },
        { href: "#", icon: <Instagram size={18}/> },
      ].map((link, i) => (
        <motion.a
          key={i}
          href={link.href}
          target="_blank"
          whileHover={{ scale: 1.2, rotate: 10, color: "#FFD700" }}
          className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/30 hover:text-white hover:border-white/30 transition-all"
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  </motion.div>

  {/* Right: Floating 3D Card */}
  <motion.div
    initial={{ opacity: 0, y: -500 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 50, damping: 15 }}
    className="relative hidden lg:block z-10"
  >
    {/* Hanging string */}
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: 128 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="absolute -top-32 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-white/40 to-transparent"
    />
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.2, duration: 0.3 }}
      className="absolute -top-36 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/60"
    />

    <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} perspective={1200} scale={1.05} transitionSpeed={1500}>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="w-72 h-[400px] rounded-3xl shadow-2xl relative bg-gradient-to-br from-white/10 via-white/5 to-white/0 overflow-hidden"
      >
        {/* Card Content */}
        <div className="relative h-full flex flex-col items-center p-8">
          <div className="mt-4 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 blur-sm"></div>
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img src="/images/profile.jpeg" alt="Aayush Singh - Profile" className="w-full h-full object-cover"/>
            </div>
          </div>

          <div className="text-center mt-6">
            <h3 className="text-2xl font-medium text-gray-200">Aayush Singh</h3>
            <p className="text-sm text-gray-400 mt-2 tracking-wide">FULL STACK DEVELOPER</p>
          </div>

          <div className="w-12 h-px bg-gray-400 my-6"></div>

          <div className="text-center">
            <span className="text-[10px] text-gray-400 tracking-[0.3em]">DEVELOPER ID</span>
            <p className="text-xs text-gray-500 font-mono mt-1">DEV-2026</p>
          </div>

          <div className="absolute bottom-4 right-4">
            <Sparkles size={14} className="text-gray-300"/>
          </div>
        </div>
      </motion.div>
    </Tilt>
  </motion.div>
</section>


      {/* ABOUT ME SECTION */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-white/20 text-sm tracking-widest">ABOUT ME</span>
            <h2 className="text-4xl md:text-5xl font-light mt-4">
              Who is <span className="text-white/90">Aayush?</span>
            </h2>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Bio & Journey */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              {/* Bio */}
              <div className="space-y-4">
                <p className="text-white/70 text-lg leading-relaxed">
                  I'm a <span className="text-white">BCA student</span> with a deep passion for full-stack development and creative UI design. I believe in building applications that not only function perfectly but also provide exceptional user experiences.
                </p>
                
                <p className="text-white/50 leading-relaxed">
                  My journey in web development started 2 years ago, and since then, I've worked on various projects ranging from simple websites to complex web applications. I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
                </p>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="border border-white/5 rounded-2xl p-5">
                  <div className="text-3xl text-white/80 mb-1">2+</div>
                  <div className="text-xs text-white/30 uppercase tracking-wider">Years Coding</div>
                </div>
                <div className="border border-white/5 rounded-2xl p-5">
                  <div className="text-3xl text-white/80 mb-1">10+</div>
                  <div className="text-xs text-white/30 uppercase tracking-wider">Projects Done</div>
                </div>
                <div className="border border-white/5 rounded-2xl p-5">
                  <div className="text-3xl text-white/80 mb-1">8+</div>
                  <div className="text-xs text-white/30 uppercase tracking-wider">Technologies</div>
                </div>
                <div className="border border-white/5 rounded-2xl p-5">
                  <div className="text-3xl text-white/80 mb-1">100%</div>
                  <div className="text-xs text-white/30 uppercase tracking-wider">Dedication</div>
                </div>
              </div>

              {/* Quote or Motto */}
              <div className="border-l-2 border-white/10 pl-6 py-2">
                <p className="text-white/40 text-sm italic">
                  "Building digital solutions that make a difference, one line of code at a time."
                </p>
              </div>
            </motion.div>

            {/* Right Column - Personal Info & Interests */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Personal Details Cards */}
              <div className="grid gap-4">
                <div className="flex items-center gap-4 p-5 border border-white/5 rounded-2xl hover:border-white/10 transition-colors">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                    <User size={20} className="text-white/40" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30">FULL NAME</p>
                    <p className="text-white/80">Aayush Pratap Singh</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 border border-white/5 rounded-2xl hover:border-white/10 transition-colors">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                    <MapPin size={20} className="text-white/40" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30">LOCATION</p>
                    <p className="text-white/80">Nepal</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 border border-white/5 rounded-2xl hover:border-white/10 transition-colors">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                    <GraduationCap size={20} className="text-white/40" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30">EDUCATION</p>
                    <p className="text-white/80">BCA - Bachelor of Computer Applications</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 border border-white/5 rounded-2xl hover:border-white/10 transition-colors">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                    <Briefcase size={20} className="text-white/40" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30">EXPERIENCE</p>
                    <p className="text-white/80">2+ Years in Web Development</p>
                  </div>
                </div>
              </div>

              {/* Interests & Hobbies */}
              <div className="border border-white/5 rounded-2xl p-6">
                <h3 className="text-white/60 text-sm mb-4 flex items-center gap-2">
                  <Heart size={16} className="text-white/40" />
                  INTERESTS & HOBBIES
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: <Code size={12} />, label: "Coding" },
                    { icon: <Coffee size={12} />, label: "UI Design" },
                    { icon: <BookOpen size={12} />, label: "Reading" },
                    { label: "Gaming" },
                    { label: "Music" },
                    { label: "Travel" },
                    { label: "Photography" },
                    { label: "Tech Blogs" }
                  ].map((interest, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 bg-white/5 text-white/50 text-xs rounded-full flex items-center gap-1 hover:bg-white/10 hover:text-white/70 transition-colors"
                    >
                      {interest.icon && <span className="text-white/30">{interest.icon}</span>}
                      {interest.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Current Focus / Learning */}
              <div className="border border-white/5 rounded-2xl p-6">
                <h3 className="text-white/60 text-sm mb-4 flex items-center gap-2">
                  <BookOpen size={16} className="text-white/40" />
                  CURRENTLY FOCUSED ON
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-white/70 text-sm">Next.js & TypeScript</p>
                      <span className="text-white/30 text-xs">75%</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "75%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full bg-white/30 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-white/70 text-sm">UI/UX Design Principles</p>
                      <span className="text-white/30 text-xs">60%</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "60%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-white/30 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

       {/* WORK SECTION */}
<section id="work" className="py-32 px-6 bg-white/[0.01]">
  <div className="max-w-7xl mx-auto">
    <EventCards3D projects={projects} />
  </div>
</section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-white/20 text-sm tracking-widest">EXPERTISE</span>
            <h2 className="text-4xl md:text-5xl font-light mt-4">
              Technologies I work with
            </h2>
          </motion.div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-white/5 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/[0.02] border border-white/5 rounded-2xl p-6 text-center">
                  <div className="text-white/30 group-hover:text-white/50 transition-colors mb-3">
                    {skill.icon}
                  </div>
                  <h3 className="text-xs font-light text-white/30">{skill.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white/20 text-sm tracking-widest">GET IN TOUCH</span>
            <h2 className="text-4xl md:text-5xl font-light mt-4 mb-8">
              Let's work together
            </h2>
            <p className="text-white/30 max-w-2xl mx-auto leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a project in mind or just want to say hello, feel free to reach out.
            </p>
            
            <motion.a
              href="mailto:aayushpratapsingh098@gmail.com"
              whileHover={{ scale: 1.02 }}
              className="inline-block mt-8 px-8 py-3 bg-white/5 text-white/80 rounded-full text-sm font-light hover:bg-white/10 transition-colors border border-white/10"
            >
              aayushpratapsingh098@gmail.com
            </motion.a>

            <div className="flex justify-center gap-6 mt-12">
              <motion.a 
                href="https://github.com/Aayushpratapsingh" 
                target="_blank"
                whileHover={{ y: -2 }}
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/30 hover:text-white hover:border-white/30 transition-all"
              >
                <Github size={18} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/aayush-singh-16287b321/" 
                target="_blank"
                whileHover={{ y: -2 }}
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/30 hover:text-white hover:border-white/30 transition-all"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a 
                href="mailto:aayushpratapsingh098@gmail.com" 
                whileHover={{ y: -2 }}
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/30 hover:text-white hover:border-white/30 transition-all"
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/20">
          <p>© 2024 Aayush Pratap Singh</p>
          <div className="flex gap-6">
            <span>Clean code</span>
            <span className="hidden md:inline">•</span>
            <span>Creative design</span>
            <span className="hidden md:inline">•</span>
            <span>User focused</span>
          </div>
        </div>
      </footer>
    </main>
  );
}