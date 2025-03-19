
import { MessageCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle
} from '@/components/ui/dialog';

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    // First show the button
    const buttonTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Then show the popup message
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 3500);

    return () => {
      clearTimeout(buttonTimer);
      clearTimeout(popupTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/123456789', '_blank');
  };

  const closePopup = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPopup(false);
  };

  return (
    <>
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 flex items-end gap-3 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Popup message */}
        {showPopup && (
          <div 
            onClick={() => setShowDialog(true)}
            className="bg-white max-w-[240px] p-3 rounded-lg shadow-lg animate-fade-in cursor-pointer relative mb-2"
          >
            <button 
              onClick={closePopup}
              className="absolute -top-2 -right-2 bg-gray-200 rounded-full p-1"
            >
              <X size={14} />
            </button>
            <p className="text-sm font-medium text-gray-800">Need assistance? Chat with us now!</p>
          </div>
        )}

        {/* WhatsApp button */}
        <button
          onClick={handleWhatsAppClick}
          className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg flex items-center justify-center transform transition-all duration-300 hover:scale-110 whatsapp-bubble-animation"
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle size={24} />
        </button>
      </div>

      {/* Dialog with more information */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle>Connect with our team</DialogTitle>
          <DialogDescription>
            Our support team is available to answer your questions and provide assistance with your project.
          </DialogDescription>
          <div className="grid gap-4 py-4">
            <p className="text-sm text-muted-foreground">
              Reach out to us on WhatsApp for quick responses or use our contact form for detailed inquiries.
            </p>
            <button
              onClick={() => {
                handleWhatsAppClick();
                setShowDialog(false);
              }}
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded w-full flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
