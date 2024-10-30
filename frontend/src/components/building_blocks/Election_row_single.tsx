import { FC } from "react";

type Election_row_single_type = {
  Position: string;
  CandidateCount: string;
  index: string | number;
};

const Election_row_single_election: FC<Election_row_single_type> = ({
  Position,
  CandidateCount,
  index,
}) => {
  return (
    <tr key={index} className=" align-bottom">
      <th>{index}</th>
      <td>{Position}</td>
      <td>{CandidateCount}</td>
      <td>
        <button
          type="button"
          className="btn border-1 fw-semibold vote_btn btn-sm">
          Vote
        </button>
      </td>
    </tr>
  );
};

export default Election_row_single_election;
