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
            <p>
              Welcome to the Official Gazette Publication of the Federal
              Republic of Nigeria from 1999 till date. This is a collaboration
              between the National Institute for Legislative Studies & Konrad
              Adenauer Stiftung and it is accurate, legitimate, valid and in
              accordance with the Constitution of the Federal Republic of
              Nigeria in order to bring the law closer to the people.
            </p>
          </section>
          <section className="onboard_text">
            <h2>Log in</h2>
            <span>Please log into your account</span>
            <form action="" >
              <div className="onboard_action">
              <label htmlFor="Email">Email</label> <br /><input type="email" name="email"  />
              </div>
              <div className="onboard_action">
               <label htmlFor="Email">Password</label> <br /><input type="password" name="email"  />
              </div>
              <div className="onboard_keys">
                <p>Forgot Password?</p>
                <button type="submit">Login</button>
              </div>
            </form>
          </section>
        </div>
      </LandingLayout>
    </>
  );
}
