import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import './Contact.scss'

export const Contact = () => {
    const form = useRef()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [textArea, setTextArea] = useState('')

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm("service_r6etb9u", "template_iycxb51", form.current, "Dpvj7CVM5LmOuw7ZU")
      .then(
        () => {
          setName('');
          setEmail('');
          setTextArea('');
        },
        (error) => {
          console.log(error.text);
        }
      );
    };

    const submit = () => {
      alert('test');
    };
  
    return (
      <div className="container">
        <form ref={form} onSubmit={sendEmail} className="form">
          <label>Votre nom :</label>
            <input 
              className="name" 
              type="text" 
              name="name" 
              value={name}
              onChange={event => setName(event.target.value)}
              placeholder="Votre nom." 
              required autoFocus
            />
          <label>Votre Email :</label>
            <input 
              className="email" 
              type="email" 
              name="email" 
              value={email}
              onChange={event => setEmail(event.target.value)} 
              placeholder="Votre adresse mail." 
              required 
            />
          <label>Message</label>
            <textarea 
              className="textArea" 
              rows="15" 
              name="message" 
              value={textArea} 
              onChange={event => setTextArea(event.target.value)}
              maxlength="255" 
              placeholder="Votre message pour me contacter."
              required 
            />
          <button onClick={submit} type="submit">Envoyer</button>
        </form>
      </div>
      
    );
  };


export default Contact;