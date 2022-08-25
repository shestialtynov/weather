import React from "react";

function TopButtons() {
  const cities = [
    {
      id: 1,
      title: "Kyiv",
    },
    {
      id: 2,
      title: "Warsaw",
    },
    {
      id: 3,
      title: "Prague",
    },
    {
      id: 4,
      title: "London",
    },
    {
      id: 5,
      title: "Madrid",
    },
    {
      id: 6,
      title: "Lissabon",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-medium text-white"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
