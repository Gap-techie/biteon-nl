
import { MessageCircle, X, ArrowDown } from 'lucide-react';
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
    window.open('https://wa.me/31622944402', '_blank');
  };

  const closePopup = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPopup(false);
  };

  return (
    <>
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-700 flex flex-col items-end gap-2 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Popup message positioned above the button with an arrow */}
        {showPopup && (
          <div 
            onClick={() => setShowDialog(true)}
            className="bg-white mb-1 p-3 rounded-lg shadow-lg animate-fade-in cursor-pointer relative"
          >
            <button 
              onClick={closePopup}
              className="absolute -top-2 -right-2 bg-gray-200 rounded-full p-1"
            >
              <X size={14} />
            </button>
            <p className="text-sm font-medium text-gray-800">Need assistance? Chat with us now!</p>
            
            {/* Arrow pointing to the button */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-white">
              <ArrowDown size={20} className="text-white drop-shadow-md" />
            </div>
          </div>
        )}

        {/* WhatsApp button with gentle animation */}
        <button
          onClick={handleWhatsAppClick}
          className="bg-[#3fcd4e] hover:bg-[#0fc244] text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-500 hover:scale-105 relative overflow-hidden"
          aria-label="Chat with us on WhatsApp"
        >
          <span className="absolute inset-0 bg-shine bg-[length:400%_100%] animate-background-shine opacity-30"></span>
          <img src="/statics-uploads/w1.png" alt="WhatsApp Logo" className="w-16 h-16" />
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
