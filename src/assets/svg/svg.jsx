import React from "react";

export function Svg1() {
  return (
    <svg
      width="64px"
      height="64px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#FF683E"
    >
      <circle cx="12" cy="4" r="2" stroke="currentColor" stroke-width="0.5" />
      <circle cx="6" cy="18" r="2" stroke="currentColor" stroke-width="0.5" />
      <circle cx="18" cy="18" r="2" stroke="currentColor" stroke-width="0.5" />
      <line
        x1="12"
        y1="6"
        x2="6"
        y2="16"
        stroke="currentColor"
        stroke-width="0.5"
      />
      <line
        x1="12"
        y1="6"
        x2="18"
        y2="16"
        stroke="currentColor"
        stroke-width="0.5"
      />
      <ellipse
        cx="12"
        cy="9"
        rx="9"
        ry="3"
        stroke="currentColor"
        stroke-width="0.5"
      />
      <ellipse
        cx="12"
        cy="15"
        rx="9"
        ry="3"
        stroke="currentColor"
        stroke-width="0.5"
      />
      <ellipse
        cx="12"
        cy="21"
        rx="9"
        ry="3"
        stroke="currentColor"
        stroke-width="0.5"
      />
    </svg>
  );
}

export function Svg2() {
  return (
    <svg
      width="64px"
      height="64px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#FF683E"
    >
      {/* <!-- Bar Chart --> */}
      <rect
        x="2"
        y="13"
        width="2"
        height="8"
        stroke="currentColor"
        stroke-width="0.5"
      />
      <rect
        x="6"
        y="10"
        width="2"
        height="11"
        stroke="currentColor"
        stroke-width="0.5"
      />
      <rect
        x="10"
        y="5"
        width="2"
        height="16"
        stroke="currentColor"
        stroke-width="0.5"
      />
      <rect
        x="14"
        y="8"
        width="2"
        height="13"
        stroke="currentColor"
        stroke-width="0.5"
      />
      <rect
        x="18"
        y="11"
        width="2"
        height="10"
        stroke="currentColor"
        stroke-width="0.5"
      />

      {/* <!-- Magnifying Glass --> */}
      <circle cx="17" cy="7" r="3" stroke="currentColor" stroke-width="0.5" />
      <line
        x1="19.5"
        y1="9.5"
        x2="22"
        y2="12"
        stroke="currentColor"
        stroke-width="0.5"
      />
    </svg>
  );
}

export function Svg3() {
  return (
    <>
      <svg
        width="64px"
        height="64px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#FF683E"
      >
        {/* <!-- Neural Network Nodes --> */}
        <circle cx="6" cy="6" r="2" stroke="currentColor" stroke-width="0.5" />
        <circle cx="18" cy="6" r="2" stroke="currentColor" stroke-width="0.5" />
        <circle cx="6" cy="18" r="2" stroke="currentColor" stroke-width="0.5" />
        <circle
          cx="18"
          cy="18"
          r="2"
          stroke="currentColor"
          stroke-width="0.5"
        />
        <circle
          cx="12"
          cy="12"
          r="2"
          stroke="currentColor"
          stroke-width="0.5"
        />

        {/* <!-- Neural Network Connections --> */}
        <line
          x1="6"
          y1="6"
          x2="12"
          y2="12"
          stroke="currentColor"
          stroke-width="0.5"
        />
        <line
          x1="18"
          y1="6"
          x2="12"
          y2="12"
          stroke="currentColor"
          stroke-width="0.5"
        />
        <line
          x1="6"
          y1="18"
          x2="12"
          y2="12"
          stroke="currentColor"
          stroke-width="0.5"
        />
        <line
          x1="18"
          y1="18"
          x2="12"
          y2="12"
          stroke="currentColor"
          stroke-width="0.5"
        />

        {/* <!-- Creative Spark --> */}
        <path
          d="M12 2 L13 5 L16 6 L13 7 L12 10 L11 7 L8 6 L11 5 Z"
          stroke="currentColor"
          stroke-width="0.5"
          fill="none"
        />
      </svg>
    </>
  );
}

