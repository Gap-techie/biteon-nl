
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
                  onClick={scrollToContact}
                  className="bg-biteon-blue hover:bg-biteon-dark-blue text-white font-medium px-8 py-6 rounded-md transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  Start Your Project
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
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-biteon-blue to-biteon-dark-blue rounded-lg blur opacity-30 animate-pulse-slow"></div>
                <div className="relative bg-white p-6 md:p-8 rounded-lg shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center justify-center p-4 md:p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                      <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-biteon-blue/10 rounded-full mb-3">
                        <span className="text-biteon-blue font-bold">WD</span>
                      </div>
                      <h3 className="font-semibold text-center">Web Development</h3>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 md:p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                      <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-biteon-blue/10 rounded-full mb-3">
                        <span className="text-biteon-blue font-bold">MA</span>
                      </div>
                      <h3 className="font-semibold text-center">Mobile Apps</h3>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 md:p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                      <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-biteon-blue/10 rounded-full mb-3">
                        <span className="text-biteon-blue font-bold">SD</span>
                      </div>
                      <h3 className="font-semibold text-center">System Design</h3>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 md:p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                      <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-biteon-blue/10 rounded-full mb-3">
                        <span className="text-biteon-blue font-bold">DO</span>
                      </div>
                      <h3 className="font-semibold text-center">DevOps</h3>
                    </div>
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
