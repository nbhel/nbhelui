import Logo from "../../assets/images/Black White Minimalist Logo1.jpg";
import { Link } from "react-router-dom";
import { menuItems } from "../../helper/menuItems";
import { useEffect, useState } from "react";
import { navigationData } from "../../data/Footer";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  // fucntion to help scroll to top smoothly
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto mt-10">
        <div>
          <div className="text-center">
            <div className="mb-4">
              <Link to="/" className="flex items-center justify-center">
                <img
                  src={Logo}
                  className="h-6 sm:h-8"
                  alt="New Balahanuman Electricals Logo"
                />
                <span className="self-center text-md font-medium whitespace-nowrap text-gray-500">
                  New Balahanuman Electricals
                </span>
              </Link>
            </div>
          </div>
          <div className="flex justify-center space-x-10">
            <p className="max-w-lg text-center text-gray-600">
              New Balahanuman Electricals has built a tradition of serving
              businesses, big and small, with effortless ways to get the
              products and services they need.
            </p>
          </div>
          <div className="flex justify-center space-x-10 mt-4">
            {navigationData.social.map((item) => (
              <Link
                key={item.name}
                to={item.url}
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Security best practice to add noreferrer
                className="text-gray-400 hover:text-primary"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
        <hr className="mt-5" />
        <div className="flex justify-between items-center p-3 bg-gray-100">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} New Balahanuman Electricals, Inc.
            All rights reserved.
          </p>
          <nav
            className="columns-2 sm:flex sm:justify-center sm:space-x-6"
            aria-label="Footer"
          >
            {menuItems.map((item) => (
              <div key={item.title} className="">
                <Link
                  to={item.url}
                  className="text-sm font-medium leading-6 text-gray-600 hover:text-black"
                  onClick={goToTop}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
