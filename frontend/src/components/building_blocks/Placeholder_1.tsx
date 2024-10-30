import "../../styles/building_blocks/placeholder_1.scss";
import "../../styles/_shared.scss";
import { ReactNode, FC } from "react";

type Placeholder_1_Type = {
  children: ReactNode;
  className?: string;
};

const Placeholder_1: FC<Placeholder_1_Type> = ({ children, className }) => {
  return (
    <div
      className={
        "no_ongoing_election h-75 bg-white m-auto rounded-2 d-flex align-items-center table-responsive-sm flex-column" +
        " " +
        className
      }
      style={{ width: "90%" }}>
      {children}
    </div>
  );
};

export default Placeholder_1;
