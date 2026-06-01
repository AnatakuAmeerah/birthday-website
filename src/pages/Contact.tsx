
import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Mail,
  MapPin,
  Phone,
  Send,
  Facebook,
  Instagram,
  Linkedin } from
'lucide-react';


 interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}
export function Contact() {

const [contactData, setContactData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState<boolean>(false);

  // General input change handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setContactData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return; // prevent multiple submissions
    setLoading(true);

     const requiredFields: (keyof ContactFormData)[] = [
      'firstName',
      'lastName',
      'email',
    ];

    for (const field of requiredFields) {
      if (!contactData[field]) {
        toast.error('Please fill in all required fields.');
        setLoading(false);
        return;
      }
    }

    const serviceId = 'service_0v6i5pc';
    const templateId = 'template_nitokz3';
    const publicKey = 'Gv5Hk4A2gLo3prMGr';

    const templateParams = {
      from_name: `${contactData.firstName} ${contactData.lastName}`,
      from_email: contactData.email,
      to_name: 'EMF',
      contactData: JSON.stringify(contactData, null, 2), // Send form data as a formatted string
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        toast.success('Message sent successfully!');
        setContactData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
      })
      .catch(error => {
        toast.error('Error sending message.');
        console.error('Error sending mail', error);
      })
      .finally(() => {
        setLoading(false); // reset loading after API finishes
      });
    }


  return (
    <div className="bg-cream min-h-screen pb-20">
      {/* Header */}
      <div className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="text-4xl text-[#FE6700] md:text-5xl font-serif font-bold mb-6">
            
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.1
            }}
            className="text-lg text-gray-300 max-w-2xl mx-auto">
            
            Have questions about our programs, want to partner with us, or need
            more information? We'd love to hear from you.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-navy mb-8">
              Contact Information
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="bg-white p-4 rounded-full shadow-sm text-coral mr-6">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-lg mb-1">
                    Our Location
                  </h4>
                  <p className="text-text-muted">Ibadan, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-4 rounded-full shadow-sm text-coral mr-6">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-lg mb-1">Email Us</h4>
                  <a
                    href="mailto:elitementoringfoundation@gmail.com"
                    className="text-text-muted hover:text-coral transition-colors">
                    
                    elitementoringfoundation@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-4 rounded-full shadow-sm text-coral mr-6">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-lg mb-1">Call Us</h4>
                  <div className="flex flex-col space-y-1">
                    <a
                      href="tel:+2348163180364"
                      className="text-text-muted hover:text-coral transition-colors">
                      
                      +234 816 318 0364
                    </a>
                    <a
                      href="tel:+15086158912"
                      className="text-text-muted hover:text-coral transition-colors">
                      
                      +1 508 615 8912
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-navy mb-4">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/emf.africa_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full shadow-sm text-navy hover:text-coral hover:-translate-y-1 transition-all">
                  
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/1C8s5EdKL7/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full shadow-sm text-navy hover:text-coral hover:-translate-y-1 transition-all">
                  
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/elite-mentoring-foundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full shadow-sm text-navy hover:text-coral hover:-translate-y-1 transition-all">
                  
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-navy mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor='firstName' className="block text-sm font-medium text-navy mb-2">
                    First Name
                  </label>
                  <input
                    id="firstName" name="firstName" value={contactData.firstName} onChange={handleChange} 
                    type="text"
                    className="w-full px-4 py-3 rounded-md bg-cream border border-gray-200 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all" />
                  
                </div>
                <div>
                  <label htmlFor='lastName' className="block text-sm font-medium text-navy mb-2">
                    Last Name
                  </label>
                  <input
                   id="lastName" name="lastName" value={contactData.lastName} onChange={handleChange} 
                    type="text"
                    className="w-full px-4 py-3 rounded-md bg-cream border border-gray-200 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all" />
                  
                </div>
              </div>
              <div>
                <label htmlFor='email' className="block text-sm font-medium text-navy mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email" name="email" value={contactData.email} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-cream border border-gray-200 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all" />
                
              </div>
              <div>
                <label htmlFor='message' className="block text-sm font-medium text-navy mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  id="message" name="message" value={contactData.message} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-cream border border-gray-200 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all resize-none">
                </textarea>
              </div>
              <button
                type="submit"
        disabled={loading}
                // className="w-full bg-navy hover:bg-navy/90 text-white font-bold text-lg py-4 rounded-md shadow-lg transition-all flex items-center justify-center">
                 className={`w-full flex justify-center items-center hover:bg-navy/90 bg-navy text-white text-lg font-bold py-4  rounded-md transition 
          ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90'}`}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                 r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
          </>
        ) : (
          'Send Message'
        )}
              </button>
               <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>);

}