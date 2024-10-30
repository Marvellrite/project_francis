import { FaBackspace } from "react-icons/fa";
import "../../styles/building_blocks/_close_btn.scss";

const Back_button = () => {
  return (
    <button
      className="btn btn-close p-0 close_btn"
      type="button"
      title="Go Back">
      <FaBackspace></FaBackspace>
    </button>
  );
};

export default Back_button;
