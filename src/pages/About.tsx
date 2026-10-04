
import { useState } from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Racheal Asaolu',
    role: 'Founder & President',
    bio: 'PhD candidate in Biology and Biotechnology at WPI. Visiola Foundation Scholar, Global Youth Ambassador at Theirworld, and recipient of the 2025 & 2026 Genetics Society of America Presidential Award.',
    image: './rach.jpeg'
  },
  {
    name: 'Olanrewaju Ogundipe',
    role: 'Vice President / CEO',
    bio: 'HR consultant specializing in data-driven people solutions. Recognized with the Leadership and Legacy Man 2018 award by UNILAG Engineering Society.',
    image: './olarenwaju.jpg'
  },
  {
    name: 'Esther Neyin',
    role: 'Program Director',
    bio: 'Graduate of Human Nutrition and Dietetics. Currently serves as a Project Manager at EMF, where her journey began as a mentee.',
    image: './esther (2).jpg'
  },
  {
    name: 'Deborah Oyelaran',
    role: 'Communications Associate',
    bio: 'First-Class graduate passionate about SDG 4 (Quality Education). Skilled in communication, public speaking and leadership.',
    image: './deborah1.jpg'
  },
  {
    name: 'Felix Adeniran',
    role: 'Media Manager',
    bio: 'Specializes in social media management and audience engagement, helping organizations strengthen their digital presence.',
    image: './felix(1).jpg'
  },
  {
    name: 'Aishat Oyinkansola Uthman',
    role: 'Graphic Designer',
    bio: 'Creative graphic designer with experience developing impactful visual communications for brands across various industries.',
    image: './UTHMAN AISHAT.jpg'
  },
  {
    name: 'Taiwo Atinuke',
    role: 'Admin and Membership Officer',
    bio: 'Holds a B.Sc. Ed. in Political Science Education with a strong interest in youth development, mentorship, and leadership formation.',
    image: 'admin cropped.jpg'
  },
  {
    name: 'Habeeb Shittu',
    role: 'Program Mentor',
    image: 'habeeb.jpg'
  },
  {
    name: 'Oluwatimileyin Akinbola',
    role: 'Program Mentor',
    image: 'akinbola.jpg'
  },
];

const mentorMembers = [
  {
    name: 'Shruti Shastry',
    role: 'Mentor',
    bio: 'Shruti is a PhD candidate at Worcester Polytechnic Institute. She is from India and received her Bachelor’s and master’s in biotechnology. She works with a small worm called C. elegans, and she studies their social communication.',
    image: 'shurti.jpg',
  },
  {
    name: 'Remi Durodola',
    role: 'Mentor',
    bio: 'Remilekun is a Marketing Analyst with over four years of experience helping start-ups and SMEs grow through strategic marketing. She’s worked across Higher Education, Fintech, and Healthcare Tech, developing go-to-market campaigns and messaging that convert audiences into loyal customers. Her approach blends digital marketing, analytics, and Al to ensure products reach the right people and business goals are met. Outside of her professional work, Remilekun is passionate about women’s health research, especially in gynecology and menstruation, using insights to advocate for better healthcare education and policy. Her experiences have also made her a confident presenter, skilled at communicating results to stakeholders and driving action.',
    image: 'remi(1).png',
  },
  {
    name: 'Mary Olukorede',
    role: 'Mentor',
    bio: 'Ayomide Olukorede is a PhD candidate at the John Innes Centre, UK, where she is enrolled in the prestigious rotation program in Plant and Microbial Science, fully funded by the John Innes Foundation. She holds a Master’s degree in Plant Science and Biotechnology from the University of Leeds, UK, which was fully funded by a Commonwealth Scholarship, and she previously served as a research assistant in the Benitez-Alfonso Laboratory.With a strong track record in scholarship acquisition, Ayomide is a two-time Commonwealth Scholarship awardee (PhD and Master’s) and was also offered a fully funded PhD position at the University of Miami, USA. She has successfully navigated several competitive international scholarship programs, including Chevening and other UK-and US-based opportunities. Ayomide leverages her expertise in academic writing, article analysis, and research literacy to mentor students and early-career researchers in crafting strong applications and securing opportunities. She is passionate about empowering others through clear and strategic communication.',
    image: 'mary.jpeg'
  },
  {
    name: 'Wale Akinmoladun',
    role: 'Mentor',
    bio: 'Wale Akinmoladun is a leading voice in brand strategy and visual storytelling. As the Founder of Value Studios, he leads a team of bold thinkers and culture shapers redefining how brands connect, communicate, and influence.An alumnus of Adekunle Ajasin University, Akungba - Akoko, and the renown School of Media and Communications, Pan Atlantic University, Lagos. His career spans both local and multinational agencies and brands, Wale has built a reputation for turning ideas into magnetic narratives that command attention and inspire action. An iconoclast at heart, he challenges convention and pushes creative boundaries, delivering future-forward, relevant brand solutions that resonate deeply with today’s audiences. When he’s not shaping brands, Wale shares his insights on strategy, creativity, storytelling and SDGs at conferences, panels, and industry events. inspiring the next generation of thinkers to build with purpose and vision.',
    image: 'MAN_9416q(1).jpg'
  },
  {
    name: 'Success Areeveso',
    role: 'Mentor',
    bio: 'Success Areeveso is a project and data analytics professional and she has over three years of experience working on various projects ranging from education, technology, skill acquisition and social media advocacy campaigns. Success research and professional interests focus at the intersection of education, media, innovation, and data.She previously worked at YouthYouth as the project manager and communications lead where she led digital advertising efforts, and social media analytics, and designed fundraising and marketing strategies to enhance audience engagement and amplify the organization’s reach across digital platforms, empowering youth activists and adult allies to transform education in their communities.She has completed her masters degree in education and development with distinction where she was a recipient of the Allan and Nesta Ferguson Scholarship at the University of East Anglia.',
    image: 'success.jpg'
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
  }
];

