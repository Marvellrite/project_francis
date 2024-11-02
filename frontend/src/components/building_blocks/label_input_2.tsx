import "../../styles/building_blocks/_label_input.scss";
import "../../styles/_shared.scss";
import { FC } from "react";

type label_input_type = {
  placeholder?: string;
  unit?: string;
  type: string;
  id?: string;
  required: boolean;
};

const Label_input_2: FC<label_input_type> = ({
  placeholder,
  unit,
  type,
  id,
  required = false,
}) => {
  return (
    <div className="d-flex align-items-center form-control p-0 pe-2 Label_input">
      <input
        placeholder={placeholder}
        id={id}
        className="form-control"
        type={type}
        required={required}
      />{" "}
      <div>{unit}</div>
    </div>
  );
};

export default Label_input_2;
