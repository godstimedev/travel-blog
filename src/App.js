import React from "react";
import Navbar from "./Navbar";
import Country from "./Country";
import data from "./data";

export default function App() {
  const countries = data.map((item) => {
    return (
      <Country
        img={item.imageUrl}
        title={item.title}
        location={item.location}
        map={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
      />
    );
  });
  return (
    <>
      <Navbar />
      {countries}
    </>
  );
}
