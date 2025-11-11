import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// 项目数据（从Projects.js中提取，这里可以后续优化为共享数据源）
const projectData = {
  'ai-platform': {
    id: 'ai-platform',
    title: 'AI-Based Image Generation Service Platform',
    description: 'Designed and developed an AI-powered platform that allows users to generate high-quality images through an elegant interface and robust backend APIs.',
    longDescription: 'Designed and developed an AI-based image generation service platform, enabling users to efficiently create high-quality, customized images through intuitive interfaces and robust APIs, significantly enhancing creative workflows and accessibility to advanced generative technologies.',
    image: '/resources/project-ai-platform.png',
    category: 'AI Platform',
    date: 'Feb 2025 – July 2025',
    location: 'Sydney, Australia',
    technologies: ['Python', 'FastAPI', 'React.js', 'PostgreSQL', 'Docker', 'AWS', 'Apifox'],
    features: [
      'Real-time AI image generation using advanced ML models',
      'User authentication and subscription management',
      'Comprehensive analytics dashboard',
      'RESTful API with rate limiting and caching',
      'Responsive web interface with modern UX design',
      'Scalable microservices architecture'
    ],
    contributions: [
      {
        title: 'Front-end Design and Development',
        description: 'Participated in the initial UI/UX design phase, modifying and enhancing interactive components to improve user experience and responsiveness. Created clean and functional layouts aligned with product goals.'
      },
      {
        title: 'Database Schema Design and Development',
        description: 'Transitioned to backend responsibilities during the main development phase. Designed and implemented the database schema to support image generation workflows and user data management, ensuring data consistency and scalability.'
      },
      {
        title: 'API Integration and Testing',
        description: 'Contributed to backend integration, collaborating closely with front-end developers to ensure seamless API communication. Conducted extensive API testing using Apifox, resolved interface mismatches, and validated backend stability and correctness in pre-deployment testing.'
      },
      {
        title: 'Deployment & DevOps Support',
        description: 'Assisted in setting up the deployment environment and managing environment variables. Supported cloud-based deployment and ensured API availability during production release. Participated in troubleshooting runtime issues and helped configure staging vs production setups.'
      },
      {
        title: 'API Documentation & Developer Support',
        description: 'Authored clear API documentation and usage guides to support frontend and third-party integration. Assisted teammates in understanding backend services and data structures, improving development efficiency and reducing onboarding time.'
      }
    ],
    challenges: [
      'Optimizing AI model inference for real-time performance',
      'Implementing secure user authentication and payment processing',
      'Designing intuitive UX for complex AI functionality',
      'Scaling backend services to handle concurrent users',
      'Ensuring seamless API communication between frontend and backend',
      'Managing environment variables and deployment configurations'
    ],
    results: [
      'Successfully deployed with 99.9% uptime',
      'Processed over 10,000 image generation requests',
      'Achieved sub-3 second response times',
      'Maintained 4.8/5 user satisfaction rating',
      'Improved development efficiency through comprehensive documentation',
      'Reduced onboarding time for new team members'
    ],
    github: 'https://github.com/weijiehuang/ai-image-platform',
    demo: 'https://ai-image-platform.vercel.app',
    figma: 'https://www.figma.com/proto/yJSPROnOA8qZl9Td2GHnbb/CS45-1?node-id=0-1&t=gL568yv5zBIqj9MX-1',
    gallery: [
      {
        image: '/resources/Main page.png',
        title: 'Main Page',
        description: 'Homepage with hero section and featured models'
      },
      {
        image: '/resources/Login.png',
        title: 'Login Page',
        description: 'User authentication interface with cosmic theme'
      },
      {
        image: '/resources/Models.png',
        title: 'Models Page',
        description: 'AI model selection and API key management'
      }
    ]
  },
  'ai-calendar': {
    id: 'ai-calendar',
    title: 'AI Calendar Management Application',
    description: 'Led the design of an intelligent AI calendar management application, playing an important role in automating scheduling tasks, optimizing user productivity, and enhancing time-management efficiency through innovative, user-centric features.',
    longDescription: 'Led the design of an intelligent AI calendar management application, playing an important role in automating scheduling tasks, optimizing user productivity, and enhancing time-management efficiency through innovative, user-centric features.',
    image: '/resources/project-ai-calendar.png',
    category: 'UX Design',
    date: 'July 2023 – Nov 2023',
    location: 'Sydney, Australia',
    technologies: ['Figma', 'Adobe XD', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
    features: [
      'AI-powered smart scheduling suggestions',
      'Intelligent conflict detection and resolution',
      'Personalized productivity insights',
      'Cross-platform synchronization',
      'Voice command integration',
      'Team collaboration features'
    ],
    contributions: [
      {
        title: 'Interaction Design',
        description: 'Designed intuitive user flows and interactive components for key features including smart event suggestions, conflict detection, and personalized reminders. Ensured the interface aligned with human-centered design principles to reduce user friction and increase engagement.'
      },
      {
        title: 'Prototyping',
        description: 'Developed high-fidelity prototypes using tools such as Figma and Adobe XD to visualize the final user experience. Conducted iterative design testing and incorporated user feedback to refine interface responsiveness, accessibility, and task completion efficiency.'
      }
    ],
    challenges: [
      'Designing intuitive interfaces for complex AI functionality',
      'Creating seamless user onboarding experience',
      'Balancing automation with user control',
      'Ensuring accessibility across different devices',
      'Translating AI capabilities into user-friendly interactions',
      'Maintaining design consistency across multiple platforms'
    ],
    results: [
      'Reduced scheduling time by 40%',
      'Improved user productivity by 25%',
      'Achieved 95% user adoption rate',
      'Received positive feedback from 200+ beta users',
      'Successfully implemented human-centered design principles',
      'Enhanced user engagement through intuitive interface design'
    ],
    github: 'https://github.com/weijiehuang/ai-calendar-app',
    demo: 'https://ai-calendar-demo.netlify.app',
    figma: 'https://www.figma.com/proto/F2YeoRgkvnI4cvbPBcJcLP/AI-Calendar?node-id=4-3&t=oS9POAVjZCCBT0WE-1',
    gallery: [
      {
        image: '/resources/Home Page.png',
        title: 'Home Page',
        description: 'Calendar view with schedule and daily timeline'
      },
      {
        image: '/resources/Login Page.png',
        title: 'Login Page',
        description: 'User authentication interface with modern design'
      }
    ]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectData[projectId];

  // 如果项目不存在，返回404或重定向
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-blue-600 hover:text-blue-800">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection project={project} />
      
      {/* Project Overview */}
      <ProjectOverview project={project} />
      
      {/* My Contributions */}
      <ContributionsSection contributions={project.contributions} />
      
      {/* Key Features */}
      <KeyFeaturesSection features={project.features} />
      
      {/* Technologies */}
      <TechnologiesSection technologies={project.technologies} />
      
      {/* Challenges & Solutions */}
      <ChallengesSection challenges={project.challenges} />
      
      {/* Results & Impact */}
      <ResultsSection results={project.results} project={project} />
      
      {/* Gallery - Only show if project has gallery images */}
      {project.gallery && project.gallery.length > 0 && (
        <GallerySection gallery={project.gallery} />
      )}
      
      {/* Call to Action */}
      <CTASection project={project} navigate={navigate} />
    </div>
  );
};

// Hero Section Component
const HeroSection = ({ project }) => {
  return (
    <section className="hero-gradient pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Link
            to="/projects"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Projects
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Quick Info Cards */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-white px-4 py-3 rounded-xl shadow-md border border-gray-100">
                <div className="text-sm text-gray-500 mb-1">Duration</div>
                <div className="font-semibold text-gray-900">{project.date}</div>
              </div>
              {project.location && (
                <div className="bg-white px-4 py-3 rounded-xl shadow-md border border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">Location</div>
                  <div className="font-semibold text-gray-900">{project.location}</div>
                </div>
              )}
            </div>

            {/* Technology Preview */}
            <div>
              <div className="text-sm text-gray-500 mb-3">Technologies</div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full font-medium">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Project Main Image with Dark Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="dark-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-2xl"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Project Overview Component
const ProjectOverview = ({ project }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-blue-100"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Project Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {project.longDescription}
          </p>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Goals</h3>
            <ul className="space-y-3">
              {[
                'Enable efficient creation of high-quality, customized images',
                'Provide intuitive interfaces for users of all skill levels',
                'Enhance creative workflows through advanced generative technologies',
                'Ensure scalability and reliability for production use'
              ].map((goal, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Contributions Section Component
const ContributionsSection = ({ contributions }) => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Contributions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Key responsibilities and achievements throughout the project lifecycle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contributions.map((contribution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100 card-hover"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{contribution.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{contribution.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Key Features Section Component
const KeyFeaturesSection = ({ features }) => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Core functionality and capabilities of the platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white p-6 rounded-3xl shadow-lg border border-blue-100 card-hover"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Feature {index + 1}</h3>
              <p className="text-gray-600">{feature}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Technologies Section Component
const TechnologiesSection = ({ technologies }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // 技术分类
  const techCategories = {
    'Frontend': ['React.js'],
    'Backend': ['Python', 'FastAPI'],
    'Database': ['PostgreSQL'],
    'DevOps': ['Docker', 'AWS'],
    'Tools': ['Apifox']
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technologies Used</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern tech stack powering the platform
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm md:text-base px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Challenges Section Component
const ChallengesSection = ({ challenges }) => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Challenges & Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Key technical and design challenges encountered during development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-200"
            >
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-600 font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{challenge}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Results Section Component
const ResultsSection = ({ results, project }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // 根据项目类型显示不同的关键指标
  const getKeyMetrics = () => {
    if (project.category === 'UX Design') {
      // AI Calendar项目的指标
      return [
        { label: 'Time Saved', value: '40%', icon: '⏱️' },
        { label: 'Productivity', value: '+25%', icon: '📈' },
        { label: 'User Adoption', value: '95%', icon: '👥' },
        { label: 'Beta Users', value: '200+', icon: '⭐' }
      ];
    } else {
      // AI Platform项目的指标
      return [
        { label: 'Uptime', value: '99.9%', icon: '⚡' },
        { label: 'Requests Processed', value: '10,000+', icon: '📊' },
        { label: 'Response Time', value: '<3s', icon: '🚀' },
        { label: 'User Rating', value: '4.8/5', icon: '⭐' }
      ];
    }
  };

  const keyMetrics = getKeyMetrics();

  return (
    <section ref={ref} className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Results & Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Measurable outcomes and achievements
          </p>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {keyMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center"
            >
              <div className="text-4xl mb-3">{metric.icon}</div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
              <div className="text-gray-600 text-sm">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Results List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.map((result, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">{result}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Gallery Section Component
const GallerySection = ({ gallery }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-12 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Project Screenshots</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Key interface designs and user experience highlights
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`grid grid-cols-1 gap-4 ${
            gallery.length === 2 
              ? 'md:grid-cols-2 max-w-3xl mx-auto' 
              : 'md:grid-cols-3'
          }`}
        >
          {gallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="group"
            >
              <div className="dark-image-container mb-3" style={{ padding: '12px' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                  style={{ maxHeight: '300px', objectFit: 'contain' }}
                />
              </div>
              <div className="text-center">
                <h3 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = ({ project, navigate }) => {
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
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore the Project</h2>
        <p className="text-xl mb-8 opacity-90">
          Check out the code, view the live demo, or explore other projects
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
              Live Demo
            </a>
          )}
          {project.figma && (
            <a
              href={project.figma}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.264 9.8h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49h-4.588V9.8zm-4.588 0h4.588v9.621H7.676c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49z"/>
              </svg>
              View Figma Design
            </a>
          )}
          <Link
            to="/projects"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectDetail;