export function About() {
  // Keeps track of which mentor bios are expanded
  const [expandedMentors, setExpandedMentors] = useState<number[]>([]);

  const toggleMentor = (index: number) => {
    setExpandedMentors((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

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
            className="text-4xl text-[#FE6700] md:text-5xl font-serif font-bold mb-6"
          >
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
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
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
                  <h4 className="font-bold text-coral mb-2">
                    Mission
                  </h4>

                  <p className="text-sm text-text-muted">
                    To increase equitable access to mentorship, education, and
                    leadership development opportunities for young people from
                    underserved communities.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gold mb-2">
                    Vision
                  </h4>

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

            {coreValues.map((value, idx) => (
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
                className="bg-cream p-6 rounded-xl border border-gray-100"
              >

                <h3 className="text-lg font-bold text-navy mb-3 flex items-center">
                  <span className="text-coral mr-2">
                    {idx + 1}.
                  </span>{' '}
                  {value.title}
                </h3>

                <p className="text-sm text-text-muted">
                  {value.desc}
                </p>

              </motion.div>
            ))}

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

          {teamMembers.map((member, idx) => (
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
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col"
            >

              <div className="aspect-square overflow-hidden bg-gray-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
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
          ))}

        </div>
      </div>

      {/* Mentors Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-navy mb-4">
            Our Mentors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {mentorMembers.map((mentor, idz) => {

            const isExpanded = expandedMentors.includes(idz);

            return (
              <motion.div
                key={idz}
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
                  delay: idz * 0.1
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col"
              >

                <div className="aspect-square overflow-hidden bg-gray-300">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex-grow flex flex-col">

                  <h3 className="text-xl font-serif font-bold text-navy mb-1">
                    {mentor.name}
                  </h3>

                  <p className="text-coral font-medium text-sm mb-4">
                    {mentor.role}
                  </p>

                  {/* Mentor Bio */}
                  <p
                    className={`text-sm text-text-muted leading-relaxed ${
                      !isExpanded ? 'line-clamp-4' : ''
                    }`}
                  >
                    {mentor.bio}
                  </p>

                  {/* See More / See Less */}
                  {mentor.bio && mentor.bio.length > 200 && (
                    <button
                      type="button"
                      onClick={() => toggleMentor(idz)}
                      className="mt-2 self-start text-sm text-coral hover:underline transition-all"
                    >
                      {isExpanded ? 'See less' : 'See more'}
                    </button>
                  )}

                </div>
              </motion.div>
            );
          })}

        </div>
      </div>

    </div>
  );
}