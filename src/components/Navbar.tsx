import  { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const navLinks = [
{
  name: 'Home',
  path: '/'
},
{
  name: 'About Us',
  path: '/about'
},
{
  name: 'Programs',
  path: '/programs'
},
{
  name: 'Gallery',
  path: '/gallery'
},
{
  name: 'Contact',
  path: '/contact'
}];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <nav className="bg-navy sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img
                src="/emf-logo-2.svg"
                alt="Elite Mentoring Foundation Logo"
                className="h-10 w-auto" />
              
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 ${location.pathname === link.path ? 'text-gold' : 'text-white hover:text-coral'}`}>
              
                {link.name}
              </Link>
            )}
            <div className="flex items-center space-x-4 ml-4">
              {/* <Link
                to="/volunteer"
                className="text-white border  border-white/40 hover:border-white px-5 py-2 rounded-md text-sm font-medium transition-all">
                
                Volunteer
              </Link> */}
              {/* <Link
                to="/donate"
                className="bg-gold hover:bg-gold/90 text-navy px-6 py-2 rounded-md text-sm font-semibold transition-all shadow-sm">
                
                Donate
              </Link> */}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white  hover:text-gold focus:outline-none">
              
              {isOpen ?
              <X className="h-6 w-6 text-[#FE6700]"  /> :

              <Menu className="h-6 w-6 text-[#FE6700]" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-navy border-t border-white/10">
          
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path ? 'text-gold bg-white/5' : 'text-white hover:text-coral hover:bg-white/5'}`}>
              
                  {link.name}
                </Link>
            )}
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col space-y-2 px-3">
                <Link
                to="/volunteer"
                onClick={() => setIsOpen(false)}
                className="text-center text-white border border-white/30 px-4 py-2 rounded-md text-base font-medium">
                
                  Volunteer
                </Link>
                {/* <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="text-center bg-gold text-navy px-4 py-2 rounded-md text-base font-bold">
                
                  Donate
                </Link> */}
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}