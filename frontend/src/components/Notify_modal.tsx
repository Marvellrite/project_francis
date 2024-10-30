import Overlay_and_Modal from "./building_blocks/Overlay_and_Modal";
import { FC, ReactNode } from "react";
import Themed_btn from "./building_blocks/Themed_btn";
// import "";

type Notify_Modal_type = {
  icon: ReactNode;
  children: string;
  color: string;
  btn_text?: string;
  btn_text_1?: string;
  btn_text_2?: string;
  two_btns?: boolean;
  btn_1_theme?: string;
  btn_2_theme?: string;
};

const Notify_modal: FC<Notify_Modal_type> = ({
  icon,
  children,
  color,
  btn_text = "Ok, I got it",
  btn_text_1,
  btn_text_2,
  two_btns,
  btn_1_theme,
  btn_2_theme,
}) => {
  return (
    <Overlay_and_Modal close_btn={false} notify_modal={true}>
      <div className="row align-content-center text-center mt-3">
        <div className="col-12 " style={{ marginBottom: "1rem" }}>
          <span style={{ fontSize: "5rem", color }}>{icon}</span>
        </div>
        <div className="fs-5 text-secondary fw-medium px-2">{children}</div>
        {!two_btns ? (
          <div className="text-center mt-4">
            <Themed_btn
              btn_text={btn_text}
              theme_class={btn_1_theme}></Themed_btn>
          </div>
        ) : (
          <div
            className="text-center mt-4 d-flex justify-content-center"
            style={{ gap: "25px" }}>
            <Themed_btn btn_text={btn_text_1}></Themed_btn>{" "}
            <Themed_btn
              theme_class={btn_2_theme}
              btn_text={btn_text_2}></Themed_btn>
          </div>
        )}
      </div>
    </Overlay_and_Modal>
  );
};

export default Notify_modal;
