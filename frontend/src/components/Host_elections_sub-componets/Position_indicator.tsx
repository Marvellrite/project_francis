import "../../styles/Host_election_sub-components/position_indicator.scss";
import "../../styles/_shared.scss";
import { FC } from "react";
import { FaXmark } from "react-icons/fa6";

type Position_indicator_type = {
  btn_text: string;
};

const Position_indicator: FC<Position_indicator_type> = ({ btn_text }) => {
  return (
    <div className="btn rounded-2 position_indicator rounded-pill fw-medium ">
      <button
        className="btn btn-close p-0 pe-1 shadow-none"
        type="button"
        title="Remove button">
        <FaXmark />
      </button>
      <span>{btn_text}</span>
    </div>
  );
};

export default Position_indicator;
