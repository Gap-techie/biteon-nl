
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { AboutUs } from '@/components/AboutUs';
import { Technologies } from '@/components/Technologies';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "Biteon - Web Development & Software Agency in the Netherlands";
    
    // Try to find and update meta description
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDescription) {
      metaDescription.setAttribute("content", "Biteon is a premium web development and software agency in the Netherlands, specializing in modern, futuristic solutions for businesses.");
    } else {
      // Create meta description if it doesn't exist
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", "Biteon is a premium web development and software agency in the Netherlands, specializing in modern, futuristic solutions for businesses.");
      document.getElementsByTagName('head')[0].appendChild(metaDescription);
    }
    
    // Add structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Biteon",
      "url": "https://biteon.nl",
      "logo": "https://biteon.nl/lovable-uploads/07d321d4-a06d-45cb-929d-98c40a0607ed.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+31622944402",
        "contactType": "customer service",
        "email": "info@biteon.nl"
      },
      "sameAs": [
        "https://www.linkedin.com/company/biteon",
        "https://twitter.com/biteon",
        "https://facebook.com/biteon"
      ],
      "description": "Biteon is a forward-thinking software agency dedicated to transforming business challenges into elegant digital solutions."
    };
    
    // Add the structured data to the page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      // Clean up
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <AboutUs />
        <Technologies />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
