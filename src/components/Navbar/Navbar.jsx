import NavLinks from "./NavLinks";
import { navLinks } from "../../utils/Constants";
import "./Navbar.css"
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="navbar py-12 flex items-center justify-between">
        <div className="logo">
            HYDRA
        </div>

        <ul className="nav-links md:flex hidden items-center gap-8">
            {navLinks.map((nav, index) => (
                <NavLinks key={index} link={nav.link} option={nav.option} />
            ))}
        </ul>

        <div className="other-opts hidden md:flex items-center gap-8">
            <span className="nav-contact rounded-3xl px-5 py-1">CONTACT US</span>
            <span className="btn rounded-3xl px-5 py-1">JOIN HYDRA</span>
        </div>

        <div className="md:hidden block">
            <CgMenuRightAlt className="menu text-3xl" />
        </div>
    </nav>
  )
}

export default Navbar