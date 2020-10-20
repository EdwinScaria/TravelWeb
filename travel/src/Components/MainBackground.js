import React from "react";

export default function MainBackground({ children, main }) {
  return <header className={main}>{children}</header>;
}

MainBackground.defaultProps = { main: "defaultMain" };

// setting background so that any component can use it
//main is for the background image
// children is for a component or div to go inside, in my case I am using a banner
