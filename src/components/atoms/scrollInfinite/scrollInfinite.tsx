import React, { useEffect, useRef } from "react";

const text = "От мечты к реальности";

const InfiniteScroll = () => {
  return (
    <section className="flex h-20 overflow-hidden py-6">
      <ul className="flex animate-infinite-scroll gap-[72px]">
        {Array(10)
          .fill(text)
          .map((item, index) => {
            return (
              <li
                className="flex flex-row items-center gap-2 text-[#2A6F97]"
                key={index}
              >
                <span className="truncate">{item}</span>
              </li>
            );
          })}

      </ul>
    </section>
  );
};

export default InfiniteScroll;
