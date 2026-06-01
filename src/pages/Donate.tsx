import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Gift, BookOpen, GraduationCap } from 'lucide-react';
export function Donate() {
  const [amount, setAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const handleAmountClick = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount(null);
  };
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
            className="w-16 h-16 bg-gold/20 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
            
            <Heart className="h-8 w-8" />
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
            className="text-4xl text-[#FE6700] md:text-5xl font-serif font-bold mb-6">
            
            Invest in the Future
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
            
            Your donation helps us provide scholarships, educational resources,
            and mentorship programs to underserved youth.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Impact Info */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-3xl font-serif font-bold text-navy">
              How Your Gift Helps
            </h2>
            <p className="text-text-muted leading-relaxed">
              Every contribution, no matter the size, makes a direct impact on a
              student's life. Here is what your donation can achieve:
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-coral/10 text-coral p-3 rounded-lg mr-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">
                    Educational Materials
                  </h4>
                  <p className="text-sm text-text-muted">
                    Provides textbooks, stationery, and learning resources for
                    students in public secondary schools.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-50 text-blue-500 p-3 rounded-lg mr-4">
                  <Gift className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">
                    Mentorship Programs
                  </h4>
                  <p className="text-sm text-text-muted">
                    Funds the logistics for our school outreach programs and the
                    EMF Changemaker Hub.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gold/10 text-gold p-3 rounded-lg mr-4">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Scholarships</h4>
                  <p className="text-sm text-text-muted">
                    Supports high-performing students facing financial barriers
                    to continue their education.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Donation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-serif font-bold text-navy mb-6">
                Make a Donation
              </h3>

              <div className="space-y-8">
                {/* Amount Selection */}
                <div>
                  <label className="block text-sm font-medium text-navy mb-4">
                    Select Amount (USD)
                  </label>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {[25, 50, 100, 250, 500].map((val) =>
                    <button
                      key={val}
                      onClick={() => handleAmountClick(val)}
                      className={`py-3 rounded-md font-semibold transition-all ${amount === val ? 'bg-navy text-white shadow-md' : 'bg-cream text-navy border border-gray-200 hover:border-navy'}`}>
                      
                        ${val}
                      </button>
                    )}
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                        $
                      </span>
                      <input
                        type="number"
                        placeholder="Custom"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        className={`w-full py-3 pl-8 pr-4 rounded-md font-semibold outline-none transition-all ${customAmount ? 'bg-navy text-white shadow-md placeholder-white/50' : 'bg-cream text-navy border border-gray-200 focus:border-navy'}`} />
                      
                    </div>
                  </div>
                </div>

                {/* Donor Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-md bg-cream border border-gray-200 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all" />
                    
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-md bg-cream border border-gray-200 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all" />
                    
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-navy mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-md bg-cream border border-gray-200 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-all" />
                    
                  </div>
                </div>

                <button className="w-full bg-gold hover:bg-gold/90 text-navy font-bold text-lg py-4 rounded-md shadow-lg transition-all flex items-center justify-center">
                  <Heart className="mr-2 h-5 w-5" />
                  Donate{' '}
                  {amount ?
                  `$${amount}` :
                  customAmount ?
                  `$${customAmount}` :
                  ''}
                </button>

                <p className="text-xs text-center text-gray-400 mt-4">
                  Secure payment processing. Elite Mentoring Foundation is a
                  registered non-profit organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

}