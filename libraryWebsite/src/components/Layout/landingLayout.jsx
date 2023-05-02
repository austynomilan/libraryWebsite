import "./landingLayout.css";
import Logo from "/images/logo.png";
import { Link, NavLink } from "react-router-dom";

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
    </>
  );
}
