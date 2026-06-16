import { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation, Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Expertise', to: 'skills' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Certification', to: 'certification' },
        { name: 'Contact', to: 'contact' },
    ];

    const NavItem = ({ link, mobile = false }: { link: { name: string, to: string }, mobile?: boolean }) => {
        const baseClasses = mobile
            ? "text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium cursor-pointer dark:text-gray-200"
            : "text-gray-700 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium cursor-pointer dark:text-gray-200";

        if (isHome) {
            return (
                <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    onClick={() => mobile && setIsOpen(false)}
                    className={baseClasses}
                >
                    {link.name}
                </ScrollLink>
            );
        }

        return (
            <RouterLink
                to={`/#${link.to}`}
                onClick={() => mobile && setIsOpen(false)}
                className={baseClasses}
            >
                {link.name}
            </RouterLink>
        );
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm dark:bg-secondary/90' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 cursor-pointer">
                        {isHome ? (
                            <ScrollLink to="hero" smooth={true} duration={500} className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
                                VVN
                            </ScrollLink>
                        ) : (
                            <RouterLink to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
                                VVN
                            </RouterLink>
                        )}
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <NavItem key={link.name} link={link} />
                            ))}
                            <a href="/study-hub" className="px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-all transform hover:-translate-y-0.5 shadow-md flex items-center gap-2">
                                <BookOpen size={16} /> Study Hub
                            </a>

                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-primary focus:outline-none dark:text-gray-200"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-secondary shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {isHome ? (
                            <ScrollLink
                                to="hero"
                                smooth={true}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium cursor-pointer dark:text-gray-200"
                            >
                                Home
                            </ScrollLink>
                        ) : (
                            <RouterLink
                                to="/"
                                onClick={() => setIsOpen(false)}
                                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium cursor-pointer dark:text-gray-200"
                            >
                                Home
                            </RouterLink>
                        )}

                        {navLinks.map((link) => (
                            <NavItem key={link.name} link={link} mobile={true} />
                        ))}
                        <a href="/study-hub" className="text-primary font-semibold block px-3 py-2 rounded-md text-base hover:bg-orange-50 dark:hover:bg-gray-800 flex items-center gap-2">
                            <BookOpen size={18} /> Visit Study Hub
                        </a>

                    </div>
                </div>
            )}
        </nav>
    );
};
export default Navbar;
