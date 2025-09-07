import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

// Import project images
import ecommerceImg from '../assets/project-ecommerce.jpg';
import weatherImg from '../assets/project-weather.jpg';
import tasksImg from '../assets/project-tasks.jpg';
import socialImg from '../assets/project-social.jpg';
import restaurantImg from '../assets/project-restaurant.jpg';
import portfolioImg from '../assets/project-portfolio.jpg';

export const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A modern e-commerce admin dashboard with real-time analytics, inventory management, and order tracking. Built with React and TypeScript.',
      image: ecommerceImg,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      demoUrl: 'https://demo-ecommerce.maheedev.com',
      codeUrl: 'https://github.com/maheedev/ecommerce-dashboard',
      featured: true,
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather metrics. Responsive design for all devices.',
      image: weatherImg,
      technologies: ['JavaScript', 'CSS3', 'Weather API', 'Geolocation'],
      demoUrl: 'https://weather-app.maheedev.com',
      codeUrl: 'https://github.com/maheedev/weather-app',
      featured: false,
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'A productivity app with drag-and-drop kanban boards, task scheduling, team collaboration features, and progress tracking.',
      image: tasksImg,
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      demoUrl: 'https://tasks.maheedev.com',
      codeUrl: 'https://github.com/maheedev/task-manager',
      featured: true,
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media management tool with analytics, post scheduling, and engagement tracking across multiple platforms.',
      image: socialImg,
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Social APIs'],
      demoUrl: 'https://social-dashboard.maheedev.com',
      codeUrl: 'https://github.com/maheedev/social-dashboard',
      featured: false,
    },
    {
      id: 5,
      title: 'Restaurant Website',
      description: 'An elegant restaurant website with online menu, reservation system, photo gallery, and customer reviews. Mobile-first design.',
      image: restaurantImg,
      technologies: ['HTML5', 'SCSS', 'JavaScript', 'PHP'],
      demoUrl: 'https://restaurant.maheedev.com',
      codeUrl: 'https://github.com/maheedev/restaurant-site',
      featured: false,
    },
    {
      id: 6,
      title: 'Creative Portfolio',
      description: 'A showcase portfolio website for a creative agency featuring stunning animations, project galleries, and client testimonials.',
      image: portfolioImg,
      technologies: ['React', 'Framer Motion', 'GSAP', 'Netlify'],
      demoUrl: 'https://creative-portfolio.maheedev.com',
      codeUrl: 'https://github.com/maheedev/creative-portfolio',
      featured: true,
    },
  ];

  const [filter, setFilter] = React.useState('All');
  const [visibleProjects, setVisibleProjects] = React.useState(6);

  const filters = ['All', 'React', 'JavaScript', 'Featured'];

  const filteredProjects = React.useMemo(() => {
    if (filter === 'All') return projects;
    if (filter === 'Featured') return projects.filter(p => p.featured);
    return projects.filter(p => p.technologies.some(tech => 
      tech.toLowerCase().includes(filter.toLowerCase())
    ));
  }, [filter]);

  return (
    <section id="projects" className="section bg-surface">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my skills in frontend development, from concept to deployment.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 fade-in">
            {filters.map((filterName) => (
              <button
                key={filterName}
                onClick={() => setFilter(filterName)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === filterName
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-secondary text-secondary-foreground hover:bg-neutral'
                }`}
              >
                {filterName}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.slice(0, visibleProjects).map((project, index) => (
              <article
                key={project.id}
                className="card group cursor-pointer fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                        aria-label={`View ${project.title} demo`}
                      >
                        <Eye className="h-5 w-5 text-primary" />
                      </a>
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                        aria-label={`View ${project.title} code`}
                      >
                        <Github className="h-5 w-5 text-primary" />
                      </a>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary hover:text-primary-dark transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg px-2 py-1"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg px-2 py-1"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      View Code
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          {filteredProjects.length > visibleProjects && (
            <div className="text-center mt-12 fade-in">
              <button
                onClick={() => setVisibleProjects(prev => prev + 3)}
                className="btn-secondary"
              >
                Load More Projects
              </button>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 text-center fade-in">
            <div className="card-glow max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Interested in working together?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new opportunities and exciting projects.
              </p>
              <a
                href="mailto:yourname@example.com"
                className="btn-primary"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};