import { FC, ReactNode } from "react";
import "../../styles/building_blocks/Themed_btn_1.scss";
import { MouseEventHandler } from "react";

type Themed_btn_type = {
  btn_text: string | ReactNode;
  outlined?: boolean;
  sm?: boolean;
  bg_color?: string;
  bg_secondary?: boolean;
  theme_class?: string;
  type: "submit" | "button" | "reset" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>
};

const Themed_btn: FC<Themed_btn_type> = ({
  theme_class = "prime",
  btn_text,
  outlined,
  sm,
  bg_color,
  type = "button",
  onClick
}) => {
  return (
    <button onClick={onClick}
      type={type}
      className={`btn btn${
        sm && "-sm"
      } btn-${theme_class} fw-medium themed_btn${outlined ? "_outlined" : ""}${
        theme_class ? "_" + theme_class : ""
      } border-1 `}
      style={
        bg_color
          ? {
              backgroundColor: bg_color,
            }
          : {}
      }>
      {btn_text}
    </button>
  );
};

export default Themed_btn;
