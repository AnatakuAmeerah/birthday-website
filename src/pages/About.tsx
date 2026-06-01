import { motion } from 'framer-motion';
const teamMembers = [
{
  name: 'Racheal Asaolu',
  role: 'Founder & President',
  bio: 'PhD candidate in Biology and Biotechnology at WPI. Visiola Foundation Scholar, Global Youth Ambassador at Theirworld, and recipient of the 2025 & 2026 Genetics Society of America Presidential Award.',
  image:
  './rach.jpg'
},
{
  name: 'Olanrewaju Ogundipe',
  role: 'Vice President / CEO',
  bio: 'HR consultant specializing in data-driven people solutions. Recognized with the Leadership and Legacy Man 2018 award by UNILAG Engineering Society.',
  image:
  './IMG_6299 1.svg'
},
{
  name: 'Esther Neyin',
  role: 'Program Director',
  bio: 'Graduate of Human Nutrition and Dietetics. Currently serves as a Project Manager at EMF, where her journey began as a mentee.',
  image:
  './IMG_6300cropped.JPG'
},
{
  name: 'Deborah Oyelaran',
  role: 'Communications Associate',
  bio: 'First-Class graduate passionate about SDG 4 (Quality Education). Skilled in communication, public speaking and leadership.',
  image:
  'IMG_6301 1.svg'
},
{
  name: 'Felix Adeniran',
  role: 'Media Manager',
  bio: 'Specializes in social media management and audience engagement, helping organizations strengthen their digital presence.',
  image:
  'felix 1.svg'
},
{
  name: 'Aishat Oyinkansola Uthman',
  role: 'Graphic Designer',
  bio: 'Creative graphic designer with experience developing impactful visual communications for brands across various industries.',
  image:
  'IMG-20260531-WA0003 1.svg'
},
{
  name: 'Taiwo Atinuke',
  role: 'Admin and Membership Officer',
  bio: 'Holds a B.Sc. Ed. in Political Science Education with a strong interest in youth development, mentorship, and leadership formation.',
  image:
  'admin cropped.jpg'
},
{
  name: 'Mentor',
  image:
  'IMG_6314 1.svg'
},
{
  name: 'Mentor',
  image:
  'IMG_6306 1.svg'
},
{
  name: 'Mentor',
  image:
  'IMG_6302 1.svg'
},
{
  name: 'Mentor',
  image:
  'IMG_6304 1.svg'
},
{
  name: 'Mentor',
  image:
  'B949F1A2-CBD1-4821-AE4F-86AF02D1BC99 1.svg'
},
{
  name: 'Mentor',
  image:
  'IMG_6303cropped.JPG'
},

];

const coreValues = [
{
  title: 'Access to Opportunity',
  desc: 'Every young person deserves access to quality education, mentorship, and opportunities regardless of background.'
},
{
  title: 'Mentorship and Guidance',
  desc: 'Providing accurate guidance and meaningful mentorship that helps students make informed decisions.'
},
{
  title: 'Leadership Development',
  desc: 'Cultivating leadership skills that empower young people to think critically and take initiative.'
},
{
  title: 'Excellence',
  desc: 'Promoting a culture of academic excellence, curiosity, and continuous learning.'
},
{
  title: 'Community Impact',
  desc: 'Creating lasting impact by empowering individuals who will contribute to the growth of their communities.'
}];

export function About() {
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
            
            About Us
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
            
            Discover our history, our mission, and the dedicated team working to
            transform the lives of young people.
          </motion.p>
        </div>
      </div>

      {/* History Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-6 text-text-muted leading-relaxed">
            <h2 className="text-3xl font-serif font-bold text-navy mb-6">
              Our History & Background
            </h2>
            <p>
              Elite Mentoring Foundation (EMF) was founded by Racheal Asaolu, a
              Nigerian scientist, mentor, and education advocate who believes
              that access to mentorship and quality education can transform the
              trajectory of a young person's life.
            </p>
            <p>
              Racheal grew up in a community where many young people had limited
              access to mentors, role models, and educational resources. As a
              first-generation student from a background where girls' education
              was not widely encouraged, she faced significant cultural and
              societal barriers. Despite these challenges, her dedication earned
              her a merit-based scholarship from the Visiola Foundation to study
              Biochemistry at Lead City University, where she graduated as the
              best student in her department.
            </p>
            <p>
              During her undergraduate years, Racheal co-founded a community
              initiative called the Students' Ambassador Network (SAN) to mentor
              students in public secondary schools. This initiative provided
              career guidance, STEM exposure, and academic support to
              underserved communities.
            </p>
            <p>
              While pursuing her PhD at Worcester Polytechnic Institute (WPI) in
              the US, Racheal reflected on the transformative role mentorship
              played in her life. This realization led to the formal
              establishment of the Elite Mentoring Foundation (EMF) in 2024.
              Building on the early work of SAN, EMF was created to expand
              mentorship and educational opportunities for secondary school and
              university students, addressing both academic needs and the soft
              skills required in today's workforce.
            </p>
          </div>
          <div className="lg:col-span-4">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 sticky top-28">
              <h3 className="text-xl font-serif font-bold text-navy mb-4">
                Mission & Vision
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-coral mb-2">Mission</h4>
                  <p className="text-sm text-text-muted">
                    To increase equitable access to mentorship, education, and
                    leadership development opportunities for young people from
                    underserved communities.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gold mb-2">Vision</h4>
                  <p className="text-sm text-text-muted">
                    Thriving communities where young people have equitable
                    access to quality education, mentorship, and career
                    opportunities, and grow into confident leaders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-navy mb-4">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, idx) =>
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
              className="bg-cream p-6 rounded-xl border border-gray-100">
              
                <h3 className="text-lg font-bold text-navy mb-3 flex items-center">
                  <span className="text-coral mr-2">{idx + 1}.</span>{' '}
                  {value.title}
                </h3>
                <p className="text-sm text-text-muted">{value.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-navy mb-4">
            Meet Our Team
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Dedicated professionals committed to empowering the next generation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, idx) =>
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: idx * 0.1
            }}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
            
              <div className="aspect-square overflow-hidden bg-gray-300">
                <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-center  hover:scale-105 transition-transform duration-500 " />
              
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-serif font-bold text-navy mb-1">
                  {member.name}
                </h3>
                <p className="text-coral font-medium text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-sm text-text-muted flex-grow">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>);

}