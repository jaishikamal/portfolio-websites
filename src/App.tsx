import React, { useState, useEffect } from 'react';
import image1 from "./assets/image/image1.jpg";
import image2 from "./assets/image/image2.jpg";
import { Menu, X, Code, Globe, Layout, Github, Linkedin, Mail, Briefcase, MapPin, Calendar, Coffee, Smartphone } from 'lucide-react';

function Logo() {
  return (
    <div className="flex items-center space-x-2 group">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
          <span className="text-white font-bold text-xl">KJ</span>
        </div>
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-30 group-hover:opacity-50 blur transition-opacity duration-300" />
      </div>
      <span className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
        Kamal Jaishi
      </span>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-menu');
      const button = document.getElementById('menu-button');
      if (isMenuOpen && nav && !nav.contains(event.target as Node) && !button?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Learning Management System",
      description: "Educational platform with interactive course delivery",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
      tags: ["Vue.js", "Express", "PostgreSQL"]
    },
    {
      title: "Real Estate Portal",
      description: "Property listing and management system with virtual tours",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "Firebase", "Three.js"]
    }
  ];

  const skills = [
    { icon: <Code size={24} />, name: "Frontend", items: ["React", "Vue.js", "TypeScript", "Tailwind CSS"] },
    { icon: <Globe size={24} />, name: "Backend", items: ["Node.js", "Express", "Python", "PostgreSQL"] },
    { icon: <Layout size={24} />, name: "Tools", items: ["Git", "Docker", "AWS", "Figma"] }
  ];

  const stats = [
    { icon: <Briefcase size={20} />, label: "Years Experience", value: "1+" },
    { icon: <Coffee size={20} />, label: "Projects Completed", value: "2+" },
    { icon: <Code size={20} />, label: "Technologies", value: "5+" },
    { icon: <Smartphone size={20} />, label: "Responsive Designs", value: "100%" }
  ];

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const section = document.querySelector(href);
        if (section) {
          const rect = section.getBoundingClientRect();
          setIsActive(rect.top <= 100 && rect.bottom >= 100);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [href]);

    return (
      <a
        href={href}
        className={`relative text-gray-700 hover:text-gray-900 transition-colors duration-300 group py-2 ${isActive ? 'text-indigo-600' : ''
          }`}
      >
        {children}
        <span className={`absolute bottom-0 left-0 h-0.5 bg-indigo-600 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
          }`}></span>
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-white shadow-sm'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-lg">
                <Logo />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                id="menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`text-gray-700 hover:text-gray-900 transition-all duration-300 p-2 rounded-md hover:bg-gray-100 ${isMenuOpen ? 'bg-gray-100' : ''
                  }`}
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'
                    }`}></span>
                  <span className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transform transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}></span>
                  <span className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1'
                    }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`md:hidden fixed inset-x-0 transition-all duration-300 ease-in-out transform ${isMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full pointer-events-none'
            }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-md shadow-lg">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Hi, I'm Kamal Jaishi</span>
                <span className="block text-indigo-600">Full Stack Developer</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
                Crafting responsive and dynamic web experiences with modern technologies
              </p>
              <div className="mt-8 flex justify-center lg:justify-start space-x-4">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  View Projects
                </a>
              </div>
            </div>
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl transform transition-transform duration-500 group-hover:scale-105">
                <img
                  src={image1}
                  alt="Kamal Jaishi"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl transform transition-transform duration-500 group-hover:scale-105">
                <img
                  src={image2}
                  alt="Kamal Jaishi"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
                <div className="h-1 w-20 bg-indigo-600 rounded-full" />
              </div>

              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Hello! I'm Kamal Jaishi, a passionate Full Stack Developer with 1+ years of experience in crafting digital experiences. I specialize in building exceptional websites, applications, and everything in between.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  My journey in web development started with a curiosity for creating interactive experiences. Today, I work with cutting-edge technologies to build scalable, user-friendly solutions that solve real-world problems.
                </p>
              </div>

              <div className="flex items-center space-x-4 text-gray-600">
                <MapPin size={20} />
                <span>Based in Kathmandu, Nepal</span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-2 text-indigo-600 mb-2">
                      {stat.icon}
                      <span className="font-medium">{stat.label}</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "React", "Node.js", "TypeScript", "Python"].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium hover:bg-indigo-100 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-bold ml-2">{skill.name}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@kamaljaishi.com" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Kamal Jaishi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;