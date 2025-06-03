import { WhatsAppButton } from './WhatsAppButton';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/10 backdrop-blur-lg border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <WhatsAppButton />
          <div className="md:col-span-1 glass-card p-6 rounded-xl">
            <div>
              <img 
                src="/statics-uploads/e24061c2-10f7-4d4f-9dd0-af7da529de44.png" 
                alt="Biteon" 
                className="h-8 w-auto mb-4" 
              />
              <p className="text-gray-600 mb-6">
                Building robust, scalable, and innovative software solutions for enterprises and startups alike.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-biteon-blue transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-biteon-blue transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.028 10.028 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-biteon-blue transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.647c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1 glass-card p-6 rounded-xl">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-biteon-blue transition-colors hover-underline-animation">About Us</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-biteon-blue transition-colors hover-underline-animation">Contact</a>
                </li>
              </ul>
            </div>
          </div>
         
          <div className="md:col-span-1 glass-card p-6 rounded-xl">
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-biteon-blue transition-colors hover-underline-animation">Web Development</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-biteon-blue transition-colors hover-underline-animation">Mobile Apps</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-biteon-blue transition-colors hover-underline-animation">Software Engineering</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-biteon-blue transition-colors hover-underline-animation">DevOps Services</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-biteon-blue transition-colors hover-underline-animation">QA & Testing</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center glass-card p-6 rounded-xl">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Biteon. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-biteon-blue text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-biteon-blue text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-biteon-blue text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
