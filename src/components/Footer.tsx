
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone } from
'lucide-react';
export function Footer() {
  return (
    <footer className="bg-white text-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <img
              src="/emf-logo-2.svg"
              alt="Elite Mentoring Foundation Logo"
              className="h-12 w-auto" />
            
            <p className="text-sm text-black leading-relaxed">
              Equipping students with knowledge, guidance, scholarships, and
              practical experiences to raise a generation of confident, skilled,
              and socially responsible leaders.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/emf.africa_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-coral transition-colors">
                
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1C8s5EdKL7/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-coral transition-colors">
                
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/elite-mentoring-foundation/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-coral transition-colors">
                
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-navy mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-black hover:text-gray-300 transition-colors">
                  
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-sm text-black hover:text-gray-300 transition-colors">
                  
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-sm text-black hover:text-gray-300 transition-colors">
                  
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/volunteer"
                  className="text-sm text-black hover:text-gray-300   transition-colors">
                  
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="text-sm text-black hover:text-gray-300 transition-colors">
                  
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-navy mb-6">
              Our Programs
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-black">EMF Changemaker Hub</li>
              <li className="text-sm text-black">EMF Compass Program</li>
              <li className="text-sm text-black">
                Student Leadership Conference
              </li>
              <li className="text-sm text-black">Science Fair & Pitch</li>
              <li className="text-sm text-black">Scholarship Program</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-navy mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                <span className="text-sm text-black">Ibadan, Nigeria</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:elitementoringfoundation@gmail.com"
                  className="text-sm text-black hover:text-gray-300 transition-colors">
                  
                  elitementoringfoundation@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <a
                    href="tel:+2348163180364"
                    className="text-sm text-black hover:text-gray-300  transition-colors">
                    
                    +234 816 318 0364
                  </a>
                  <a
                    href="tel:+15086158912"
                    className="text-sm text-black hover:text-gray-300 transition-colors">
                    
                    +1 508 615 8912
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Elite Mentoring Foundation. All
            rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2 md:mt-0">
            Empowering the next generation of leaders.
          </p>
        </div>
      </div>
    </footer>);

}