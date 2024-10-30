import "../../styles/building_blocks/_label_input.scss";
import "../../styles/_shared.scss";
import { FC } from "react";

type label_input_type = {
  placeholder?: string;
  Icon?: FC;
  type: string;
  id?: string;
  required: boolean;
};

const Label_input: FC<label_input_type> = ({
  placeholder,
  Icon,
  type,
  id,
  required = false,
}) => {
  return (
    <div className=" gy-4 Label_input">
      <div className="d-flex align-items-center form-control ">
        {Icon && <Icon />}
        <input
          placeholder={placeholder}
          id={id}
          className="form-control"
          type={type}
          required={required}
        />
      </div>
    </div>
  );
};

export default Label_input;
