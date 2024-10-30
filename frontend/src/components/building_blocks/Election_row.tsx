import "../../styles/_shared.scss";
import "../../styles/building_blocks/Election_row.scss";
import { FC } from "react";

type Election_row_type = {
  Election_name: string;
  Election_host: string;
  index: string | number;
};

const Election_row: FC<Election_row_type> = ({
  Election_name,
  Election_host,
  index,
}) => {
  return (
    <tr key={index} className=" align-bottom">
      <th>{index}</th>
      <td>{Election_name}</td>
      <td>{Election_host}</td>
      <td>
        <button
          type="button"
          className="btn border-1 btn-sm fw-semibold vote_btn">
          Vote
        </button>
      </td>
    </tr>
  );
};

export default Election_row;
