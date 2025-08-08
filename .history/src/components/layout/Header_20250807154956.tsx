import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBagIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon, UserIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { cn } from '@/lib/utils';
const navigation = [{
  name: 'Home',
  href: '/'
}, {
  name: 'Products',
  href: '/products'
}, {
  name: 'About',
  href: '/about'
}, {
  name: 'Blog',
  href: '/blog'
}, {
  name: 'Team',
  href: '/team'
}, {
  name: 'Contact',
  href: '/contact'
}];
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    itemCount
  } = useCart();
  const navigate = useNavigate();
  return <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/public/kamble-collection-250x65.svg"  // <-- Update with your logo path
            alt="Kamble Collection Logo"
            className="h-8 w-25 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map(item => <Link key={item.name} to={item.href} className="text-foreground/80 hover:text-brand-primary transition-colors duration-200 font-medium">
            {item.name}
          </Link>)}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => navigate('/profile')}>
            <UserIcon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative" onClick={() => navigate('/cart')}>
            <ShoppingBagIcon className="h-5 w-5" />
            {itemCount > 0 && <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {itemCount}
            </span>}
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="relative" onClick={() => navigate('/cart')}>
            <ShoppingBagIcon className="h-5 w-5" />
            {itemCount > 0 && <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {itemCount}
            </span>}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </Button>
        </div>
      </div>
    </div>

    {/* Mobile Navigation */}
    <AnimatePresence>
      {isMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-background border-t border-border">
        <div className="px-4 py-6 space-y-4">
          {navigation.map(item => <Link key={item.name} to={item.href} className="block text-foreground/80 hover:text-brand-primary transition-colors duration-200 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
            {item.name}
          </Link>)}
          <div className="flex items-center space-x-4 pt-4 border-t border-border">
            <Button variant="ghost" size="icon">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <UserIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </motion.div>}
    </AnimatePresence>
  </header>;
}