
import React from 'react';
import { Button } from '@/components/ui/button';
import { FormField } from './FormField';
import { Mail, Phone, Building, User, Send } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface ContactFormFieldsProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
  };
  errors: Record<string, string>;
  isSubmitting: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export function ContactFormFields({
  formData,
  errors,
  isSubmitting,
  handleChange,
  handleSubmit
}: ContactFormFieldsProps) {
  return (
      <div className="p-8 md:p-12">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <FormField
              id="name"
              name="name"
              label="Full Name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              error={errors.name}
              Icon={User}
            />
            <FormField
              id="email"
              name="email"
              label="Email Address"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              type="email"
              error={errors.email}
              Icon={Mail}
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <FormField
              id="phone"
              name="phone"
              label="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+31 622944402"
              Icon={Phone}
            />
            <FormField
              id="company"
              name="company"
              label="Company Name"
              value={formData.company}
              onChange={handleChange}
              placeholder="Acme Inc."
              Icon={Building}
            />
          </div>
          
          <div className="mb-6">
            <FormField
              id="message"
              name="message"
              label="Message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              required
              error={errors.message}
              Icon={User}
              as="textarea"
            />
          </div>
          
          <Button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-biteon-blue hover:bg-biteon-dark-blue text-white font-medium py-3 rounded-md transition-all ${isSubmitting ? 'opacity-80' : ''}`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <Send className="mr-2 h-5 w-5" /> Send Message
              </span>
            )}
          </Button>
        </form>
      </div>
  );
}
