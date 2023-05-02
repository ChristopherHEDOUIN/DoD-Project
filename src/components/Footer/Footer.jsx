import React from "react";
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer_ul">
        <li className="footer_li bold">Home</li>
        <li>
          <ul>
            <li className="footer_li bold">Social Media</li>
            <li className="footer_li">Instagram</li>
            <li className="footer_li">Linkedin</li>
          </ul>
        </li>
        <li className="footer_li">
          <ul>
            <li className="footer_li bold">Contact</li>
            <li className="footer_li">Sur le net</li>
            <li className="footer_li">chris.hedouin@lilo.org</li>
          </ul>
        </li>
      </ul>
      <span> &copy; 2023 DeathOrDieCompagny. </span>
    </footer>
  );
}