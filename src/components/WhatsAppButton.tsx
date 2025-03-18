
import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/123456789', '_blank');
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <button
        onClick={handleWhatsAppClick}
        className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg flex items-center justify-center transform transition-all duration-300 hover:scale-110 whatsapp-bubble-animation"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
}
