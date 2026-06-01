import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
const galleryImages = [
{
  id: 1,
  url: './IMG_0831.JPG',
  title: 'Student Mentorship Session',
  category: 'Mentorship'
},
{
  id: 2,
  url: ' ./IMG_6305.JPG',
  title: 'STEM Workshop for Girls',
  category: 'STEM'
},
{
  id: 3,
  url: './IMG_0845.JPG',
  title: 'School Outreach Program',
  category: 'Events'
},
{
  id: 4,
  url: './IMG_0846.JPG',
  title: 'School Outreach Program',
  category: 'Outreach'
},
{
  id: 5,
  url: './IMG_0849.JPG',
  title: 'School Outreach Program',
  category: 'STEM'
},
{
  id: 6,
  url: './IMG_0851.JPG',
  title: 'Career Guidance Session',
  category: 'Mentorship'
},
{
  id: 7,
  url: './IMG_0854.JPG',
  title: 'School Outreach Program',
  category: 'Outreach'
},
{
  id: 8,
  url: './IMG_0856.JPG',
  title: 'School Outreach Program',
  category: 'Events'
},
{
  id: 9,
  url: './IMG_0857.JPG',
  title: 'School Outreach Program',
  category: 'Mentorship'
},
{
  id: 10,
  url: './IMG_0904.JPG',
  title: 'School Outreach Program',
  category: 'Outreach'
},
{
  id: 11,
  url: './IMG_0909.JPG',
  title: 'School Outreach Program',
  category: 'STEM'
},
{
  id: 12,
  url: './IMG_0911.JPG',
  title: 'School Outreach Program',
  category: 'Mentorship'
},
{
  id: 13,
  url: './IMG_0915.JPG',
  title: 'School Outreach Program',
  category: 'Outreach'
},
{
  id: 14,
  url: './IMG_0866.JPG',
  title: 'School Outreach Program',
  category: 'Outreach'
},
{
  id: 15,
  url: './IMG_0881.JPG',
  title: 'School Outreach Program',
  category: 'STEM'
},
{
  id: 16,
  url: './IMG_0844.JPG',
  title: 'School Outreach Program',
  category: 'Mentorship'
},
{
  id: 17,
  url: './IMG_0927.JPG',
  title: 'School Outreach Program',
  category: 'Outreach'
},];

const categories = ['All', 'Mentorship', 'STEM', 'Events', 'Outreach'];
export function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const filteredImages =
  filter === 'All' ?
  galleryImages :
  galleryImages.filter((img) => img.category === filter);
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
            
            Our Impact in Pictures
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
            
            A visual journey of our outreaches, mentorship sessions, and the
            incredible students we work with.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) =>
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === category ? 'bg-navy text-white shadow-md' : 'bg-white text-text-muted hover:bg-gray-50 border border-gray-200'}`}>
            
              {category}
            </button>
          )}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <AnimatePresence>
            {filteredImages.map((image) =>
            <motion.div
              layout
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.9
              }}
              transition={{
                duration: 0.3
              }}
              key={image.id}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-gray-200 shadow-sm hover:shadow-xl"
              onClick={() => setSelectedImage(image.url)}>
              
                <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-gold text-xs font-bold uppercase tracking-wider mb-1">
                    {image.category}
                  </span>
                  <h3 className="text-white font-serif text-lg font-bold">
                    {image.title}
                  </h3>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          className="fixed inset-0 z-[100] bg-navy/95 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}>
          
            <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}>
            
              <X className="h-8 w-8" />
            </button>
            <motion.img
            initial={{
              scale: 0.9
            }}
            animate={{
              scale: 1
            }}
            exit={{
              scale: 0.9
            }}
            src={selectedImage}
            alt="Enlarged gallery view"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} />
          
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}