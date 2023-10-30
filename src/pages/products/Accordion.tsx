import React, { useState, useRef } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Accordion = (props: any) => {
  const [clicked, setClicked] = useState<string>("-2");
  const [height, setHeight] = useState<string>("0px");

  const accMain = useRef<HTMLDivElement>(null);

  const handleToggleAccMain = (index: string) => {
    if (clicked === index) {
      setClicked("-1");
      setHeight("0px");
    } else {
      setClicked(index);
      const newHeight = accMain.current?.scrollHeight;
      if (newHeight) {
        setHeight(`${newHeight}px`);
      }
    }
  };

  return (
    <div className="accordion duration-300 bg-white m-5 w-4/4">
      <button
        className={`btn-group flex justify-between w-full py-[20px] bg-gray px-3 ${
          clicked === "0" ? "bg-secondary" : ""
        } ${clicked === "0" ? "active" : ""}`}
        onClick={() => {
          handleToggleAccMain("0");
        }}
      >
        <p className="accordion__title">{props.title}</p>
        <p className="font-bold text-lg">
          <MdOutlineArrowForwardIos
            style={{
              transform: `rotate(${clicked === "0" ? "90deg" : "0"})`,
              transition: "transform 0.3s ease",
            }}
          />
        </p>
      </button>
      <div
        ref={accMain}
        style={{
          maxHeight: `${height}`,
          transition: "max-height 0.5s ease-in-out",
          overflow: "hidden",
        }}
        className="px-0"
      >
        <div className="py-0">{props.children}</div>
      </div>
    </div>
  );
};

export default Accordion;
