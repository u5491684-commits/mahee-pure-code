import React from 'react';
import { Code, Heart, Coffee } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section bg-surface">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="fade-in">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Passionate about creating exceptional digital experiences
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a frontend developer who believes in the power of clean, maintainable code 
                  and user-centered design. With a strong foundation in modern web technologies, 
                  I create interfaces that are not only visually appealing but also highly functional 
                  and accessible.
                </p>
                <p>
                  My journey in web development started with curiosity about how websites work, 
                  and has evolved into a passion for crafting seamless user experiences. I enjoy 
                  the challenge of transforming complex problems into simple, elegant solutions.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new design trends, contributing to 
                  open-source projects, or learning about the latest frontend technologies. I believe 
                  in continuous learning and staying up-to-date with the ever-evolving web landscape.
                </p>
              </div>

              {/* Fun Facts */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 rounded-xl bg-card border border-border hover:shadow-md transition-all duration-200">
                  <Code className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-card border border-border hover:shadow-md transition-all duration-200">
                  <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-card border border-border hover:shadow-md transition-all duration-200">
                  <Coffee className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">∞</div>
                  <div className="text-sm text-muted-foreground">Cups of Coffee</div>
                </div>
              </div>
            </div>

            {/* Image/Illustration */}
            <div className="fade-in relative">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Code className="h-16 w-16 text-primary" />
                    </div>
                    <p className="text-muted-foreground font-medium">
                      Building the future, one line of code at a time
                    </p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-glow"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full animate-glow" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 -left-6 w-4 h-4 bg-primary/30 rounded-full animate-glow" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};