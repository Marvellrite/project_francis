import { FaPen } from "react-icons/fa";
import "../../styles/building_blocks/Edit_btn.scss";
import Themed_btn from "./Themed_btn";

const Edit_btn = () => {
  return (
    <Themed_btn
      btn_text={<FaPen></FaPen>}
      sm={true}
      outlined={true}></Themed_btn>
  );
};

export default Edit_btn;
