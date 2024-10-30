import Overlay_and_Modal from "./Overlay_and_Modal";
import { FC } from "react";

type Loader_type = { children: string };

const Loader: FC<Loader_type> = ({ children }) => {
  return (
    <Overlay_and_Modal
      close_btn={false}
      notify_modal={true}
      loader={true}
      bg_color="rgb(248 245 241 / 85%)">
      <div className="text-center pt-4">
        <svg
          className="mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          width="200"
          height="200"
          style={{
            shapeRendering: "auto",
            display: "block",
            background: "transparent",
          }}
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <g>
            <circle
              stroke-linecap="round"
              fill="none"
              stroke-dasharray="50.26548245743669 50.26548245743669"
              stroke="#ff9d00"
              stroke-width="8"
              r="32"
              cy="50"
              cx="50">
              <animateTransform
                values="0 50 50;360 50 50"
                keyTimes="0;1"
                dur="1s"
                repeatCount="indefinite"
                type="rotate"
                attributeName="transform"></animateTransform>
            </circle>
            <g></g>
          </g>
        </svg>
      </div>

      <div className="text-center fw-medium  fs-5"> {children}</div>
    </Overlay_and_Modal>
  );
};

export default Loader;
