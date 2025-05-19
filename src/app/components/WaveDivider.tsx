import React from 'react';

const WaveDivider = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden">
      <div className="relative h-[80px]">
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
            />
          </defs>
          <g className="subtle-wave-animation">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(59, 130, 246, 0.2)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(96, 165, 250, 0.15)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(147, 197, 253, 0.1)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="7"
              fill="rgba(219, 234, 254, 0.7)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default WaveDivider;
