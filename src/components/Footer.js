import React from "react";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>Copyright &#169; {new Date().getFullYear()}</li>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms and Conditions</a></li>
        <li><a href="/cookies">Cookies</a></li>
        <li><a href="https://github.com/MThos/DevHelp" target="_blank" rel="noreferrer">Github</a></li>
      </ul>
    </footer>
  )
}

export default Footer;