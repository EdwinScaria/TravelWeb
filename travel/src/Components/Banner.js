import React from "react";

export default function Banner({ children, title, subtitle }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
// children is the div inside banner - I am using Link
// title is the title for the banner
// subtile is the subtile for the banner
