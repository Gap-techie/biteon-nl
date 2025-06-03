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
    <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-6/12 mb-12 md:mb-0">
            <ScrollReveal delay={300} direction="left" className="max-w-2xl glass-card p-6 rounded-xl">
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
              <div className="overflow-hidden">
                <img 
                  src="/statics-uploads/ac3d8970-3f0b-488b-b1e4-205ab4bb1cf8.png" 
                  alt="Software development and business digital transformation" 
                  className="w-full h-auto object-cover opacity-90"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
