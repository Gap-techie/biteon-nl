
import { Code, Server, Smartphone, Layout, Database, Cloud, GitBranch, UserCog, Search, Presentation } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useEffect, useState, useCallback } from 'react';

const developmentServices = [
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

const advisoryServices = [
  {
    icon: <GitBranch className="h-10 w-10 text-biteon-blue" />,
    title: 'Agile & SAFe Transformation',
    description: 'Implement and scale Agile frameworks like Scrum, SAFe, and Kanban for high-performing teams.',
  },
  {
    icon: <UserCog className="h-10 w-10 text-biteon-blue" />,
    title: 'Leadership & Coaching',
    description: 'Elevate your leaders with executive coaching and Agile mindset training.',
  },
  {
    icon: <Search className="h-10 w-10 text-biteon-blue" />,
    title: 'Consulting & Strategy',
    description: 'Get expert guidance on Agile adoption, process optimization, and change management.',
  },
  {
    icon: <Presentation className="h-10 w-10 text-biteon-blue" />,
    title: 'Workshops & Training',
    description: 'Hands-on training for teams, Scrum Masters, and executives to drive Agile excellence.',
  },
];

export function Services() {
  const [activeTab, setActiveTab] = useState("development");
  const [isHovering, setIsHovering] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);
  const [visibleCards, setVisibleCards] = useState(developmentServices);
  
  // Auto-toggle between categories
  const rotateCategories = useCallback(() => {
    const nextTab = activeTab === "development" ? "advisory" : "development";
    
    // First trigger the exit animation
    setAnimateCards(false);
    
    // Then after a short delay, change the category and trigger the entrance animation
    setTimeout(() => {
      setActiveTab(nextTab);
      setVisibleCards(nextTab === "development" ? developmentServices : advisoryServices);
      setAnimateCards(true);
    }, 300); // This delay should match the exit animation duration
  }, [activeTab]);

  useEffect(() => {
    let interval: number | null = null;
    
    // Start the animation for the first load
    setAnimateCards(true);
    
    // Only auto-rotate if not hovering
    if (!isHovering) {
      interval = window.setInterval(() => {
        rotateCategories();
      }, 5000); // Rotate every 5 seconds
    }
    
    return () => {
      if (interval !== null) {
        clearInterval(interval);
      }
    };
  }, [isHovering, rotateCategories]);

  // When user manually changes tab, animate the cards
  const handleTabChange = (value: string) => {
    if (value === activeTab) return;
    
    // First trigger the exit animation
    setAnimateCards(false);
    
    // Then after a short delay, change the category and trigger the entrance animation
    setTimeout(() => {
      setActiveTab(value);
      setVisibleCards(value === "development" ? developmentServices : advisoryServices);
      setAnimateCards(true);
    }, 300);
  };

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

        <ScrollReveal className="mb-12">
          <Tabs 
            defaultValue="development" 
            value={activeTab}
            onValueChange={handleTabChange}
            className="w-full flex flex-col items-center"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <TabsList className="mb-8 bg-gray-100/80 p-1 rounded-full">
              <TabsTrigger value="development" className="rounded-full px-6 py-2">
                Development
              </TabsTrigger>
              <TabsTrigger value="advisory" className="rounded-full px-6 py-2">
                Advisory & Transformation
              </TabsTrigger>
            </TabsList>

            <TabsContent value="development" className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {developmentServices.map((service, index) => (
                  <ScrollReveal key={index} delay={index * 100} className="h-full">
                    <div 
                      className={`bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-500 border border-gray-100 h-full flex flex-col transform hover:scale-[1.02] ${
                        animateCards && activeTab === "development"
                          ? 'opacity-100 transform translate-y-0 scale-100' 
                          : 'opacity-0 transform translate-y-4 scale-95'
                      }`}
                      style={{ 
                        transitionDelay: `${animateCards ? index * 50 : 0}ms`
                      }}
                    >
                      <div className="bg-biteon-blue/10 w-16 h-16 rounded-lg flex items-center justify-center mb-5">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-gray-600 flex-grow">{service.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="advisory" className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {advisoryServices.map((service, index) => (
                  <ScrollReveal key={index} delay={index * 100} className="h-full">
                    <div 
                      className={`bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-500 border border-gray-100 h-full flex flex-col transform hover:scale-[1.02] ${
                        animateCards && activeTab === "advisory"
                          ? 'opacity-100 transform translate-y-0 scale-100' 
                          : 'opacity-0 transform translate-y-4 scale-95'
                      }`}
                      style={{ 
                        transitionDelay: `${animateCards ? index * 50 : 0}ms`
                      }}
                    >
                      <div className="bg-biteon-blue/10 w-16 h-16 rounded-lg flex items-center justify-center mb-5">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-gray-600 flex-grow">{service.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </ScrollReveal>
      </div>
    </section>
  );
}
