"use client";

import { useState } from "react";

interface OptionSelectorProps {
  title: string;
  options: string[];
}

export default function OptionSelector({
  title,
  options,
}: OptionSelectorProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col gap-[10px]">
      <p className="text-[14px] text-[#646464]">{title}:</p>
      <div className="flex flex-wrap gap-[5px]">
        {options?.map((option, index) => {
          return (
            <div
              onClick={() => setSelectedIndex(index)}
              className={`flex justify-center items-center min-w-[70px] px-[10px] py-[5px] border-[1px] cursor-pointer ${
                selectedIndex === index ? "border-[#000]" : "border-[#ECECEC]"
              }`}
              key={option}
            >
              <span className="text-[14px] font-normal">{option}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
