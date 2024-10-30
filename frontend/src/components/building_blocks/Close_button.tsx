import "../../styles/_shared.scss";
import "../../styles/building_blocks/_close_btn.scss";
import { FaXmark } from "react-icons/fa6";

const Close_button = () => {
  return (
    <button
      className="btn btn-close p-0 border-0 close_btn"
      type="button"
      title="Remove button">
      <FaXmark />
    </button>
  );
};

export default Close_button;
