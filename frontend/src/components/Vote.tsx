import { FC } from "react";
import { Link } from "react-router-dom";
import Placeholder_1 from "./building_blocks/Placeholder_1";
import Election_row from "./building_blocks/Election_row";
import Election_row_single from "./building_blocks/Election_row_single";
import Cast_vote from "./vote_sub-components/Cast_vote";
import Overlay_and_Modal from "./building_blocks/Overlay_and_Modal";
import Notify_modal from "./Notify_modal";
import { FaQuestionCircle } from "react-icons/fa";

const Vote: FC = () => {
  return (
    <section className="vote row mx-0 w-100">
      {/* <NoOnGoingElection></NoOnGoingElection> */}
      <h2 className="col text-center my-4">Participate in an Election</h2>
      {/* <OnGoingElection></OnGoingElection> */}
      {/* <ElectionDetailsModal></ElectionDetailsModal> */}
      {/* <Cast_vote></Cast_vote> */}
      <Notify_modal
        icon={<FaQuestionCircle></FaQuestionCircle>}
        btn_text_1="Yes"
        btn_text_2="No"
        two_btns={true}
        // btn_1_theme="prime"
        btn_2_theme="secondary"
        color="blue">
        Are you sure you want to vote for this candidate? This action cannot be
        undone
      </Notify_modal>
    </section>
  );
};

const NoOnGoingElection = () => {
  return (
    <Placeholder_1 className="justify-content-center">
      <h1 className=" fst-italic text-center">No Ongoing Election</h1>
      <p>
        Check '<Link to="/view">View Elections</Link>' Tab for Upcoming
        Elections
      </p>
    </Placeholder_1>
  );
};

const ElectionsDetails = [
  { Election_name: "SUG Election", Election_host: "The SUG" },
  {
    Election_name: "Electrical Departmental Election",
    Election_host: "The Department of Electrical Engineering",
  },
  { Election_name: "SUG Election", Election_host: "The SUG" },
];

const OnGoingElection = () => {
  return (
    <Placeholder_1 className="pt-4 px-4 my-0">
      {/* <div className=" fs-4 fw-medium ">
        Number of Ongoing Election(s): Three
      </div> */}
      <table className="table elections">
        <caption className=" caption-top mb-3">
          <span className=" fw-semibold">Ongoing Election(s):</span> 3
        </caption>
        <thead className="bg-prime">
          <tr>
            <th>S/N</th>
            <th>Election Name</th>
            <th>Host</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ElectionsDetails.map((detail, index) => {
            return <Election_row {...detail} key={index} index={index + 1} />;
          })}
        </tbody>
      </table>
    </Placeholder_1>
  );
};

const ElectionDetails = [
  {
    Position: "President",
    CandidateCount: "3",
  },
  {
    Position: "Secretary",
    CandidateCount: "2",
  },
  { Position: "Secretary", CandidateCount: "3" },
];

const ElectionDetailsModal = () => {
  return (
    <Overlay_and_Modal>
      {" "}
      <div className="modal_content  pt-3">
        <div className="text-center ">
          <span className="fw-semibold">Election Name:</span> SUG Election{" "}
          <br></br>
          <span className="fw-semibold">Host:</span> The SUG
        </div>

        <table className="table elections mt-4 w-75 m-auto">
          <thead className="bg-prime">
            <tr>
              <th>S/N</th>
              <th>Position</th>
              <th>No. of Candidates</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ElectionDetails.map((detail, index) => {
              return (
                <Election_row_single
                  {...detail}
                  key={index}
                  index={index + 1}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </Overlay_and_Modal>
  );
};

export default Vote;
