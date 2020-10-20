import React from "react";
import { PlaceConsumer } from "./context";

it(" Api testing", async function() {
  const value = PlaceConsumer.value;
  console.log(value);
});
