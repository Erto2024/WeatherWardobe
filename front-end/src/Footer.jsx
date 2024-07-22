import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <h3>copyright @ {date}</h3>
  );
}

export default Footer;