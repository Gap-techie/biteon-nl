
import emailjs from 'emailjs-com';

// EmailJS configuration
const EMAILJS_SERVICE_ID = "obaid@biteon.nl"; // Your EmailJS service ID
const EMAILJS_TEMPLATE_ID = "template_u7nxi4o"; // Your EmailJS template ID (fixed missing quote)
const EMAILJS_PUBLIC_KEY = "Y2WZGxGhLra9cZ-gC"; // Your public key from EmailJS

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

interface EmailParams {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export async function sendEmail({ name, email, phone, company, message }: EmailParams) {
  // Prepare email data for EmailJS
  const templateParams = {
    to_email: 'obaid@biteon.nl',
    from_name: name,
    from_email: email,
    from_phone: phone || 'Not provided',
    from_company: company || 'Not provided',
    message: message
  };

  // Send email using EmailJS
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    templateParams,
    EMAILJS_PUBLIC_KEY
  );
}
