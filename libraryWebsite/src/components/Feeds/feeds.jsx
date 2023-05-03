import "./feed.css";
import LandingLayout from "../Layout/landingLayout";
import {
  HiOutlineSearchCircle,
  HiOutlineCloudDownload,
  HiOutlineShare,
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
} from "react-icons/Hi";
import { BsBookmarkPlus } from "react-icons/Bs";
import Data from "../../Data/data.json";
import { useState } from "react";

export default function feeds() {
  const [activePage, setActivePage] = useState(1);

  return (
    <LandingLayout>
      <div className="feed_page">
        <section className="feed_search">
          <input type="search" name="search" placeholder="Search For Gazette" />
          <HiOutlineSearchCircle className="icon" size={20} color="#fff" />
        </section>
        <section className="search_note">
          <p className=" search_note1">Search Results</p>
          <p className="search_note2">
            Showing search results of 1 - 5 of 5,000 “Gazette”
          </p>
        </section>
        <div className="feed_page_text">
          <section className="page_control_tools">
            <section className="feed_tools">
              <h3>Filters</h3>
              <section className="feed_filters">
                <h4>Categories</h4>
                <div className="box">
                  <input type="radio" name="" id="" />
                  <label htmlFor="">Proclamation Bills</label>
                </div>
                <div className="box">
                  <input type="radio" name="" id="" />
                  <label htmlFor="">Tourism Bills</label>
                </div>
                <div className="box">
                  <input type="radio" name="" id="" />
                  <label htmlFor="">Contract Bills</label>
                </div>
                <div className="box">
                  <input type="radio" name="" id="" />
                  <label htmlFor="">Income Bills</label>
                </div>
              </section>
              <section className="tools_selectors">
                <label htmlFor="">Keywords</label>
                <br />
                <input type="text" />
                <br />
                <label htmlFor="">Date</label>
                <br />
                <select name="date">
                  <option value="1999">1999</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                </select>
                <br />
                <label htmlFor="">Tags</label>
                <br />
                <select name="date">
                  <option value="Bills">Bills</option>
                </select>
              </section>
            </section>
          </section>
          <section>
            {Data.published.map((stories) => (
              <div key={stories.id} className="story_holder">
                <h3>{stories.text}</h3>
                <h6>{stories.link}</h6>
                <section className="story_control">
                  <p>{stories.story}</p>
                  <div className="icons download">
                    <HiOutlineCloudDownload size={30} />
                  </div>
                  <div className="icons bookmark">
                    <BsBookmarkPlus size={30} />
                  </div>
                  <div className="icons share">
                    <HiOutlineShare size={30} />
                  </div>
                </section>
                <span>{stories.publishDate}</span>
              </div>
            ))}
          </section>
        </div>
        <div className="pagination">
          <HiArrowNarrowLeft />
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className={`page-number ${
                activePage === index + 1 ? "active" : ""
              }`}
              onClick={() => {
                setActivePage(index + 1);
                document
                  .querySelectorAll(".pagination div")
                  [index].classList.add("bgBlue");
              }}
            >
              {index + 1}
            </div>
          ))}
          <HiArrowNarrowRight />
        </div>
      </div>
    </LandingLayout>
  );
}
