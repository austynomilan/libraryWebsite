import "./landingLayout.css";
import Logo from "/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { CgCopyright } from "react-icons/Cg";
import TradeMark from "/images/image 7.svg"

export default function landingLayout({children}) {
  return (
    <>
      <nav>
        <div className="nav_logo">
          <Link>
            <img src={Logo} alt="The Publication Library" />
          </Link>
        </div>

        <div className="nav_menu">
          <ul>
            <li>
              <NavLink activeclassname="active" exact="true" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" exact="true" to="/repository">
              Repository
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" exact="true" to="/dashboard">
              Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" exact="true" to="/onboarding">
              Onboard
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {children}
      <footer>
        <ul>
          <li><CgCopyright /></li>
          <li>2022 The publication Library.</li>
          <li>All right Reserved</li>
          <li><img src={TradeMark} alt="TradeMark"  /></li>
        </ul>
      </footer>
    </>
  );
}
