import React from "react";

export default function TitleProduct({ title }: { title: string }) {
  return (
    <div className="text-[20px] md:text-[26px] text-[#2d2d2d]">{title}</div>
  );
}
