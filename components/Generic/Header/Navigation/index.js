import React from "react";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <div className="header-main-nav">
      <nav>
        <ul className="flex items-center space-x-4">
          <li className="cursor-pointer hover:opacity-90 transition-opacity duration-150">
            <Link
              to="blog-section"
              smooth={true}
              offset={50}
              duration={250}
              isDynamic={true}
            >
              Blog
            </Link>
          </li>
          <li className="cursor-pointer hover:opacity-90 transition-opacity duration-150">
            <Link
              to="certifications-section"
              smooth={true}
              offset={50}
              duration={500}
              isDynamic={true}
            >
              Certifications
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
