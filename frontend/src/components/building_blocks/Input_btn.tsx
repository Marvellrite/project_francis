import "../../styles/building_blocks/_Input_btn.scss";
import Themed_btn from "./Themed_btn";
import { FC, ReactNode } from "react";

type input_and_btn_type = {
  btn_text: string | ReactNode;
  outlined?: boolean;
  sm?: boolean;
};

const Input_btn: FC<input_and_btn_type> = (props) => {
  return (
    <div className="input_and_btn">
      {" "}
      <div className="add_candidate m-auto d-flex">
        <input
          className="form-control"
          type="text"
          name=""
          title="Add Mat. No."
          placeholder="Enter Mat. No"
        />
        <Themed_btn {...props}></Themed_btn>
      </div>{" "}
    </div>
  );
};

export default Input_btn;
