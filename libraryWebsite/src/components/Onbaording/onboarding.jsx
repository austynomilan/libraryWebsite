import "./onboarding.css";
import LandingLayout from "../Layout/landingLayout";
import Onbaord_graphics from "/images/lib.png";

export default function Onboarding() {
  return (
    <>
      <LandingLayout>
        <div className="onboard_page">
          <section className="onboard_grahics">
            <img src={Onbaord_graphics} alt="library image" />
          </section>
          <section></section>
        </div>
      </LandingLayout>
    </>
  );
}
