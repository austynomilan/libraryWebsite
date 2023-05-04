import "./Home.css";
import LandingLayout from "../Layout/landingLayout";
import Home_image from "/images/home.png";
import { HiOutlineSearchCircle, HiOutlineDotsVertical, } from "react-icons/Hi";
import Data from '../../Data/data.json'

export default function Home() {
  return (
    <LandingLayout>
      <div className="Home_page">
        <section className="home_graphics pulse">
          <img src={Home_image} alt="Reading on a couch" />
        </section>
        <section className="home_text">
          <div className="home_actions">
            <input
              type="search"
              name="search"
              placeholder="Search for Gazettes"
            />
            <HiOutlineSearchCircle size={30} color="blue" className="icon" />
          </div>
          <article>
            <div className="home_text_head">
              <h3 className="animated-paragraph">The Official Gazette for 2004 Contract Bills</h3>
              <p className="home_btn">Contract Bills</p>
              <HiOutlineDotsVertical
                className="home_dots firstdots"
                size={20}
                color="blue"
              />
            </div>
            <p>
              An act to make provision for the standard tendering prcedure for
              award contracts in the public service of the federation and other
              related matters. An act to make provision for the standard
              tendering prcedure for award contracts in the public
              service..........
            </p>
            <span>Published on 02 June, 2015</span>
          </article>
          <article>
            <div className="home_text_head">
              <h3>The Official Gazette for 2004 Contract Bills</h3>
              <p className="home_btn">Contract Bills</p>
              <HiOutlineDotsVertical
                className="home_dots secondtdots"
                size={20}
                color="blue"
              />
            </div>
            <p>
              An act to make provision for the standard tendering prcedure for
              award contracts in the public service of the federation and other
              related matters. An act to make provision for the standard
              tendering prcedure for award contracts in the public
              service..........
            </p>
            <span>Published on 02 June, 2015</span>
          </article>
        </section>
      </div>
      <div className="Home_statistic">
          {Data.Library.map(statistcs => (
            <div className="stat" key={statistcs.id}>
              <img className="stat_image" src={statistcs.statistic_rectangle} alt={`image of ${statistcs.date}`} />
              <span>
                {statistcs.date}
              </span>
            </div>
          ))}
      </div>
    </LandingLayout>
  );
}
