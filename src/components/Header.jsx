// Import Link
import { Link } from "react-router-dom";

// Import Logo
import MyLogo from "../imgs/logo.png";

// Import Icons
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <header
      className="bg-[rgba(0,0,0,0.1)] flex justify-center fixed w-full z-50 backdrop-blur-[2px]
    border-solid border-b-2 border-transparent border-b-[rgba(255,255,255,0.1)]"
    >
      <div className="container flex justify-between items-center p-4">
        <div>
          <Link to="/">
            <img src={MyLogo} alt="Logo" className="w-[50px]" />
          </Link>
        </div>
        <ul className="flex gap-8">
          <li>
            <a
              href="https://linkedin.com/in/youssef303m/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary duration-main"
            >
              <BsLinkedin size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/youssef303m"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary duration-main"
            >
              <BsGithub size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/youssef303m"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary duration-main"
            >
              <FaXTwitter size={20} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
