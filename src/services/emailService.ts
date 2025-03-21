
import emailjs from 'emailjs-com';

// EmailJS configuration
// You need to replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "service_biteonemail"; // Your EmailJS service ID
const EMAILJS_TEMPLATE_ID = "template_contact_form"; // Your EmailJS template ID
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Replace with your public key from EmailJS

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
