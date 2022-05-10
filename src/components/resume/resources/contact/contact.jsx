import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jesusvaladezf@outlook.com</h5>
            <a href="mailto:jesusvaladezf@outlook.com" target="_blank">
              Send me a mail
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>5512996882</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+525512996882"
              target="_blank"
            >
              Send me a whats
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form action="">
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send mail
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
