import React, { useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Experience } from '../components/Experience';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

export const Portfolio: React.FC = () => {
  const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'testimonials', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 80);
  
  // Initialize scroll animations
  useScrollAnimations();

  // Initialize theme from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = stored || systemTheme;
    
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation activeSection={activeSection} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};