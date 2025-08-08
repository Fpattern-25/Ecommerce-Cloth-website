import { Link } from 'react-router-dom';
import { Newsletter } from '@/components/Newsletter';

const footerSections = [
  {
    title: 'Information',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Delivery Information', href: '/shipping' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Customer Service', href: '/contact' },
      { name: 'Return Policy', href: '/returns' }
    ]
  },
  {
    title: 'My Account',
    links: [
      { name: 'My Account', href: '/profile' },
      { name: 'Wishlist', href: '/profile' },
      { name: 'Newsletter', href: '/profile' },
      { name: 'Help Center', href: '/faq' },
      { name: 'Condition', href: '/terms' },
      { name: 'Term Of Use', href: '/terms' }
    ]
  }
];

export function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[300px]">
          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Contact Us</h3>
            <div className="space-y-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                Welcome to the 
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-medium">Address:</span> Koshti Galli Rd, Sangola, Maharashtra 413307
                </p>
                <p className="text-sm">
                  <span className="font-medium">Call to:</span> (+91) 90491 50505

                </p>
                <p className="text-sm">
                  <span className="font-medium">Mail to:</span> hr.fpattern@gmail.com
                </p>
              </div>
              <div className="flex space-x-4 pt-4">
                <a 
                  href="https://instagram.com/fpattern" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.321-1.297C4.198 14.553 3.708 13.402 3.708 12.105s.49-2.448 1.42-3.321C6.001 7.912 7.152 7.422 8.449 7.422s2.448.49 3.321 1.362c.872.872 1.362 2.023 1.362 3.321s-.49 2.448-1.362 3.321c-.873.807-2.024 1.297-3.321 1.297zm7.138 0c-1.297 0-2.448-.49-3.321-1.297-.872-.873-1.362-2.024-1.362-3.321s.49-2.448 1.362-3.321c.873-.872 2.024-1.362 3.321-1.362s2.448.49 3.321 1.362c.872.873 1.362 2.024 1.362 3.321s-.49 2.448-1.362 3.321c-.873.807-2.024 1.297-3.321 1.297z"/>
                  </svg>
                </a>
                <a 
                  href="https://facebook.com/fpattern" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com/fpattern" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="https://pinterest.com/fpattern" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  aria-label="Pinterest"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.098.119.112.224.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017.001z"/>
                  </svg>
                </a>
                <a 
                  href="https://youtube.com/fpattern" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Information</h3>
            <ul className="space-y-3">
              {footerSections[0].links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* My Account Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">My Account</h3>
            <ul className="space-y-3">
              {footerSections[1].links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="h-full flex flex-col">
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Newsletter</h3>
            <div className="space-y-4 flex-1 flex flex-col justify-between">
              <p className="text-sm text-gray-600 leading-relaxed">
                Get E-mail updates about our latest shop and special offers.
              </p>
              <div className="mt-auto">
                <Newsletter />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8 bg-gray-100">
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              © 2023 <span className="font-semibold">Destry</span> Made with ♥ by{" "}
              <a 
                href="https://hasthemes.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-700 transition-colors duration-200"
              >
                HasThemes
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}