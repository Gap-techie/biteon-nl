
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function AboutUs() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-biteon-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-biteon-blue/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
              <p className="text-lg text-gray-700 mb-6">
                Biteon is a forward-thinking software agency dedicated to transforming business challenges into elegant digital solutions. Our team of passionate developers, designers, and strategists work together to create exceptional digital experiences.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Founded with a vision to revolutionize digital solutions, Biteon brings together expertise, innovation, and dedication to deliver exceptional software solutions.
              </p>

              <div className="flex flex-col space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 p-4 rounded-lg">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Expert Development Team</h3>
                    <p className="text-gray-600">Our developers bring years of experience across various technologies and industries.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 p-4 rounded-lg">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 14L11.2929 14.7071L12 15.4142L12.7071 14.7071L12 14ZM5.29289 8.70711L11.2929 14.7071L12.7071 13.2929L6.70711 7.29289L5.29289 8.70711ZM12.7071 14.7071L18.7071 8.70711L17.2929 7.29289L11.2929 13.2929L12.7071 14.7071Z" fill="currentColor"/>
                      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Innovative Solutions</h3>
                    <p className="text-gray-600">We stay ahead of the curve by embracing cutting-edge technologies and methodologies.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/f50391a4-a248-4fd6-a70a-db6bd10add33.png" 
                  alt="Biteon team working together" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
