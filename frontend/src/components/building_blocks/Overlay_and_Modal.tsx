import { FC, ReactNode } from "react";
import "../../styles/building_blocks/_Overlay_and_Modal.scss";
import Close_button from "./Close_button";
import Back_button from "./Back_button";

type Overlay_and_Modal_type = {
  children: ReactNode;
  back_button?: boolean;
  notify_modal?: boolean;
  close_btn?: boolean;
  bg_color?: string;
  loader?: boolean;
};

const Overlay_and_Modal: FC<Overlay_and_Modal_type> = ({
  children,
  back_button,
  notify_modal,
  close_btn = true,
  bg_color,
  loader = false,
}) => {
  return (
    <div className=" h-100 w-100 position-absolute top-0 start-0 overlay">
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
        <div
          className="holder rounded-2 px-3"
          style={
            !loader
              ? notify_modal
                ? bg_color
                  ? {
                      height: "50%",
                      maxWidth: "500px",
                      backgroundColor: bg_color,
                    }
                  : {
                      height: "50%",
                      maxWidth: "500px",
                    }
                : bg_color
                ? { height: "75%", backgroundColor: bg_color }
                : { height: "75%", maxWidth: "600px" }
              : bg_color
              ? {
                  height: "50%",
                  maxWidth: "450px",
                  backgroundColor: bg_color,
                }
              : {
                  height: "50%",
                  maxWidth: "450px",
                }
          }>
          {back_button ? (
            <div className=" mt-2 text-end d-flex justify-content-between mb-2">
              <Back_button></Back_button>
              <Close_button></Close_button>
            </div>
          ) : (
            close_btn && (
              <div className=" mt-2 mb-2 text-end">
                <Close_button></Close_button>
              </div>
            )
          )}

          {children}
        </div>
      </div>
    </div>
  );
};

export default Overlay_and_Modal;
