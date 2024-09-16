
import React, { useRef } from "react";
import Header from "../Header";
import emailjs from '@emailjs/browser';
import './index.css';
 
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

         console.log("Form Data:", form.current);

        emailjs
          .sendForm(
            'service_3dc95no',     
            'template_f82dk3o',     
            form.current,
            'S5l_j_k80uAsn625rSF-z' 
          )
          .then(
            (result) => {
              console.log('Email successfully sent!', result);
              e.target.reset();  
              alert("Email Sent!");
            },
            (error) => {
               console.error('Email sending failed with error:', error);
              alert("Failed to send email. Check the console for details.");
            }
          );
    };

    return (
      <div className="about-bg-card">
        <Header />
        <div className="contactCard">
          <h3 className="about-heading">
            Contact <span className="span">Me</span>
          </h3>
          <span className="contactDesc">
            Please fill out the form below to discuss any work opportunities.
          </span>

          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="contact-name" 
              name="user_name" 
              required
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="email" 
              name="user_email" 
              required
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="msg"
              name="message"
              required
            ></textarea>
            <button type="submit" className="contact-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
};

export default Contact;

