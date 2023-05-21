import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import './Contact.scss'

export const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm("service_r6etb9u", "template_iycxb51", form.current, "Dpvj7CVM5LmOuw7ZU").then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    };
  
    return (
      <div className="container">
        <form ref={form} onSubmit={sendEmail} className="form">
          <label>Votre nom :</label>
          <input type="text" name="name" placeholder="Votre nom" required autoFocus/>
          <label>Votre Email :</label>
          <input type="email" name="email" placeholder="Votre adresse mail" required />
          <label>Message</label>
          <textarea rows="15" name="message" maxlength="255" placeholder="Votre message pour me contactez" required />
          <button type="submit">Envoyer</button>
        </form>
      </div>
      
    );
  };


export default Contact;