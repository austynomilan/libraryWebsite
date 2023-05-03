import "./feed.css";
import LandingLayout from "../Layout/landingLayout";
import { HiOutlineSearchCircle } from "react-icons/Hi";

export default function feeds() {
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
        <div>
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
              <input type="text" /><br />
              <label htmlFor="">Date</label>
              <br />
              <select name="date" >
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
              </select><br />
              <label htmlFor="">Tags</label>
              <br />
              <select name="date" >
                <option value="Bills">Bills</option>
              </select>
            </section>
          </section>
        </div>
      </div>
    </LandingLayout>
  );
}
