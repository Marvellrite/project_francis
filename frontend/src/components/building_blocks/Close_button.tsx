import "../../styles/_shared.scss";
import "../../styles/building_blocks/_close_btn.scss";
import { FaXmark } from "react-icons/fa6";
import useContext_1 from "../../custom-hooks/useContext";

const Close_button = () => {
  const context = useContext_1();
  if(context){
    
    const {setDisplayTable} = context;
    return (
      <button
        className="btn btn-close p-0 border-0 close_btn"
        type="button"
        title="Remove button" onClick={()=>{setDisplayTable(false)}}>
        <FaXmark />
      </button>
    );
  }else{
    return (
      <button
        className="btn btn-close p-0 border-0 close_btn"
        type="button"
        title="Remove button">
        <FaXmark />
      </button>
    );
  }
};

export default Close_button;
