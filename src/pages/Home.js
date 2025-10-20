import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const Home = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-black leading-tight"
              >
                <span className="block text-gray-900">Weijie</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 font-medium max-w-lg"
              >
                Blending data, design, and technology into meaningful digital experiences.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="font-medium">Master of Data Science at The University of Sydney</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="font-medium">Bachelor of Science in Information Technology at University of Technology Sydney</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                to="/projects"
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 text-center"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 text-center"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="floating-element">
              <img
                src="/resources/hero-image.png"
                alt="Weijie Huang - Data Science & Design"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-100 rounded-full opacity-40"></div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />
      
      {/* Work Experience Section */}
      <WorkExperienceSection />
      
      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Skills Section */}
      <SkillsSection />
      
      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

// About Section Component
const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a Master of Data Science student at The University of Sydney with a Bachelor of Science in Information Technology from UTS. 
            My background in Interaction Design from UTS and Data Science from The University of Sydney drives me to create data-driven applications that combine analytical rigor with intuitive user experience.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: (
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              ),
              title: "Data Engineering",
              description: "Building robust data pipelines and infrastructure to support scalable analytics and machine learning systems."
            },
            {
              icon: (
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
                </svg>
              ),
              title: "UX Design",
              description: "Creating intuitive, human-centered interfaces that bridge the gap between complex data and user understanding."
            },
            {
              icon: (
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              ),
              title: "Machine Learning",
              description: "Developing intelligent systems that learn from data to provide predictive insights and automated decision-making."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white p-8 rounded-2xl shadow-lg card-hover"
            >
              <div className={`w-16 h-16 ${index === 0 ? 'bg-blue-100' : index === 1 ? 'bg-purple-100' : 'bg-green-100'} rounded-full flex items-center justify-center mb-6`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Work Experience Section Component
const WorkExperienceSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional experience in data science, analytics, finance, and technology implementation.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* TMGM Experience */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Account Manager</h3>
                <p className="text-lg text-blue-600 font-medium">TMGM</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600 font-medium">Sep 2025 – Present</p>
                <p className="text-gray-500">Sydney, Australia</p>
              </div>
            </div>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Promoted and traded equity products focusing on US and Hong Kong stocks, contributing to a 10% increase 
              in new client acquisitions within the first quarter. Built and maintained a pipeline of 50+ active clients 
              through proactive outreach and relationship management.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                <ul className="space-y-2 text-gray-600">
                  {[
                    "10% increase in new client acquisitions",
                    "Managed pipeline of 50+ active clients",
                    "95% client satisfaction rate",
                    "15% uplift in client engagement"
                  ].map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
                <ul className="space-y-2 text-gray-600">
                  {[
                    "Sales & Business Development",
                    "Client Relationship Management",
                    "Market Analysis & Insights",
                    "Feedback Integration"
                  ].map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-6">
              <p className="text-gray-600">
                <strong>Impact:</strong> Successfully implemented 3 key service improvements based on client feedback, 
                enhancing platform usability and client retention while maintaining high satisfaction rates.
              </p>
            </div>
          </div>
          
          {/* Tyroola Experience */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Data & Business Analytics Intern</h3>
                <p className="text-lg text-blue-600 font-medium">Tyroola</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600 font-medium">Feb 2024 – Jun 2024</p>
                <p className="text-gray-500">Sydney, Australia</p>
              </div>
            </div>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Developed automated dashboards and performed financial reconciliation to optimize sales tracking 
              and reporting efficiency. Built comprehensive data analytics pipelines and integrated multiple 
              business datasets for improved decision-making.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
                <ul className="space-y-2 text-gray-600">
                  {[
                    "Built Excel cube-based data analytics pipelines",
                    "Integrated sales, payment, and inventory datasets",
                    "Improved month-end reporting accuracy"
                  ].map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {["Excel Cube Functions", "SQL", "Tableau"].map((tech, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-6">
              <p className="text-gray-600">
                <strong>Impact:</strong> Successfully automated reporting processes, reducing manual effort by 60% 
                and improving data accuracy for business decision-making.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Projects Section Component
const ProjectsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      id: "ai-platform",
      title: "AI-Based Image Generation Service Platform",
      description: "Designed and developed an AI-powered platform that allows users to generate high-quality images through an elegant interface and robust backend APIs.",
      image: "/resources/project-ai-platform.png",
      category: "AI Platform",
      date: "Feb 2025 – July 2025",
      technologies: ["Python", "FastAPI", "React.js", "PostgreSQL"],
      link: "/projects#ai-platform"
    },
    {
      id: "ai-calendar",
      title: "AI Calendar Management Application",
      description: "Led the interaction design for an intelligent AI scheduling app that automates event planning and improves productivity through adaptive recommendations.",
      image: "/resources/project-ai-calendar.png",
      category: "UX Design",
      date: "July 2023 – Nov 2023",
      technologies: ["Figma", "Adobe XD", "JavaScript"],
      link: "/projects#ai-calendar"
    }
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of projects that showcase my expertise in data science, machine learning, and user experience design.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="project-card card-hover"
            >
              <div className="aspect-video overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`${project.category === "AI Platform" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"} text-sm font-medium px-3 py-1 rounded-full`}>
                    {project.category}
                  </span>
                  <span className="text-gray-500 text-sm">{project.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  to={project.link}
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/projects"
            className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300"
          >
            View All Projects
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Skills Section Component
const SkillsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skills = [
    { name: "Python", percentage: 95 },
    { name: "JavaScript", percentage: 90 },
    { name: "Java", percentage: 85 },
    { name: "R", percentage: 80 }
  ];

  const webTools = [
    { name: "React.js", emoji: "⚛️" },
    { name: "Figma", emoji: "🎨" },
    { name: "Adobe XD", emoji: "📊" },
    { name: "HTML/CSS", emoji: "🌐" }
  ];

  const dataTools = [
    { name: "PostgreSQL", emoji: "🐘" },
    { name: "Tableau", emoji: "📊" },
    { name: "Excel", emoji: "📈" },
    { name: "MySQL", emoji: "🔄" }
  ];

  const domains = [
    { name: "Data Engineering & ETL", color: "bg-blue-500" },
    { name: "Machine Learning & AI", color: "bg-purple-500" },
    { name: "UX/UI Design", color: "bg-green-500" },
    { name: "Data Visualization", color: "bg-orange-500" }
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning data science, web development, and design.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Programming Languages</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 0.5 + 0.1 * index }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Web Development</h3>
              <div className="grid grid-cols-2 gap-4">
                {webTools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                    className="bg-white p-4 rounded-lg shadow-md text-center"
                  >
                    <div className="text-2xl mb-2">{tool.emoji}</div>
                    <span className="text-gray-700 font-medium">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Data Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                {dataTools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                    className="bg-white p-4 rounded-lg shadow-md text-center"
                  >
                    <div className="text-2xl mb-2">{tool.emoji}</div>
                    <span className="text-gray-700 font-medium">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Domains</h3>
              <div className="space-y-3">
                {domains.map((domain, index) => (
                  <motion.div
                    key={domain.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                    className="flex items-center space-x-3"
                  >
                    <div className={`w-2 h-2 ${domain.color} rounded-full`}></div>
                    <span className="text-gray-700">{domain.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Create Something Amazing</h2>
        <p className="text-xl mb-8 opacity-90">
          I'm always open to collaboration and new opportunities in data-driven product design, AI applications, and creative technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Start a Conversation
          </Link>
          <Link
            to="/about"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            Learn More About Me
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
