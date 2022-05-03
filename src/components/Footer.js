import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center">
      <p>Copyright &copy; 2022</p>
      <Link to="/about" className="text-orange-500">
        About
      </Link>
    </footer>
  );
};

export default Footer;
