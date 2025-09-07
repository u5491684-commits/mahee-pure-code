import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/maheedev',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/maheedev',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/maheedev',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:yourname@example.com',
    },
  ];

  const navigationLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gradient mb-4">Maheee</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Frontend Developer passionate about creating exceptional digital experiences 
                with clean, maintainable code and user-centered design.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
              <nav className="space-y-2">
                {navigationLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg px-2 py-1 text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <a
                    href="mailto:yourname@example.com"
                    className="hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg px-1 py-0.5"
                  >
                    yourname@example.com
                  </a>
                </p>
                <p>Remote / Available Worldwide</p>
                <p className="text-sm">
                  <a
                    href="/resume/resume.pdf"
                    download="Maheee_Resume.pdf"
                    className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg px-1 py-0.5"
                  >
                    Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground text-sm mb-4 md:mb-0">
              <p className="flex items-center">
                © {currentYear} Maheee. Made with{' '}
                <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" />
                and lots of coffee.
              </p>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg px-3 py-2"
              aria-label="Back to top"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>

          {/* Legal Links */}
          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-xs text-muted-foreground">
              <button className="hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg px-2 py-1">
                Privacy Policy
              </button>
              <button className="hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg px-2 py-1">
                Terms of Service
              </button>
              <span>|</span>
              <p>All rights reserved. Built with React & TypeScript.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};