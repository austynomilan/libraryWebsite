import "./Dashboard.css";
import LandingLayout from "../Layout/landingLayout";
import { HiOutlineSearchCircle } from "react-icons/Hi";

export default function Dashboard() {
  return (
    <LandingLayout>
      <section className="feed_search">
        <input type="search" name="search" placeholder="Search For Gazette" />
        <HiOutlineSearchCircle className="icon" size={20} color="#fff" />
      </section>
<section className="dash_board_header">
  <h2>Upload File</h2>
</section>

    </LandingLayout>
  );
}
