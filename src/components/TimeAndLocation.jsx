import React from "react";

function TimeAndLocation() {
  return (
    <div>
      <div className="flex items-center justify-center my-6 ">
        <p className="text-white text-xl font-extralight">
          Thuesday, 31 May 2022 | Local time: 12:23 PM
        </p>
      </div>
      <div className="flex items-bottom justify-center my-3 ">
        <p className="text-white text-3xl font-medium">Kyiv, Ukraine</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
