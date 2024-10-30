import "../../styles/building_blocks/Table_1.scss";
import { FC, ReactNode } from "react";

type Table_1_type = {
  caption_title?: string;
  caption_title_value?: string;
  children: ReactNode;
};

const Table_1: FC<Table_1_type> = ({
  caption_title,
  caption_title_value,
  children,
}) => {
  return (
    <div className=" table-responsive">
      <table className="table elections_1">
        {caption_title && (
          <caption className=" caption-top mb-2">
            <span className=" fw-semibold">{caption_title}</span>{" "}
            {caption_title_value}
          </caption>
        )}

        {children}
      </table>
    </div>
  );
};

export default Table_1;
