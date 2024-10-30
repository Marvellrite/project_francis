import { FC } from "react";
import "../../styles/Vote_sub_components/Cast_vote.scss";
import Themed_btn from "../building_blocks/Themed_btn";
import Overlay_and_Modal from "../building_blocks/Overlay_and_Modal";

const CandidateDetails = [
  {
    name: "Miracle Janett",
    vote_count: 3,
  },
  {
    name: "Williams Odogwu",
    vote_count: 5,
  },
  { name: "Gina Jonah", vote_count: 10 },
];

const Cast_vote = () => {
  return (
    <Overlay_and_Modal>
      {" "}
      <div className="modal_content h-100 pt-2">
        <div>
          {/* <button type="button" className=" btn-close">
              <FaWindowClose></FaWindowClose>
            </button> */}
        </div>

        <table className="table table-borderless elections m-auto">
          <caption className="caption-top fw-medium">
            Choose Your Candidate
          </caption>
          <thead className="bg-prime">
            <tr>
              <th>S/N</th>
              <th>Position</th>
              <th>Vote Count</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {CandidateDetails.map((detail, index) => {
              return (
                <Cast_vote_row {...detail} key={index} index={index + 1} />
              );
            })}
          </tbody>
        </table>

        <div className="text-center mt-4">
          <Themed_btn btn_text="Cast Vote"></Themed_btn>
        </div>
      </div>
    </Overlay_and_Modal>
  );
};

type Cast_vote_type = {
  name: string;
  index: number;
  vote_count: number;
};

const Cast_vote_row: FC<Cast_vote_type> = ({ name, index, vote_count }) => {
  return (
    <tr>
      <th>{index}</th>
      <td>
        <label className="form-check-label" htmlFor={index.toString()}>
          {name}
        </label>
      </td>
      <td>{vote_count}</td>
      <td>
        <input
          className="form-check-input"
          title="Choose Candidate"
          type="radio"
          name="Candidate_choice"
          id={index.toString()}
        />
      </td>
    </tr>
  );
};

export default Cast_vote;
