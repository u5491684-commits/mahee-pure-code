import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp Solutions',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Maheee's attention to detail and technical skills are exceptional. They delivered a beautiful, responsive website that exceeded our expectations. The code quality is outstanding and the project was completed on time."
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Startup Founder',
      company: 'InnovateLab',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Working with Maheee was a game-changer for our startup. They transformed our design mockups into a pixel-perfect, fast-loading website. Their communication skills and professionalism are top-notch."
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      company: 'CreativeHub',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Maheee has an excellent eye for design implementation. They understood our vision perfectly and brought it to life with clean, maintainable code. I highly recommend them for any frontend project."
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Senior Developer',
      company: 'WebFlow Agency',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Maheee is a talented developer with a strong understanding of modern web technologies. Their React components are well-structured and reusable. It's been a pleasure mentoring them."
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Business Owner',
      company: 'Local Restaurant',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Our restaurant's website looks amazing thanks to Maheee! The mobile version works perfectly, and we've seen a significant increase in online orders. Great work and excellent support."
    },
    {
      id: 6,
      name: 'Alex Kim',
      role: 'Marketing Director',
      company: 'Growth Solutions',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Maheee delivered exactly what we needed - a fast, SEO-optimized website that converts visitors into customers. Their technical expertise and attention to performance details are impressive."
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  // Auto-rotate testimonials
  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-neutral'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="section bg-surface">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What People Say</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Feedback from clients and colleagues I've had the pleasure to work with.
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="mb-12 fade-in">
            <div className="card-glow max-w-4xl mx-auto text-center relative">
              <Quote className="h-12 w-12 text-primary/20 mx-auto mb-6" />
              
              <blockquote className="text-lg md:text-xl text-foreground mb-6 italic leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={`${testimonials[currentIndex].name} profile`}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="text-left">
                  <div className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </div>
                  <div className="flex items-center mt-1">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                </div>
              </div>

              {/* Navigation dots */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      index === currentIndex 
                        ? 'bg-primary' 
                        : 'bg-neutral hover:bg-primary/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* All Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`card cursor-pointer transition-all duration-300 fade-in ${
                  index === currentIndex 
                    ? 'ring-2 ring-primary ring-opacity-50 scale-105' 
                    : 'hover:shadow-lg'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => goToTestimonial(index)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} profile`}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-primary">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                
                <blockquote className="text-sm text-muted-foreground italic leading-relaxed">
                  "{testimonial.text.substring(0, 120)}..."
                </blockquote>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center fade-in">
            <div className="card max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Ready to work together?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join these satisfied clients and let's create something amazing together.
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};