import Table_1 from "../building_blocks/Table_1";
import useContext_1 from "../../custom-hooks/useContext";

// type tan_result = {
//   layers: {
//     photosphere: {
//       lower: {
//         angles: number[];
//       };
//       mid: {
//         angles: number[];
//       };
//       upper: {
//         angles: number[];
//       };
//     };
//     chromosphere: {
//       lower: {
//         angles: number[];
//       };
//       mid: {
//         angles: number[];
//       };
//       upper: {
//         angles: number[];
//       };
//     };
//     corona: {
//       lower: {
//         angles: number[];
//       };
//       mid: {
//         angles: number[];
//       };
//       upper: {
//         angles: number[];
//       };
//     };
//   };
//   iterations: {
//     T: number;
//     lambda: number;
//   }[];
// };

const TAN_results = () => {
  const { data } = useContext_1()!;

  return (
    <>
      <div className="mt-4">
        <Table_1 caption_title="Summary of Results in the Photosphere">
          <thead>
            <tr>
              <th rowSpan={2}>T(s)</th>
              <th colSpan={2}>Lower Photosphere</th>
              <th colSpan={2}>Mid Photosphere</th>
              <th colSpan={2}>Upper Photosphere</th>
            </tr>
            <tr>
              <th>L(m)</th>
              <th>T</th>
              <th>L(m)</th>
              <th>T</th>
              <th>L(m)</th>
              <th>T</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.iterations[0].T}</td>
              <td>{data.iterations[0].lambda}</td>
              <td>{data.layers.photosphere.lower.angles[0]}</td>
              <td>{data.iterations[0].lambda}</td>
              <td>{data.layers.photosphere.mid.angles[0]}</td>
              <td>{data.iterations[0].lambda}</td>
              <td>{data.layers.photosphere.upper.angles[0]}</td>
            </tr>
            <tr>
              <td>{data.iterations[1].T}</td>
              <td>{data.iterations[1].lambda}</td>
              <td>{data.layers.photosphere.lower.angles[1]}</td>
              <td>{data.iterations[1].lambda}</td>
              <td>{data.layers.photosphere.mid.angles[1]}</td>
              <td>{data.iterations[1].lambda}</td>
              <td>{data.layers.photosphere.upper.angles[1]}</td>
            </tr>
            <tr>
              <td>{data.iterations[2].T}</td>
              <td>{data.iterations[2].lambda}</td>
              <td>{data.layers.photosphere.lower.angles[2]}</td>
              <td>{data.iterations[2].lambda}</td>
              <td>{data.layers.photosphere.mid.angles[2]}</td>
              <td>{data.iterations[2].lambda}</td>
              <td>{data.layers.photosphere.upper.angles[2]}</td>
            </tr>
            <tr>
              <td>{data.iterations[3].T}</td>
              <td>{data.iterations[3].lambda}</td>
              <td>{data.layers.photosphere.lower.angles[3]}</td>
              <td>{data.iterations[3].lambda}</td>
              <td>{data.layers.photosphere.mid.angles[3]}</td>
              <td>{data.iterations[3].lambda}</td>
              <td>{data.layers.photosphere.upper.angles[3]}</td>
            </tr>
            <tr>
              <td>{data.iterations[4].T}</td>
              <td>{data.iterations[4].lambda}</td>
              <td>{data.layers.photosphere.lower.angles[4]}</td>
              <td>{data.iterations[4].lambda}</td>
              <td>{data.layers.photosphere.mid.angles[4]}</td>
              <td>{data.iterations[4].lambda}</td>
              <td>{data.layers.photosphere.upper.angles[4]}</td>
            </tr>{" "}
          </tbody>
        </Table_1>
      </div>
      <div className="mt-4">
        <Table_1 caption_title="Summary of Results in the Chromosphere">
          <thead>
            <tr>
              <th rowSpan={2}>T(s)</th>
              <th colSpan={2}>Lower Chromosphere</th>
              <th colSpan={2}>Mid Chromosphere</th>
              <th colSpan={2}>Upper Chromosphere</th>
            </tr>
            <tr>
              <th>L(m)</th>
              <th>T</th>
              <th>L(m)</th>
              <th>T</th>
              <th>L(m)</th>
              <th>T</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.iterations[0].T}</td>
              <td>{data.iterations[0].lambda}</td>
              <td>{data.layers.chromosphere.lower.angles[0]}</td>
              <td>{data.iterations[0].lambda}</td>
              <td>{data.layers.chromosphere.mid.angles[0]}</td>
              <td>{data.iterations[0].lambda}</td>
              <td>{data.layers.chromosphere.upper.angles[0]}</td>
            </tr>
            <tr>
              <td>{data.iterations[1].T}</td>
              <td>{data.iterations[1].lambda}</td>
              <td>{data.layers.chromosphere.lower.angles[1]}</td>
              <td>{data.iterations[1].lambda}</td>
              <td>{data.layers.chromosphere.mid.angles[1]}</td>
              <td>{data.iterations[1].lambda}</td>
              <td>{data.layers.chromosphere.upper.angles[1]}</td>
            </tr>
            <tr>
              <td>{data.iterations[0].T}</td>
              <td>{data.iterations[0].lambda}</td>
              <td>{data.layers.chromosphere.lower.angles[0]}</td>
              <td>{data.iterations[0].lambda}</td>
              <td>{data.layers.chromosphere.mid.angles[0]}</td>
              <td>{data.iterations[0].lambda}</td>
              <td>{data.layers.chromosphere.upper.angles[0]}</td>
            </tr>
            <tr>
              <td>{data.iterations[3].T}</td>
              <td>{data.iterations[3].lambda}</td>
              <td>578</td>
              <td>{data.iterations[3].lambda}</td>
              <td>445</td>
              <td>{data.iterations[3].lambda}</td>
              <td>12</td>
            </tr>
            <tr>
              <td>{data.iterations[4].T}</td>
              <td>{data.iterations[4].lambda}</td>
              <td>{data.layers.chromosphere.lower.angles[4]}</td>
              <td>{data.iterations[4].lambda}</td>
              <td>{data.layers.chromosphere.mid.angles[4]}</td>
              <td>{data.iterations[4].lambda}</td>
              <td>{data.layers.chromosphere.upper.angles[4]}</td>
            </tr>
          </tbody>
        </Table_1>
      </div>
      <div className="mt-4">
        <Table_1 caption_title="Summary of Results in the Corona">
          <thead>
            <tr>
              <th rowSpan={2}>T(s)</th>
              <th colSpan={2}>Lower Corona</th>
              <th colSpan={2}>Mid Corona</th>
              <th colSpan={2}>Upper Corona</th>
            </tr>
            <tr>
              <th>L(m)</th>
              <th>T</th>
              <th>L(m)</th>
              <th>T</th>
              <th>L(m)</th>
              <th>T</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.iterations[0].T}</td>
              <td>{data.iterations[0].lambda}</td>
              <td>{data.layers.corona.lower.angles[0]}</td>
              <td>{data.iterations[0].lambda}</td>
              <td>{data.layers.corona.mid.angles[0]}</td>
              <td>{data.iterations[0].lambda}</td>
              <td>{data.layers.corona.upper.angles[0]}</td>
            </tr>
            <tr>
              <td>{data.iterations[1].T}</td>
              <td>{data.iterations[1].lambda}</td>
              <td>{data.layers.corona.lower.angles[1]}</td>
              <td>{data.iterations[1].lambda}</td>
              <td>{data.layers.corona.mid.angles[1]}</td>
              <td>{data.iterations[1].lambda}</td>
              <td>{data.layers.corona.upper.angles[1]}</td>
            </tr>
            <tr>
              <td>{data.iterations[2].T}</td>
              <td>{data.iterations[2].lambda}</td>
              <td>{data.layers.corona.lower.angles[2]}</td>
              <td>{data.iterations[2].lambda}</td>
              <td>{data.layers.corona.mid.angles[2]}</td>
              <td>{data.iterations[2].lambda}</td>
              <td>{data.layers.corona.upper.angles[2]}</td>
            </tr>
            <tr>
              <td>{data.iterations[3].T}</td>
              <td>{data.iterations[3].lambda}</td>
              <td>{data.layers.corona.lower.angles[3]}</td>
              <td>{data.iterations[3].lambda}</td>
              <td>{data.layers.corona.mid.angles[3]}</td>
              <td>{data.iterations[3].lambda}</td>
              <td>{data.layers.corona.upper.angles[3]}</td>
            </tr>
            <tr>
              <td>{data.iterations[4].T}</td>
              <td>{data.iterations[4].lambda}</td>
              <td>{data.layers.corona.lower.angles[4]}</td>
              <td>{data.iterations[4].lambda}</td>
              <td>{data.layers.corona.mid.angles[4]}</td>
              <td>{data.iterations[4].lambda}</td>
              <td>{data.layers.corona.upper.angles[4]}</td>
            </tr>
          </tbody>
        </Table_1>
      </div>
    </>
  );
};

export default TAN_results;
