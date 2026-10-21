"use client";

import { Button } from "@mui/material";

export default function HamburgerMenu() {
  return (
    <>
      <Button
        onClick={() => {
          document.querySelectorAll("#links").forEach((e) => {
            e.style.display = e.style.display == "none" ? "block" : "none";
          });
        }}
        sx={{
          border: "none",
          background: "transparent",
          color: "white",
          fontFamily: "arial",
          cursor: "pointer",
        }}
      >
        قائمة
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          className="hamburgerMenuLogo"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </Button>
    </>
  );
}
