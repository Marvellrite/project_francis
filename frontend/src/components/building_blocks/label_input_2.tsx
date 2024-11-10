import "../../styles/building_blocks/_label_input.scss";
import "../../styles/_shared.scss";
import { FC, ReactNode } from "react";

type label_input_type = {
  placeholder?: string;
  unit?: ReactNode|string;
  type: string;
  id?: string;
  name?:string,
  required: boolean;
  value:number|string
};

const Label_input_2: FC<label_input_type> = ({
  placeholder,
  unit,
  type,
  id,
  required = false,
  name,
  value = 0
}) => {
  return (
    <div className="d-flex align-items-center form-control p-0 pe-2 Label_input">
      <input
        placeholder={placeholder}
        id={id}
        className="form-control"
        type={type}
        name={name}
        required={required}
        defaultValue={eval(value.toString())}
      />{" "}
      <div>{unit}</div>
    </div>
  );
};

export default Label_input_2;
