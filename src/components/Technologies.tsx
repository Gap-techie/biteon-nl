
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Server, Database, TestTube, Cloud, Layers } from 'lucide-react';

const techCategories = [
  {
    id: "languages",
    label: "Languages",
    icon: <Code className="w-5 h-5 mr-2" />,
    items: ["Java", "JavaScript", "TypeScript", "C#", "Python", "Go", "PHP"]
  },
  {
    id: "frameworks",
    label: "Frameworks",
    icon: <Layers className="w-5 h-5 mr-2" />,
    items: ["Spring Boot", "Flask", "React", "React Native", "Next.js", "Angular", "Gatsby", "Laravel", "Expo", "gRPC"]
  },
  {
    id: "databases",
    label: "Databases & APIs",
    icon: <Database className="w-5 h-5 mr-2" />,
    items: ["Oracle", "MongoDB", "PostgreSQL", "GraphQL", "Spark"]
  },
  {
    id: "testing",
    label: "Testing & QA",
    icon: <TestTube className="w-5 h-5 mr-2" />,
    items: ["JUnit", "Mockito", "REST-assured", "Jest", "Cypress"]
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5 mr-2" />,
    items: ["AWS", "Azure", "Docker", "Jenkins", "GitHub Actions"]
  },
  {
    id: "tools",
    label: "UI & Build Tools",
    icon: <Server className="w-5 h-5 mr-2" />,
    items: ["Webpack", "Babel", "Storybook", "Bootstrap", "HTML5", "SCSS/CSS"]
  }
];

export function Technologies() {
  return (
    <section id="technologies" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-pattern opacity-60 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Tools & Technologies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable, and innovative solutions.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <Tabs defaultValue="languages" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <TabsList className="bg-gray-100 p-1 rounded-full">
                {techCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id}
                    value={category.id}
                    className="rounded-full px-4 py-2 data-[state=active]:bg-white data-[state=active]:text-biteon-blue data-[state=active]:shadow-sm transition-all duration-300 flex items-center"
                  >
                    {category.icon}
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {techCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {category.items.map((tech, index) => (
                    <div 
                      key={index}
                      className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-biteon-blue/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 flex items-center justify-center bg-biteon-blue/10 rounded-full mb-3">
                        <span className="text-biteon-blue font-semibold text-sm">{tech.substring(0, 2)}</span>
                      </div>
                      <span className="text-gray-800 font-medium text-center">{tech}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </ScrollReveal>
      </div>
    </section>
  );
}
