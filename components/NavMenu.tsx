import Link from "next/link";
import React from "react";

const resetAnimation = () => {
  document.querySelectorAll(".animate-spinOnceAndStop").forEach(($el) => {
    $el.classList.remove("animate-spinOnceAndStop");
  });
};

const NavMenu = () => {
  const menuItems = ["NEWS", "LIVE", "DISCOGRAPHY", "PROFILE", "CONTACT"];

  return (
    <nav
      className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8"
      onMouseLeave={() => {
        resetAnimation();
      }}
    >
      {menuItems.map((item) => (
        <Link
          key={item}
          href={`/${item.toLowerCase()}`}
          className="text-xl tracking-wider will-change-transform"
          onMouseEnter={(event) => {
            resetAnimation();
            event.currentTarget.classList.add("animate-spinOnceAndStop");
          }}
        >
          {item}
        </Link>
      ))}
    </nav>
  );
};

export default NavMenu;
