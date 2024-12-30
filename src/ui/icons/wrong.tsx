import * as React from 'react';

const WrongIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    fill="none"
    viewBox="0 0 15 15"
  >
    <circle cx="7.5" cy="7.5" r="7.5" fill="red" fillOpacity="0.5" />
    <circle cx="7.5" cy="7.5" r="7" stroke="#000" strokeOpacity="0.35" />
    <g clipPath="url(#clip0_213_23)">
      <path
        stroke="#F4F4F4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m4.5 4.5 6 6m0-6-6 6"
      />
    </g>
    <defs>
      <clipPath id="clip0_213_23">
        <path fill="#fff" d="M3 3h9v9H3z" />
      </clipPath>
    </defs>
  </svg>
);

export default WrongIcon;
