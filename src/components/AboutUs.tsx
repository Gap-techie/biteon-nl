
import { Code2, Rocket } from 'lucide-react';

export function AboutUs() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-biteon-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-biteon-blue/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative overflow-hidden">
                {/* <div className="absolute inset-0 bg-biteon-gradient-trans rounded-2xl"></div> */}
                <img 
                  // src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  src="/statics-uploads/about-us.png" 
                  alt="Biteon team working together" 
                  className="w-full h-auto object-cover"
                  // alt="Biteon team working together" 
                  // className="w-full h-auto object-cover aspect-[4/3] rounded-2xl transition-all hover:scale-105 duration-500"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-biteon-blue/30 to-transparent"></div> */}
              </div>
            </div>
          
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
              <p className="text-lg text-gray-700 mb-6">
                Biteon is a forward-thinking software agency dedicated to transforming business challenges into elegant digital solutions. Our team of passionate developers, designers, and strategists work together to create exceptional digital experiences.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Founded with a vision to revolutionize digital solutions, Biteon brings together expertise, innovation, and dedication to deliver exceptional software solutions.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-biteon-blue text-white">
                      <Code2 className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Expert Development Team</h3>
                    <p className="mt-2 text-gray-600">Our developers bring years of experience across various technologies and industries.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-biteon-blue text-white">
                      <Rocket className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Innovative Solutions</h3>
                    <p className="mt-2 text-gray-600">We stay ahead of the curve by embracing cutting-edge technologies and methodologies.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
