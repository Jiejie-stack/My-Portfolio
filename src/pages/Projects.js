import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 'ai-platform',
      title: 'AI-Based Image Generation Service Platform',
      description: 'Designed and developed an AI-powered platform that allows users to generate high-quality images through an elegant interface and robust backend APIs. The platform features real-time generation, user management, and comprehensive analytics.',
      longDescription: 'This comprehensive AI platform represents the culmination of my expertise in both data science and user experience design. Built with a modern tech stack, the platform serves as a complete solution for AI-powered image generation, featuring real-time processing, user authentication, and detailed analytics.',
      image: '/resources/project-ai-platform.png',
      category: 'AI Platform',
      date: 'Feb 2025 – July 2025',
      technologies: ['Python', 'FastAPI', 'React.js', 'PostgreSQL', 'Docker', 'AWS'],
      features: [
        'Real-time AI image generation using advanced ML models',
        'User authentication and subscription management',
        'Comprehensive analytics dashboard',
        'RESTful API with rate limiting and caching',
        'Responsive web interface with modern UX design',
        'Scalable microservices architecture'
      ],
      challenges: [
        'Optimizing AI model inference for real-time performance',
        'Implementing secure user authentication and payment processing',
        'Designing intuitive UX for complex AI functionality',
        'Scaling backend services to handle concurrent users'
      ],
      results: [
        'Successfully deployed with 99.9% uptime',
        'Processed over 10,000 image generation requests',
        'Achieved sub-3 second response times',
        'Maintained 4.8/5 user satisfaction rating'
      ],
      github: 'https://github.com/weijiehuang/ai-image-platform',
      demo: 'https://ai-image-platform.vercel.app'
    },
    {
      id: 'ai-calendar',
      title: 'AI Calendar Management Application',
      description: 'Led the interaction design for an intelligent AI scheduling app that automates event planning and improves productivity through adaptive recommendations and smart conflict resolution.',
      longDescription: 'This project focused on creating an intuitive and intelligent calendar management system that leverages AI to optimize scheduling and improve user productivity. The application features smart scheduling suggestions, conflict detection, and personalized recommendations based on user behavior patterns.',
      image: '/resources/project-ai-calendar.png',
      category: 'UX Design',
      date: 'July 2023 – Nov 2023',
      technologies: ['Figma', 'Adobe XD', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      features: [
        'AI-powered smart scheduling suggestions',
        'Intelligent conflict detection and resolution',
        'Personalized productivity insights',
        'Cross-platform synchronization',
        'Voice command integration',
        'Team collaboration features'
      ],
      challenges: [
        'Designing intuitive interfaces for complex AI functionality',
        'Creating seamless user onboarding experience',
        'Balancing automation with user control',
        'Ensuring accessibility across different devices'
      ],
      results: [
        'Reduced scheduling time by 40%',
        'Improved user productivity by 25%',
        'Achieved 95% user adoption rate',
        'Received positive feedback from 200+ beta users'
      ],
      github: 'https://github.com/weijiehuang/ai-calendar-app',
      demo: 'https://ai-calendar-demo.netlify.app'
    },
    {
      id: 'analytics-dashboard',
      title: 'Business Intelligence Analytics Dashboard',
      description: 'Developed a comprehensive analytics dashboard for Tyroola that automated reporting processes and provided real-time insights into sales, inventory, and customer behavior patterns.',
      longDescription: 'This project involved creating a comprehensive business intelligence solution that transformed raw business data into actionable insights. The dashboard features interactive visualizations, automated reporting, and real-time data processing capabilities.',
      image: '/resources/project-analytics-dashboard.png',
      category: 'Data Analytics',
      date: 'Feb 2024 – Jun 2024',
      technologies: ['Tableau', 'SQL', 'Python', 'Excel', 'Power BI', 'PostgreSQL'],
      features: [
        'Real-time sales and inventory tracking',
        'Automated monthly and quarterly reports',
        'Interactive data visualizations',
        'Custom KPI monitoring',
        'Data export and sharing capabilities',
        'Mobile-responsive design'
      ],
      challenges: [
        'Integrating multiple data sources with different formats',
        'Ensuring data accuracy and consistency',
        'Creating intuitive visualizations for non-technical users',
        'Optimizing query performance for large datasets'
      ],
      results: [
        'Reduced manual reporting time by 60%',
        'Improved data accuracy by 35%',
        'Enabled faster decision-making processes',
        'Saved 20+ hours per month in manual work'
      ],
      github: 'https://github.com/weijiehuang/tyroola-analytics',
      demo: null
    }
  ];

  const categories = ['all', 'AI Platform', 'UX Design', 'Data Analytics'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6"
          >
            My <span className="text-gradient">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A collection of projects that showcase my expertise in data science, machine learning, 
            user experience design, and full-stack development.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <FilterSection 
        categories={categories} 
        activeFilter={activeFilter} 
        setActiveFilter={setActiveFilter} 
      />

      {/* Projects Grid */}
      <ProjectsGrid projects={filteredProjects} />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

// Filter Section Component
const FilterSection = ({ categories, activeFilter, setActiveFilter }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-12 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Projects Grid Component
const ProjectsGrid = ({ projects }) => {
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const getCategoryColor = (category) => {
    switch (category) {
      case 'AI Platform':
        return 'bg-blue-100 text-blue-800';
      case 'UX Design':
        return 'bg-purple-100 text-purple-800';
      case 'Data Analytics':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      ref={ref}
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
          <span className={`${getCategoryColor(project.category)} text-sm font-medium px-3 py-1 rounded-full`}>
            {project.category}
          </span>
          <span className="text-gray-500 text-sm">{project.date}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => document.getElementById(`modal-${project.id}`).showModal()}
            className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            Learn More →
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              Demo
            </a>
          )}
        </div>
      </div>
      
      {/* Project Modal */}
      <ProjectModal project={project} />
    </motion.div>
  );
};

// Project Modal Component
const ProjectModal = ({ project }) => {
  return (
    <dialog id={`modal-${project.id}`} className="modal">
      <div className="modal-box max-w-4xl">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
            <span className="text-gray-500">{project.date}</span>
          </div>
          
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Description</h4>
            <p className="text-gray-600">{project.longDescription}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Features</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenges</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Results</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {project.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex space-x-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </dialog>
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
        <h2 className="text-4xl font-bold mb-6">Interested in Working Together?</h2>
        <p className="text-xl mb-8 opacity-90">
          I'm always excited to collaborate on new projects and explore innovative solutions in data science and design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Start a Project
          </a>
          <a
            href="https://www.linkedin.com/in/weijie-huang-856bb736a"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
