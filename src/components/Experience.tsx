import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'TechCorp Solutions',
      location: 'Remote',
      period: '2024 - 2025',
      current: true,
      description: [
        'Developed responsive web applications using React, TypeScript, and Tailwind CSS',
        'Collaborated with design team to implement pixel-perfect UI components',
        'Optimized application performance resulting in 40% faster load times',
        'Participated in code reviews and agile development processes',
        'Built reusable component library used across multiple projects'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Git', 'Jest']
    },
    {
      id: 2,
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2023 - 2024',
      current: false,
      description: [
        'Delivered 15+ custom websites for small businesses and startups',
        'Specialized in responsive design and cross-browser compatibility',
        'Integrated third-party APIs and payment systems',
        'Provided ongoing maintenance and support for client websites',
        'Achieved 100% client satisfaction rate with on-time project delivery'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Figma']
    },
    {
      id: 3,
      title: 'Web Development Student',
      company: 'Online Bootcamp',
      location: 'Remote',
      period: '2023',
      current: false,
      description: [
        'Completed intensive 6-month full-stack web development program',
        'Built 10+ projects including e-commerce sites and web applications',
        'Learned modern web development best practices and methodologies',
        'Collaborated on team projects using Git and agile methodologies',
        'Graduated top 10% of cohort with highest project scores'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB']
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey in web development, from learning to building real-world applications.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-px bg-border"></div>

            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex items-center mb-12 fade-in ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10">
                  {experience.current && (
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="card">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {experience.title}
                        </h3>
                        <div className="flex items-center text-primary font-medium mb-2">
                          <Briefcase className="h-4 w-4 mr-2" />
                          {experience.company}
                        </div>
                      </div>
                      {experience.current && (
                        <span className="px-2 py-1 bg-success/10 text-success text-xs font-medium rounded-full border border-success/20">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Period and Location */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {experience.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {experience.location}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4 text-muted-foreground">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span key={tech} className="skill-tag text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 fade-in">
            <div className="card text-center">
              <h3 className="text-xl font-semibold mb-4 text-foreground">What's Next?</h3>
              <p className="text-muted-foreground mb-6">
                I'm currently seeking new opportunities to grow as a frontend developer and contribute to innovative projects. 
                I'm particularly interested in roles that involve modern React development, TypeScript, and collaborative team environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/resume/resume.pdf"
                  download="Maheee_Resume.pdf"
                  className="btn-primary"
                >
                  Download Resume
                </a>
                <a
                  href="mailto:yourname@example.com"
                  className="btn-secondary"
                >
                  Let's Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};