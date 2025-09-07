import React from 'react';

export const Skills: React.FC = () => {
  const skills = [
    { name: 'HTML5', level: 95, category: 'Frontend' },
    { name: 'CSS3', level: 90, category: 'Frontend' },
    { name: 'JavaScript (ES6+)', level: 85, category: 'Frontend' },
    { name: 'React', level: 80, category: 'Frontend' },
    { name: 'TypeScript', level: 75, category: 'Frontend' },
    { name: 'Responsive Design', level: 95, category: 'Design' },
    { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
    { name: 'Git & GitHub', level: 85, category: 'Tools' },
    { name: 'Figma', level: 80, category: 'Design' },
    { name: 'Webpack', level: 70, category: 'Tools' },
    { name: 'REST APIs', level: 80, category: 'Backend' },
    { name: 'Node.js', level: 65, category: 'Backend' },
  ];

  const categories = ['All', 'Frontend', 'Design', 'Tools', 'Backend'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and the tools I use to bring ideas to life.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 fade-in">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-secondary text-secondary-foreground hover:bg-neutral'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="card group fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-neutral rounded-full h-2 mb-3">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-primary to-primary-light transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1 + 0.5}s`
                    }}
                  ></div>
                </div>
                
                {/* Category Badge */}
                <span className="skill-tag">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center fade-in">
            <div className="card max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Always Learning</h3>
              <p className="text-muted-foreground mb-4">
                The web development landscape is constantly evolving, and I'm committed to staying current with the latest technologies and best practices.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Vue.js', 'Next.js', 'GraphQL', 'Web3', 'Three.js'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    Currently Learning: {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};