import './NavbarComponent.css';
import NavbarLogo from '../assets/LogoNavbarComponent.jpg'
import CompanyProfileFile from '../assets/CompanyProfileKapwika.pdf'
import 'bootstrap/dist/css/bootstrap.css'


const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={NavbarLogo} alt="Logo" className="logo" width="323" height="48"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-3">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href={CompanyProfileFile}>Company Profile</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="/services">Services</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
export default Navbar;