import "./Dashboard.css";
import LandingLayout from "../Layout/landingLayout";
import { HiOutlineSearchCircle } from "react-icons/Hi";

export default function Dashboard() {
  return (
    <LandingLayout>
      <div className="dashboard_page">
        <section className="feed_search">
        <input type="search" name="search" placeholder="Search For Gazette" />
        <HiOutlineSearchCircle className="icon" size={20} color="#fff" />
      </section>
<section className="dash_board_header">
  <h2>Upload File</h2>
</section>
<section className="file_holder">
  <section className="file_holder1">
    <label htmlFor="">File Name</label><br /><input type="text" placeholder="File Name" value='The Natonal Gazette.pdf'/><br />
    <label htmlFor="">Categories</label><br />
    <select name="Regulations">
    <option value="Statutory Regulations">Statutory Regulations</option>
  <option value="Statutory Regulations">Statutory Regulations</option>
  <option value="Statutory Regulations">Statutory Regulations</option>
    </select>
  </section>
  <section className="file_holder2">
  <label htmlFor="">Tags</label><br />
    <select name="Regulations">
    <option value="Statutory Regulations">Statutory Regulations</option>
  <option value="Statutory Regulations">Statutory Regulations</option>
  <option value="Statutory Regulations">Statutory Regulations</option>
    </select><br />
    <label htmlFor="">President</label><br /><input type="text" placeholder="File Name" value='The Natonal Gazette.pdf'/>
  </section>
  <section className="file_holder3">
  <label htmlFor="">Keywords</label><br /><input type="text" placeholder="File Name" value='The Natonal Gazette.pdf'/><br />
    <label htmlFor="">Date</label><br />
    <select name="Regulations">
    <option value="Statutory Regulations">Statutory Regulations</option>
  <option value="Statutory Regulations">Statutory Regulations</option>
  <option value="Statutory Regulations">Statutory Regulations</option>
    </select>
  </section>
</section>
      </div>
    </LandingLayout>
  );
}
