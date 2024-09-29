import "./Contact.css";
import Lottie from "lottie-react";
import ContactAnimation from "../../Animation/Contact.json";

function Contact() {
  return (
    <>
      <section className="contact-us">
        <h1 className="flex">
          <span className="icon-envelope1"></span>
          Contact Us
        </h1>
        <p>
          Get notified when I publish something new, and unsubscribe at any
          time.
        </p>
        <div
          className="flex"
          style={{
            gap: "30px",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <div className="right">
            <form>
              <div className="flex">
                <label htmlFor="email">Your Email: </label>
                <input type="email" id="email" />
              </div>
              <div className="flex">
                <label htmlFor="message">Your Message: </label>
                <textarea required id="message" rows={"5"}></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div
            className="left animation"
            style={{ width: "400px", height: "350px" }}
          >
            <Lottie animationData={ContactAnimation} height={350} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
