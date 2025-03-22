
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Server, Database, TestTube, Cloud, Layers } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';

// Technology logos and data
const techCategories = [
  {
    id: "languages",
    label: "Languages",
    icon: <Code className="w-5 h-5 mr-2" />,
    items: [
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" },
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
    ]
  },
  {
    id: "frameworks",
    label: "Frameworks",
    icon: <Layers className="w-5 h-5 mr-2" />,
    items: [
      { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "Gatsby", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original.svg" },
      { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
      { name: "Expo", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "gRPC", logo: "https://grpc.io/img/logos/grpc-icon-color.png" }
    ]
  },
  {
    id: "databases",
    label: "Databases & APIs",
    icon: <Database className="w-5 h-5 mr-2" />,
    items: [
      { name: "Oracle", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
      { name: "Spark", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg" }
    ]
  },
  {
    id: "testing",
    label: "Testing & QA",
    icon: <TestTube className="w-5 h-5 mr-2" />,
    items: [
      { name: "JUnit", logo: "https://junit.org/junit5/assets/img/junit5-logo.png" },
      { name: "Mockito", logo: "https://raw.githubusercontent.com/mockito/mockito/main/src/javadoc/org/mockito/logo.png" },
      { name: "REST-assured", logo: "https://rest-assured.io/img/logo-transparent.png" },
      { name: "Jest", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
      { name: "Cypress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypress/cypress-original.svg" }
    ]
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5 mr-2" />,
    items: [
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "GitHub Actions", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
    ]
  },
  {
    id: "tools",
    label: "UI & Build Tools",
    icon: <Server className="w-5 h-5 mr-2" />,
    items: [
      { name: "Webpack", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
      { name: "Babel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" },
      { name: "Storybook", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg" },
      { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "SCSS/CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" }
    ]
  }
];

export function Technologies() {
  const [activeCategory, setActiveCategory] = useState("languages");
  const [isHovering, setIsHovering] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);

  // Auto-toggle between categories
  const rotateCategories = useCallback(() => {
    const currentIndex = techCategories.findIndex(cat => cat.id === activeCategory);
    const nextIndex = (currentIndex + 1) % techCategories.length;
    
    // First trigger the exit animation
    setAnimateCards(false);
    
    // Then after a short delay, change the category and trigger the entrance animation
    setTimeout(() => {
      setActiveCategory(techCategories[nextIndex].id);
      setAnimateCards(true);
    }, 300); // This delay should match the exit animation duration
  }, [activeCategory]);

  useEffect(() => {
    let interval: number | null = null;
    
    // Start the animation for the first load
    setAnimateCards(true);
    
    // Only auto-rotate if not hovering
    if (!isHovering) {
      interval = window.setInterval(() => {
        rotateCategories();
      }, 4000); // Changed from 4000 to 4000 (consistent with Services component)
    }
    
    return () => {
      if (interval !== null) {
        clearInterval(interval);
      }
    };
  }, [isHovering, rotateCategories]);

  // When user manually changes tab, animate the cards
  const handleTabChange = (value: string) => {
    if (value === activeCategory) return;
    
    // First trigger the exit animation
    setAnimateCards(false);
    
    // Then after a short delay, change the category and trigger the entrance animation
    setTimeout(() => {
      setActiveCategory(value);
      setAnimateCards(true);
    }, 300);
  };

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
          <Tabs 
            value={activeCategory} 
            onValueChange={handleTabChange}
            className="w-full"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <TabsList className="bg-gray-100 p-1 rounded-full">
                {techCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id}
                    value={category.id}
                    className="rounded-full px-4 py-2 data-[state=active]:bg-white data-[state=active]:text-biteon-blue data-[state=active]:shadow-sm transition-all duration-500 flex items-center"
                  >
                    {category.icon}
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {techCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6 transition-all duration-500">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {category.items.map((tech, index) => (
                    <div 
                      key={index}
                      className={`flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-biteon-blue/30 transition-all duration-500 ${
                        animateCards 
                          ? 'opacity-100 transform translate-y-0 scale-100' 
                          : 'opacity-0 transform translate-y-4 scale-95'
                      }`}
                      style={{ 
                        transitionDelay: `${animateCards ? index * 50 : 0}ms`
                      }}
                    >
                      <div className="w-12 h-12 flex items-center justify-center mb-3">
                        <img 
                          src={tech.logo} 
                          alt={`${tech.name} logo`} 
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => {
                            // Fallback for failed logo loading
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><text x="50%" y="50%" font-size="14" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-weight="bold" fill="%232271BF">${tech.name.substring(0, 2)}</text></svg>`;
                          }}
                        />
                      </div>
                      <span className="text-gray-800 font-medium text-center">{tech.name}</span>
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
