import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Target, Heart } from 'lucide-react';
export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="./IMG_6305.JPG"
            alt="Students collaborating"
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-40">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8
            }}
            className="max-w-3xl">
            
            {/* <span className="inline-block py-1 px-3 rounded-full bg-coral/20 text-coral font-medium text-sm mb-6 border border-coral/30">
              Empowering Underserved Youth
            </span> */}
            <h1 className="text-5xl md:text-6xl font-serif text-[#FE6700] font-bold leading-tight mb-6">
              Transforming Lives Through{' '}
              <span className="text-gold">Mentorship</span> & Education
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              We equip young people with knowledge, guidance, scholarships, and
              practical experiences to raise a generation of confident, skilled,
              and socially responsible leaders.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="bg-gold hover:bg-gold/90 text-navy px-8 py-4 rounded-md font-semibold text-lg transition-all text-center shadow-lg hover:shadow-gold/20">
                
                Support Our Mission
              </Link>
              <Link
                to="/about"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-md font-medium text-lg transition-all text-center flex items-center justify-center group">
                
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="bg-gold py-12 relative z-20 -mt-16 mx-4 sm:mx-6 lg:mx-auto max-w-6xl rounded-xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-navy/20">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            className="p-6">
            
            <h3 className="text-5xl font-serif font-bold text-navy mb-2">
              1,500+
            </h3>
            <p className="text-navy/80 font-medium uppercase tracking-wider text-sm">
              Students Mentored
            </p>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="p-6">
            
            <h3 className="text-5xl font-serif font-bold text-navy mb-2">7</h3>
            <p className="text-navy/80 font-medium uppercase tracking-wider text-sm">
              Partner Schools
            </p>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.2
            }}
            className="p-6">
            
            <h3 className="text-5xl font-serif font-bold text-navy mb-2">3+</h3>
            <p className="text-navy/80 font-medium uppercase tracking-wider text-sm">
              Years of Impact
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              className="space-y-8">
              
              <div>
                <h2 className="text-sm font-bold text-coral uppercase tracking-widest mb-2">
                  Who We Are
                </h2>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">
                  Bridging the Gap in Education and Leadership
                </h3>
                <p className="text-text-muted leading-relaxed mb-4">
                  Elite Mentoring Foundation (EMF) was founded to expand
                  mentorship and educational opportunities for secondary school
                  and university students. We believe that access to mentorship
                  and quality education can transform the trajectory of a young
                  person's life.
                </p>
                <p className="text-text-muted leading-relaxed">
                  What began as a small initiative mentoring students in a few
                  public secondary schools now aims to grow into a broader
                  movement that equips young people with the knowledge,
                  guidance, and opportunities they need to succeed.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                <div>
                  {/* <div className="bg-navy/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-navy">
                    <Target className="h-6 w-6" />
                  </div> */}
                  <h4 className="font-serif font-bold text-xl text-navy mb-2">
                    Our Mission
                  </h4>
                  <p className="text-sm text-text-muted">
                    To increase equitable access to mentorship, education, and
                    leadership development opportunities for young people from
                    underserved communities.
                  </p>
                </div>
                <div>
                  {/* <div className="bg-gold/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-gold">
                    <Heart className="h-6 w-6" />
                  </div> */}
                  <h4 className="font-serif font-bold text-xl text-navy mb-2">
                    Our Vision
                  </h4>
                  <p className="text-sm text-text-muted">
                    Thriving communities where young people have equitable
                    access to quality education, mentorship, and career
                    opportunities.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              className="relative">
              
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="./IMG_0915.JPG"
                  alt="Students learning"
                  className="w-full h-full object-cover" />
                
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="bg-coral/10 p-3 rounded-full text-coral">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h4 className="font-serif font-bold text-navy">STEM Focus</h4>
                </div>
                <p className="text-sm text-text-muted">
                  Empowering girls and youth in Science, Technology, Engineering
                  and Mathematics.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-coral uppercase tracking-widest mb-2">
              What We Do
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">
              Our Core Pillars of Impact
            </h3>
            <p className="text-text-muted">
              We deliver a range of programs designed to provide mentorship,
              leadership development, academic support, and innovation
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
              icon: <Users className="h-8 w-8" />,
              title: 'Mentorship & Guidance',
              desc: 'Providing accurate guidance and meaningful mentorship that helps students make informed academic and career decisions.',
              color: 'bg-sky-50 text-sky-600'
            },
            {
              icon: <Target className="h-8 w-8" />,
              title: 'Leadership Development',
              desc: 'Cultivating leadership skills that empower young people to think critically, take initiative, and become agents of positive change.',
              color: 'bg-blue-50 text-blue-600'
            },
            {
              icon: <BookOpen className="h-8 w-8" />,
              title: 'Access to Opportunity',
              desc: 'Ensuring every young person deserves access to quality education and opportunities that unlock their full potential.',
              color: 'bg-indigo-50 text-indigo-600'
            }].
            map((pillar, idx) =>
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: idx * 0.1
              }}
              className="bg-cream p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              
                <div
                className={`${pillar.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                
                  {pillar.icon}
                </div>
                <h4 className="text-xl font-serif font-bold text-navy mb-3">
                  {pillar.title}
                </h4>
                <p className="text-text-muted leading-relaxed">{pillar.desc}</p>
              </motion.div>
            )}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/programs"
              className="inline-flex items-center text-navy font-semibold hover:text-coral transition-colors">
              
              Explore All Programs <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-gold rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-coral rounded-full opacity-10 blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Join Us in Shaping the Future
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Whether you want to mentor a student, partner with us, or support
            our programs financially, your contribution makes a lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/volunteer"
              className="bg-white text-navy hover:bg-gray-100 px-8 py-4 rounded-md font-semibold text-lg transition-all shadow-lg">
              
              Become a Volunteer
            </Link>
            {/* <Link
              to="/donate"
              className="bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all shadow-lg">
              
              Make a Donation
            </Link> */}
          </div>
        </div>
      </section>
    </div>);

}