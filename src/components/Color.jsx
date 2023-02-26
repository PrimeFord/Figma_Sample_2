import React, { useState } from "react";

const Color = () => {
  const [Color, setColor] = useState("#761187");

  return (
    <div
      style={{
        background: Color,
        height: "600px",
        width: "715px",
        margin: "3rem auto 0",
        display: "flex",
        alignItems: "flex-end",
        padding: "10rem 3rem",
        gap: "5rem",
      }}
    >
      <div
        className="h-[58px] w-[101px] bg-[#871111] border border-black"
        onClick={() => setColor("#871111")}
      ></div>
      <div
        className="h-[58px] w-[101px] bg-[#5A6628] border border-black"
        onClick={() => setColor("#5A6628")}
      ></div>
      <div
        className="h-[58px] w-[101px] bg-[#113287] border border-black"
        onClick={() => setColor("#113287")}
      ></div>
      <div
        className="h-[58px] w-[101px] bg-[#761187] border border-black"
        onClick={() => setColor("#761187")}
      ></div>
    </div>
  );
};

export default Color;
