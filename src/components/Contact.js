import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Element } from "react-scroll";

const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_z05umaj',
      'template_my7vxv6',
      form.current,
      'jU-q_hSFArgsRxBEw'
    )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");

        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Element className='about-contact'>
      <section className="contact-wrapper" id="contact">
        <h1>Contact Me</h1>

        <div className="form-container">
            <form ref={form} onSubmit={sendEmail}>
          <div className="contact-form">
              <input type="text" name="user_name" className="user" placeholder="Your Name" required />
              <input type="email" name="user_email" className="user" placeholder=" Enter a Valid Email" required />
              <textarea name="message" className="user" placeholder="Your Message" required />
              <input type="submit" value="Send" className="submitbutton" />
          </div>
            </form>
        </div>
      
    </section>
     </Element >
    );
};

export default Contact
