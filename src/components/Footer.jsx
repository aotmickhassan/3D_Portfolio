import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically
  return (
    <footer className="footer font-poppins" 
    style={{
        padding: "10px 20px", // Custom padding
        backgroundColor: "#f8f9fa", // Light background color
        textAlign: "center", // Center-align text
        fontSize: "0.9rem", // Smaller font size
      }}>
      <hr className="border-slate-200" />

      <div className="footer-container" style={{
            display: "flex",
            gap: "10px", // Space between icons
            justifyContent: "center", // Center-align icons
            alignItems: "center", // Vertically align icons
          }}>
        <p>
          © {currentYear} <strong>Aotmick Hassan</strong> | All rights reserved.
        </p>

        <div className="flex gap-4 justify-center items-center">
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target="_blank">
              <img
                src={link.iconUrl}
                alt={link.name}
                className="w-6 h-6 object-contain"
                style={{
                    width: "24px", // Icon width
                    height: "24px", // Icon height
                    objectFit: "contain", // Maintain aspect ratio
                  }}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
