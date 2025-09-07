import React from 'react';
import { Download, ExternalLink, Github, Linkedin, Twitter } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section-hero min-h-screen flex items-center justify-center relative">
      <div className="container text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Hi, I'm <span className="text-white">Maheee</span>
          </h1>
          <div className="text-xl md:text-2xl font-medium mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Frontend Developer
          </div>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            I build fast, accessible web interfaces with clean, maintainable code.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center items-center space-x-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://github.com/maheedev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/maheedev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/maheedev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-medium bg-white text-primary hover:bg-white/90 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent shadow-lg"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View My Work
            </button>
            <a
              href="/resume/resume.pdf"
              download="Maheee_Resume.pdf"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-white/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};