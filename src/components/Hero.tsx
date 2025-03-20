
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-hero-pattern opacity-60 z-0"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-biteon-blue/5 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-biteon-blue/5 rounded-full filter blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-6/12 mb-12 md:mb-0">
            <ScrollReveal delay={300} direction="left" className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transforming <span className="gradient-text">Ideas</span> into <span className="gradient-text">Digital Reality</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                We craft innovative web and software solutions that elevate your business in the digital landscape. Experience the perfect blend of cutting-edge technology and functional design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.open('https://wa.me/31622944402', '_blank')}
                  className="bg-biteon-blue hover:bg-biteon-dark-blue text-white font-medium px-8 py-6 rounded-md transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  Chat With Us On WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="border-biteon-blue text-biteon-blue hover:bg-biteon-blue/10 font-medium px-8 py-6 rounded-md transition-all duration-300 text-lg"
                >
                  Explore Services
                </Button>
              </div>
            </ScrollReveal>
          </div>
          <div className="md:w-6/12 flex justify-center md:justify-end">
            <ScrollReveal delay={600} direction="right">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-biteon-blue to-biteon-dark-blue rounded-lg blur opacity-30 animate-pulse-slow"></div>
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Software development and business digital transformation" 
                  className="relative rounded-lg w-full h-auto object-cover shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-bold mb-1">Bridging Business & Technology</h4>
                    <p className="text-sm text-gray-200">Driving digital transformation with innovative solutions</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
