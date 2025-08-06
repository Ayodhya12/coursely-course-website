import { Button } from "./button";

export const MainMenu = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary-600">Clasrom</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-secondary-800 font-medium justify-center items-center ">
          <a href="#home" className="hover:font-bold">
            Home
          </a>
          <a href="#about" className="hover:font-bold">
            About Us
          </a>
          <a href="#courses" className="hover:font-bold">
            Courses
          </a>
          <a href="#portfolio" className="hover:font-bold">
            Portfolio
          </a>
          <a href="#testimonial" className="hover:font-bold">
            Testimonial
          </a>
          <a href="#contact" className="hover:font-bold">
            Contact
          </a>
          <Button variant="primary">Sign In</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Items (hidden by default, add toggle logic in JS/React) */}
      <div className="md:hidden px-4 pb-4 space-y-2 text-secondary-800">
        <a href="#home" className="block hover:font-bold">
          Home
        </a>
        <a href="#about" className="block hover:font-bold">
          About Us
        </a>
        <a href="#courses" className="block hover:font-bold">
          Courses
        </a>
        <a href="#portfolio" className="block hover:font-bold">
          Portfolio
        </a>
        <a href="#testimonial" className="block hover:font-bold">
          Testimonial
        </a>
        <a href="#contact" className="block hover:font-bold">
          Contact
        </a>
        <Button variant="primary" className="block">
          Sign In
        </Button>
      </div>
    </header>
  );
};
