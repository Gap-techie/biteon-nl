
import { Users, ChartBar, Award, Clock } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';

export function AboutUs() {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-biteon-blue" />,
      value: "20+",
      label: "Expert Developers"
    },
    {
      icon: <ChartBar className="h-8 w-8 text-biteon-blue" />,
      value: "150+",
      label: "Projects Completed"
    },
    {
      icon: <Award className="h-8 w-8 text-biteon-blue" />,
      value: "10+",
      label: "Industry Awards"
    },
    {
      icon: <Clock className="h-8 w-8 text-biteon-blue" />,
      value: "8+",
      label: "Years of Experience"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-biteon-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-biteon-blue/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Biteon team working together" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Biteon team meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Biteon</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2016, Biteon is a forward-thinking software agency dedicated to transforming business challenges into elegant digital solutions. Our team of passionate developers, designers, and strategists work together to create exceptional digital experiences.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We believe in pushing technological boundaries while maintaining a focus on usability, accessibility, and performance. Every line of code we write and every pixel we design serves a purpose in your digital journey.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className="mb-2 mt-2">{stat.icon}</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-biteon-blue">{stat.value}</h3>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