export function Svg4() {
  return (
    <>
      <svg
        width="70px"
        height="70px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#FF683E"
      >
        {/* <!-- Gear --> */}
        <circle
          cx="12"
          cy="12"
          r="3"
          stroke="currentColor"
          stroke-width="0.5"
        />
        <path d="M12 2.5v3" stroke="currentColor" stroke-width="0.5" />
        <path d="M12 18.5v3" stroke="currentColor" stroke-width="0.5" />
        <path d="M4.5 12h3" stroke="currentColor" stroke-width="0.5" />
        <path d="M16.5 12h3" stroke="currentColor" stroke-width="0.5" />
        <path d="M5.5 5.5l2.1 2.1" stroke="currentColor" stroke-width="0.5" />
        <path d="M16.4 16.4l2.1 2.1" stroke="currentColor" stroke-width="0.5" />
        <path d="M5.5 18.5l2.1-2.1" stroke="currentColor" stroke-width="0.5" />
        <path d="M16.4 7.6l2.1-2.1" stroke="currentColor" stroke-width="0.5" />

        {/* <!-- Wrench --> */}
        <path
          d="M9 3c-1.5 0-2.75 1-2.75 2.5S7.5 8 9 8c1 0 2.5-1.5 2.5-2.5S10 3 9 3z"
          stroke="currentColor"
          stroke-width="0.5"
          fill="none"
        />
        <line
          x1="9"
          y1="8"
          x2="15"
          y2="14"
          stroke="currentColor"
          stroke-width="0.5"
        />
        <line
          x1="16"
          y1="13"
          x2="17.5"
          y2="14.5"
          stroke="currentColor"
          stroke-width="0.5"
        />
      </svg>
    </>
  );
}

export function Svg5() {
  return (
    <>
      <svg
        width="64px"
        height="64px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#FF683E"
      >
        {/* <!-- Presentation Screen --> */}
        <rect
          x="4"
          y="5"
          width="16"
          height="10"
          stroke="currentColor"
          stroke-width="0.5"
        />
        <path d="M4 15h16" stroke="currentColor" stroke-width="0.5" />
        <path d="M4 5l8-3 8 3v10" stroke="currentColor" stroke-width="0.5" />

        {/* <!-- Chart with Upward Arrows --> */}
        <rect
          x="6"
          y="16"
          width="2"
          height="6"
          stroke="currentColor"
          stroke-width="0.5"
        />
        <rect
          x="10"
          y="14"
          width="2"
          height="8"
          stroke="currentColor"
          stroke-width="0.5"
        />
        <rect
          x="14"
          y="11"
          width="2"
          height="11"
          stroke="currentColor"
          stroke-width="0.5"
        />
        <rect
          x="18"
          y="13"
          width="2"
          height="9"
          stroke="currentColor"
          stroke-width="0.5"
        />

        {/* <!-- Upward Arrows --> */}
        <line
          x1="6"
          y1="16"
          x2="6"
          y2="14"
          stroke="currentColor"
          stroke-width="0.5"
        />
        <line
          x1="6"
          y1="14"
          x2="5.5"
          y2="14.5"
          stroke="currentColor"
          stroke-width="0.5"
        />
        <line
          x1="6"
          y1="14"
          x2="6.5"
          y2="14.5"
          stroke="currentColor"
          stroke-width="0.5"
        />

        <line
          x1="10"
          y1="14"
          x2="10"
          y2="12"
          stroke="currentColor"
          stroke-width="0.5"
        />
        <line
          x1="10"
          y1="12"
          x2="9.5"
          y2="12.5"
          stroke="currentColor"
          stroke-width="0.5"
        />
        <line
          x1="10"
          y1="12"
          x2="10.5"
          y2="12.5"
          stroke="currentColor"
          stroke-width="0.5"
        />

        <line
          x1="14"
          y1="11"
          x2="14"
          y2="9"
          stroke="currentColor"
          stroke-width="0.5"
        />
        <line
          x1="14"
          y1="9"
          x2="13.5"
          y2="9.5"
          stroke="currentColor"
          stroke-width="0.5"
        />
        <line
          x1="14"
          y1="9"
          x2="14.5"
          y2="9.5"
          stroke="currentColor"
          stroke-width="0.5"
        />

        <line
          x1="18"
          y1="13"
          x2="18"
          y2="11"
          stroke="currentColor"
          stroke-width="0.5"
        />
        <line
          x1="18"
          y1="11"
          x2="17.5"
          y2="11.5"
          stroke="currentColor"
          stroke-width="0.5"
        />
        <line
          x1="18"
          y1="11"
          x2="18.5"
          y2="11.5"
          stroke="currentColor"
          stroke-width="0.5"
        />
      </svg>
    </>
  );
}
