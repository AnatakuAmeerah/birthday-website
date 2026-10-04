import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



interface VolunteerFormData {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  phone: string;
  experience: string;
  whyVolunteer: string;
  'Area of interest': string; 
}
export function Volunteer() {
  const [formData, setFormData] = useState<VolunteerFormData>({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    phone: '',
    experience: '',
    whyVolunteer: '',
    'Area of interest': '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  // General input change handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return; // prevent multiple submissions
    setLoading(true);


    // Check required fields (exclude optional ones)
    const requiredFields: (keyof VolunteerFormData)[] = [
      'firstName',
      'lastName',
      'email',
      'phone',
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        toast.error('Please fill in all required fields.');
        setLoading(false);
        return;
      }
    }

    const serviceId = 'service_0v6i5pc';
    const templateId = 'template_kr9yv2k';
    const publicKey = 'Gv5Hk4A2gLo3prMGr';

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      to_name: 'EMF',
      formData: JSON.stringify(formData, null, 2), // Send form data as a formatted string
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        toast.success('Application sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          gender: '',
          phone: '',
          experience: '',
          whyVolunteer: '',
          'Area of interest': '',
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
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            className="w-16 h-16 bg-coral/20 text-coral rounded-full flex items-center justify-center mx-auto mb-6">

            <Users className="h-8 w-8" />
          </motion.div>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="text-4xl md:text-5xl text-[#FE6700] font-serif font-bold mb-6">

            Become a Volunteer or Mentor
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

            Share your knowledge, skills, and time to help shape the next
            generation of leaders and innovators.
          </motion.p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-serif font-bold text-navy mb-2">
              Join Our Network
            </h2>
            <p className="text-text-muted">
              Fill out the form below to express your interest in volunteering,
              mentoring, or partnering with us.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-navy mb-2">
                  First Name *
                </label>
                <input
                  id="firstName" name="firstName" value={formData.firstName} onChange={handleChange}
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-md bg-cream border border-gray-200 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all" />

              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-navy mb-2">
                  Last Name *
                </label>
                <input
                  id="lastName" name="lastName" value={formData.lastName} onChange={handleChange}
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-md bg-cream border border-gray-200 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all" />

              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  id="email" name="email" value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-cream border border-gray-200 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all" />

              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone" name="phone" value={formData.phone} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-cream border border-gray-200 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all" />

              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Gender:
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-md bg-cream border border-gray-200 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all appearance-none">

                  <option value="">Select an option</option>
                  <option value="male">
                    Male
                  </option>
                  <option value="female">
                    Female
                  </option>
                  <option value="other">Prefer not to say</option>
                </select>
              </div>


              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  I am interested in: *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-md bg-cream border border-gray-200 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all appearance-none">

                  <option value="">Select an option</option>
                  <option value="mentor_school">
                    Mentoring High School Students (Compass Program)
                  </option>
                  <option value="mentor_uni">
                    Mentoring University Students (Compass Program)
                  </option>
                  <option value="event_volunteer">
                    Event Volunteering (Conferences, Fairs)
                  </option>
                  <option value="partnership">Organizational Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-navy mb-2">
                Professional Background / Area of Expertise
              </label>
              <input
                id="experience" name="experience" value={formData.experience} onChange={handleChange}
                type="text"
                placeholder="e.g., Software Engineering, Healthcare, Business"
                className="w-full px-4 py-3 rounded-md bg-cream border border-gray-200 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all" />

            </div>

            <div>
              <label htmlFor="whyVolunteer" className="block text-sm font-medium text-navy mb-2">
                Why do you want to join EMF?
              </label>
              <textarea
                id="whyVolunteer" name="whyVolunteer" value={formData.whyVolunteer} onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-md bg-cream border border-gray-200 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all resize-none">
              </textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              // className="w-full bg-navy hover:bg-navy/90 text-white font-bold text-lg py-4 rounded-md shadow-lg transition-all flex items-center justify-center"
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
                'Submit Application'
              )}
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>);

}