import React from "react";

export default function Access() {
  // calling in the access route in server
  // posting the token to the browser
  fetch("/access", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((err) => {
    console.error(err);
  });
  return <div></div>;
}
