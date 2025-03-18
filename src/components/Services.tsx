
import { Code, Server, Smartphone, Layout, Database, Cloud } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const services = [
  {
    icon: <Layout className="h-10 w-10 text-biteon-blue" />,
    title: 'Web Design & Development',
    description: 'Create responsive, user-friendly websites that drive engagement and conversions with modern technologies.',
  },
  {
    icon: <Smartphone className="h-10 w-10 text-biteon-blue" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications crafted for optimal performance and user experience.',
  },
  {
    icon: <Code className="h-10 w-10 text-biteon-blue" />,
    title: 'Custom Software',
    description: 'Tailor-made software solutions designed to address your specific business challenges and requirements.',
  },
  {
    icon: <Server className="h-10 w-10 text-biteon-blue" />,
    title: 'Backend Systems',
    description: 'Scalable and secure backend architectures that power your applications with reliable performance.',
  },
  {
    icon: <Database className="h-10 w-10 text-biteon-blue" />,
    title: 'Database Design',
    description: 'Efficient database structures ensuring data integrity, security, and optimal query performance.',
  },
  {
    icon: <Cloud className="h-10 w-10 text-biteon-blue" />,
    title: 'DevOps & Cloud',
    description: 'Streamline deployment processes and infrastructure management with modern DevOps practices.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-biteon-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-biteon-blue/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive software solutions tailored to meet the unique needs of your business.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100} className="h-full">
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
                <div className="bg-biteon-blue/10 w-16 h-16 rounded-lg flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
