import "./contact.css";
import Link from "next/link";
export default function Contact() {
  return (
    <div className="grid2">
      <div className="grid-item2 flex1">
        <h4>LET'S CONTACT</h4>
        <h1>@Skininstituteclinic</h1>
        <p>
          We love hearing from our users. Connect with us on social media to
          share your feedback and thoughts.
        </p>
      </div>
      <div className="grid-item2">
        <img src="Connect-01-min-scaled.jpg" alt="" />
      </div>
      <div className="grid-item2 flex2">
        <h1>
          Schedule Your <br /> Appointment Online!
        </h1>
        <p>
          Treat yourself to one or more of our services provided by our amazing
          team!
        </p>
        <button>Schedule a visit</button>
      </div>
      <div className="grid-item2 ">
        <Link href="www.google.com">
          <h1>review in google</h1>
          <span>
            <img src="./hand.png" alt="" />
          </span>
        </Link>
      </div>
    </div>
  );
}
