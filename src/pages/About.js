import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const About = () => {
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
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A passionate data scientist and designer dedicated to creating meaningful digital experiences 
            that bridge the gap between complex data and human understanding.
          </motion.p>
        </div>
      </section>

      {/* Personal Story */}
      <PersonalStorySection />
      
      {/* Education Timeline */}
      <EducationTimelineSection />
      
      {/* Skills & Achievements */}
      <SkillsAchievementsSection />
      
      {/* Philosophy */}
      <PhilosophySection />
      
      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

// Personal Story Section
const PersonalStorySection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/resources/hero-image.png"
              alt="Weijie Huang"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bridging <span className="text-gradient">Data & Design</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm currently pursuing a Master of Data Science at The University of Sydney, building upon my 
              Bachelor of Science in Information Technology from UTS. This unique combination of technical 
              education and design thinking allows me to approach complex data challenges with both analytical 
              rigor and human-centered perspective.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              My journey began with a strong foundation in interaction design and software development at UTS, 
              where I discovered the power of combining technical skills with user experience thinking. My 
              professional experience spans from account management in financial services to data analytics 
              internships, giving me a unique perspective on business needs and technical solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              As a professional badminton player, I bring a competitive spirit 
              and strategic mindset to everything I do. This achievement reflects my dedication to excellence, 
              continuous improvement, and the ability to perform under pressure - qualities that directly 
              translate to my professional work in fast-paced technology environments.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">15+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Education Timeline Section
const EducationTimelineSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const timelineItems = [
    {
      title: "Account Manager",
      period: "Sep 2025 – Present",
      institution: "TMGM, Sydney",
      description: "Promoted and traded equity products focusing on US and Hong Kong stocks, contributing to a 10% increase in new client acquisitions. Built and maintained a pipeline of 50+ active clients through proactive outreach and relationship management."
    },
    {
      title: "Master of Data Science",
      period: "Fed 2024 – Jul 2025",
      institution: "The University of Sydney",
      description: "Specializing in machine learning, data engineering, and statistical analysis. Currently working on advanced AI applications and data pipeline optimization."
    },
    {
      title: "Data & Business Analytics Intern",
      period: "Feb 2024 – Jun 2024",
      institution: "Tyroola, Sydney",
      description: "Developed automated dashboards and performed financial reconciliation to optimize sales tracking and reporting efficiency. Built Excel cube-based data analytics pipelines and integrated sales, payment, and inventory datasets."
    },
    {
      title: "Bachelor of Science in Information Technology",
      period: "Feb 2021 – Dec 2023",
      institution: "University of Technology Sydney (UTS)",
      description: "Specialized in interaction design and software development, building a strong foundation in user experience design, programming, and system architecture. This undergraduate degree provided the technical and design thinking skills that form the basis of my current data science and UX expertise."
    }
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16"
        >
          Education & <span className="text-gradient">Experience</span>
        </motion.h2>
        
        <div className="space-y-12">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="timeline-item"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <span className="text-blue-600 font-medium">{item.period}</span>
                </div>
                <p className="text-gray-600 mb-2">{item.institution}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills & Achievements Section
const SkillsAchievementsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const achievements = [
    {
      icon: (
        <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "🏆 2024 ABL Badminton League Champion",
      description: "Achieved first place in B Group Men's Singles at the Australian Badminton League, demonstrating strategic thinking, competitive excellence, and the ability to perform under pressure - skills that directly enhance my professional capabilities.",
      bgColor: "bg-gradient-to-r from-yellow-100 to-orange-100"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: "AI Platform Development",
      description: "Designed and developed a comprehensive AI image generation platform with robust backend APIs and elegant user interface.",
      bgColor: "bg-purple-100"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      ),
      title: "Analytics Dashboard",
      description: "Built automated business intelligence dashboards that improved month-end reporting accuracy and efficiency for Tyroola.",
      bgColor: "bg-green-100"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      ),
      title: "UX Design Excellence",
      description: "Led interaction design for AI-powered applications, conducting extensive usability testing and creating high-fidelity prototypes.",
      bgColor: "bg-orange-100"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      title: "Team Collaboration",
      description: "Successfully collaborated with cross-functional teams including developers, designers, and business stakeholders on multiple projects.",
      bgColor: "bg-red-100"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      ),
      title: "Technical Innovation",
      description: "Continuously exploring emerging technologies and implementing innovative solutions in data science and user experience design.",
      bgColor: "bg-indigo-100"
    }
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16"
        >
          Skills & <span className="text-gradient">Achievements</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="achievement-card"
            >
              <div className={`w-16 h-16 ${achievement.bgColor} rounded-full flex items-center justify-center mb-6`}>
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Philosophy Section
const PhilosophySection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
        >
          My <span className="text-gradient">Philosophy</span>
        </motion.h2>
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl text-gray-700 font-medium mb-8"
        >
          "Bridging creativity and analytics to build intelligent, human-centered systems."
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-600 leading-relaxed"
        >
          I believe that the best data solutions are those that feel intuitive and natural to use. 
          By combining rigorous analytical thinking with empathetic design, we can create systems 
          that not only process information efficiently but also empower users to make better decisions.
        </motion.p>
      </div>
    </section>
  );
};

// CTA Section
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
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
        <p className="text-xl mb-8 opacity-90">
          I'm always interested in discussing new opportunities and collaborations in data science, design, and technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Get In Touch
          </Link>
          <Link
            to="/projects"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            View My Work
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
