
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
    document.title = "Biteon - Web Development & Software Agency";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDescription) {
      metaDescription.setAttribute("content", "Biteon is a premium web development and software agency specializing in modern, futuristic solutions for businesses. Expert developers for digital transformation.");
    } else {
      // Create meta description if it doesn't exist
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", "Biteon is a premium web development and software agency specializing in modern, futuristic solutions for businesses. Expert developers for digital transformation.");
      document.getElementsByTagName('head')[0].appendChild(metaDescription);
    }

    // Add more meta tags for SEO
    const metaTags = [
      {
        name: "keywords",
        content: "web development, software agency, digital transformation, agile transformation, leadership coaching, consulting, biteon, eindhoven, netherlands"
      },
      {
        name: "author",
        content: "Biteon"
      },
      {
        property: "og:title",
        content: "Biteon - Web Development & Software Agency"
      },
      {
        property: "og:description",
        content: "Biteon is a premium web development and software agency specializing in modern, futuristic solutions for businesses."
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:url",
        content: "https://biteon.nl"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:title",
        content: "Biteon - Web Development & Software Agency"
      },
      {
        name: "twitter:description",
        content: "Biteon is a premium web development and software agency specializing in modern, futuristic solutions for businesses."
      }
    ];

    // Add structured data for rich results
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Biteon",
      "url": "https://biteon.nl",
      "logo": "https://biteon.nl/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+31622944402",
        "contactType": "customer service",
        "email": "info@biteon.nl"
      },
      "description": "Biteon is a premium web development and software agency specializing in modern, futuristic solutions for businesses.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Eindhoven",
        "addressCountry": "Netherlands"
      },
      "sameAs": [
        "https://www.linkedin.com/company/biteon",
        "https://twitter.com/biteon",
        "https://facebook.com/biteon"
      ]
    };

    // Add meta tags that don't exist
    metaTags.forEach(tag => {
      const selector = tag.name ? `meta[name="${tag.name}"]` : `meta[property="${tag.property}"]`;
      let metaTag = document.querySelector(selector) as HTMLMetaElement;
      
      if (!metaTag) {
        metaTag = document.createElement('meta');
        if (tag.name) metaTag.setAttribute("name", tag.name);
        if (tag.property) metaTag.setAttribute("property", tag.property);
        metaTag.setAttribute("content", tag.content);
        document.getElementsByTagName('head')[0].appendChild(metaTag);
      } else {
        metaTag.setAttribute("content", tag.content);
      }
    });

    // Add structured data script
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute("type", "application/ld+json");
      script.textContent = JSON.stringify(structuredData);
      document.getElementsByTagName('head')[0].appendChild(script);
    } else {
      script.textContent = JSON.stringify(structuredData);
    }

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", "https://biteon.nl");
      document.getElementsByTagName('head')[0].appendChild(canonical);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Technologies />
        <AboutUs />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
