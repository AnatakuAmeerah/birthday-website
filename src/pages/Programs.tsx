import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Lightbulb,
  Compass,
  Users,
  Microscope,
  GraduationCap,
  ArrowRight } from
'lucide-react';
const programs = [
{
  id: 'changemaker',
  title: 'EMF Changemaker Hub',
  icon: <Lightbulb className="h-8 w-8" />,
  color: 'text-sky-500',
  bgColor: 'bg-sky-50',
  description:
  'A school-based mentorship program for secondary school students. Through this initiative, EMF establishes mentorship clubs within partner schools where students receive career guidance, leadership development training, and exposure to future opportunities. The program also provides scholarship support and academic encouragement for outstanding students from financially disadvantaged backgrounds.'
},
{
  id: 'compass',
  title: 'EMF Compass Program (ECP)',
  icon: <Compass className="h-8 w-8" />,
  color: 'text-blue-500',
  bgColor: 'bg-blue-50',
  description:
  'A virtual mentorship initiative designed for university students and early-career individuals. The program focuses on personal development, career readiness, and employability skills. Participants engage in structured learning sessions and are later matched with mentors in a six-month mentorship pairing that provides professional guidance and career support.'
},
{
  id: 'leadership',
  title: 'Annual Student Leadership Conference',
  icon: <Users className="h-8 w-8" />,
  color: 'text-coral',
  bgColor: 'bg-coral/10',
  description:
  'Brings together students, educators, and professionals for a day of learning, inspiration, and networking. Through keynote sessions, panel discussions, and interactive activities, the conference encourages academic excellence, discipline, leadership development, and personal growth.'
},
{
  id: 'science',
  title: 'Science Fair & Innovation Pitch',
  icon: <Microscope className="h-8 w-8" />,
  color: 'text-cyan-600',
  bgColor: 'bg-cyan-50',
  description:
  'Encourages secondary school students to explore STEM through hands-on innovation. Students develop practical solutions to real-world challenges and present their ideas through structured pitch competitions. The initiative strengthens creativity, critical thinking, communication skills, and the ability to translate ideas into impactful solutions.'
},
{
  id: 'scholarship',
  title: 'EMF Scholarship Program',
  icon: <GraduationCap className="h-8 w-8" />,
  color: 'text-indigo-500',
  bgColor: 'bg-indigo-50',
  description:
  'Supports talented students who face financial barriers to continuing their education. In partnership with schools and supporters, EMF provides scholarships and academic support to high-performing students at both secondary school and university levels, helping them stay in school and pursue their long-term academic and career goals.'
}];

export function Programs() {
  return (
    <div className="bg-cream min-h-screen pb-20">
      {/* Header */}
      <div className="bg-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-10 w-64 h-64 bg-gold rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-10 w-64 h-64 bg-coral rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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
            
            Programs & Initiatives
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
            
            Delivering mentorship, leadership development, academic support, and
            innovation opportunities for students at every stage of their
            educational journey.
          </motion.p>
        </div>
      </div>

      {/* Programs List */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          {programs.map((program) =>
          <motion.div
            key={program.id}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            
              <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
                <div
                className={`${program.bgColor} ${program.color} p-4 rounded-2xl flex-shrink-0`}>
                
                  {program.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-navy mb-4">
                    {program.title}
                  </h2>
                  <p className="text-text-muted leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <Link
                  to="/contact"
                  className="inline-flex items-center text-sm font-semibold text-navy hover:text-coral transition-colors">
                  
                    Inquire about this program{' '}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-gold rounded-3xl p-10 text-center shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold text-navy mb-4">
              Want to Support Our Programs?
            </h2>
            <p className="text-navy/80 mb-8 max-w-xl mx-auto">
              Your contribution helps us expand our reach and provide more
              scholarships, resources, and mentorship opportunities to deserving
              students.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/contact"
                className="bg-navy text-white px-8 py-3 rounded-md font-semibold hover:bg-navy/90 transition-colors">
                
                Partner with Us
              </Link>
              <Link
                to="/volunteer"
                className="bg-white text-navy px-8 py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors">
                
                Become a Mentor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>);

}