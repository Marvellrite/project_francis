import Table_1 from "../building_blocks/Table_1";
import useContext_1 from "../../custom-hooks/useContext";

const Group_Velocity_results = () => {
  const { data } = useContext_1()!;

  return (
    <>
      <div className="mt-4">
        <Table_1 caption_title="Summary of Results in the Photosphere">
          <thead>
            <tr>
              <th rowSpan={2}>Bo(G)</th>
              <th colSpan={2}>Lower Chromosphere</th>
              <th colSpan={2}>Mid Chromosphere</th>
              <th colSpan={2}>Upper Chromosphere</th>
            </tr>
            <tr>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.iterations[0]}</td>
              <td>{data.layers.photosphere.lower.Vg[0].Vg0}</td>
              <td>{data.layers.photosphere.lower.Vg[0].Vg1}</td>
              <td>{data.layers.photosphere.mid.Vg[0].Vg0}</td>
              <td>{data.layers.photosphere.mid.Vg[0].Vg1}</td>
              <td>{data.layers.photosphere.upper.Vg[0].Vg0}</td>
              <td>{data.layers.photosphere.upper.Vg[0].Vg1}</td>
            </tr>
            <tr>
              <td>{data.iterations[1]}</td>
              <td>{data.layers.photosphere.lower.Vg[1].Vg0}</td>
              <td>{data.layers.photosphere.lower.Vg[1].Vg1}</td>
              <td>{data.layers.photosphere.mid.Vg[1].Vg0}</td>
              <td>{data.layers.photosphere.mid.Vg[1].Vg1}</td>
              <td>{data.layers.photosphere.upper.Vg[1].Vg0}</td>
              <td>{data.layers.photosphere.upper.Vg[1].Vg1}</td>
            </tr>
            <tr>
              <td>{data.iterations[2]}</td>
              <td>{data.layers.photosphere.lower.Vg[2].Vg0}</td>
              <td>{data.layers.photosphere.lower.Vg[2].Vg1}</td>
              <td>{data.layers.photosphere.mid.Vg[2].Vg0}</td>
              <td>{data.layers.photosphere.mid.Vg[2].Vg1}</td>
              <td>{data.layers.photosphere.upper.Vg[2].Vg0}</td>
              <td>{data.layers.photosphere.upper.Vg[2].Vg1}</td>
            </tr>
            <tr>
              <td>{data.iterations[3]}</td>
              <td>{data.layers.photosphere.lower.Vg[3].Vg0}</td>
              <td>{data.layers.photosphere.lower.Vg[3].Vg1}</td>
              <td>{data.layers.photosphere.mid.Vg[3].Vg0}</td>
              <td>{data.layers.photosphere.mid.Vg[3].Vg1}</td>
              <td>{data.layers.photosphere.upper.Vg[3].Vg0}</td>
              <td>{data.layers.photosphere.upper.Vg[3].Vg1}</td>
            </tr>
            <tr>
              <td>{data.iterations[4]}</td>
              <td>{data.layers.photosphere.lower.Vg[4].Vg0}</td>
              <td>{data.layers.photosphere.lower.Vg[4].Vg1}</td>
              <td>{data.layers.photosphere.mid.Vg[4].Vg0}</td>
              <td>{data.layers.photosphere.mid.Vg[4].Vg1}</td>
              <td>{data.layers.photosphere.upper.Vg[4].Vg0}</td>
              <td>{data.layers.photosphere.upper.Vg[4].Vg1}</td>{" "}
            </tr>
          </tbody>
        </Table_1>
      </div>
      <div className="mt-4">
        <Table_1 caption_title="Summary of Results in the Chromosphere">
          <thead>
            <tr>
              <th rowSpan={2}>Bo(G)</th>

              <th colSpan={2}>Lower Chromosphere</th>
              <th colSpan={2}>Mid Chromosphere</th>
              <th colSpan={2}>Upper Chromosphere</th>
            </tr>
            <tr>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.iterations[0]}</td>
              <td>{data.layers.chromosphere.lower.Vg[0].Vg0}</td>
              <td>{data.layers.chromosphere.lower.Vg[0].Vg1}</td>
              <td>{data.layers.chromosphere.mid.Vg[0].Vg0}</td>
              <td>{data.layers.chromosphere.mid.Vg[0].Vg1}</td>
              <td>{data.layers.chromosphere.upper.Vg[0].Vg0}</td>
              <td>{data.layers.chromosphere.upper.Vg[0].Vg1}</td>
            </tr>
            <tr>
              <td>{data.iterations[1]}</td>
              <td>{data.layers.chromosphere.lower.Vg[1].Vg0}</td>
              <td>{data.layers.chromosphere.lower.Vg[1].Vg1}</td>
              <td>{data.layers.chromosphere.mid.Vg[1].Vg0}</td>
              <td>{data.layers.chromosphere.mid.Vg[1].Vg1}</td>
              <td>{data.layers.chromosphere.upper.Vg[1].Vg0}</td>
              <td>{data.layers.chromosphere.upper.Vg[1].Vg1}</td>
            </tr>
            <tr>
              <td>{data.iterations[2]}</td>
              <td>{data.layers.chromosphere.lower.Vg[2].Vg0}</td>
              <td>{data.layers.chromosphere.lower.Vg[2].Vg1}</td>
              <td>{data.layers.chromosphere.mid.Vg[2].Vg0}</td>
              <td>{data.layers.chromosphere.mid.Vg[2].Vg1}</td>
              <td>{data.layers.chromosphere.upper.Vg[2].Vg0}</td>
              <td>{data.layers.chromosphere.upper.Vg[2].Vg1}</td>
            </tr>
            <tr>
              <td>{data.iterations[3]}</td>
              <td>{data.layers.chromosphere.lower.Vg[3].Vg0}</td>
              <td>{data.layers.chromosphere.lower.Vg[3].Vg1}</td>
              <td>{data.layers.chromosphere.mid.Vg[3].Vg0}</td>
              <td>{data.layers.chromosphere.mid.Vg[3].Vg1}</td>
              <td>{data.layers.chromosphere.upper.Vg[3].Vg0}</td>
              <td>{data.layers.chromosphere.upper.Vg[3].Vg1}</td>
            </tr>
            <tr>
              <td>{data.iterations[4]}</td>
              <td>{data.layers.chromosphere.lower.Vg[4].Vg0}</td>
              <td>{data.layers.chromosphere.lower.Vg[4].Vg1}</td>
              <td>{data.layers.chromosphere.mid.Vg[4].Vg0}</td>
              <td>{data.layers.chromosphere.mid.Vg[4].Vg1}</td>
              <td>{data.layers.chromosphere.upper.Vg[4].Vg0}</td>
              <td>{data.layers.chromosphere.upper.Vg[4].Vg1}</td>
            </tr>
          </tbody>
        </Table_1>
      </div>

      <div className="mt-4">
        <Table_1 caption_title="Summary of Results in the Corona">
          <thead>
            <tr>
              <th rowSpan={2} className=" ">
                Bo(G)
              </th>

              <th colSpan={2}>Lower Chromosphere</th>
              <th colSpan={2}>Mid Chromosphere</th>
              <th colSpan={2}>Upper Chromosphere</th>
            </tr>
            <tr>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.iterations[0]}</td>
              <td>{data.layers.corona.lower.Vg[0].Vg0}</td>
              <td>{data.layers.corona.lower.Vg[0].Vg1}</td>
              <td>{data.layers.corona.mid.Vg[0].Vg0}</td>
              <td>{data.layers.corona.mid.Vg[0].Vg1}</td>
              <td>{data.layers.corona.upper.Vg[0].Vg0}</td>
              <td>{data.layers.corona.upper.Vg[0].Vg1}</td>
            </tr>
            <tr>
              <td>{data.iterations[1]}</td>
              <td>{data.layers.corona.lower.Vg[1].Vg0}</td>
              <td>{data.layers.corona.lower.Vg[1].Vg1}</td>
              <td>{data.layers.corona.mid.Vg[1].Vg0}</td>
              <td>{data.layers.corona.mid.Vg[1].Vg1}</td>
              <td>{data.layers.corona.upper.Vg[1].Vg0}</td>
              <td>{data.layers.corona.upper.Vg[1].Vg1}</td>
            </tr>
            <tr>
              <td>{data.iterations[2]}</td>
              <td>{data.layers.corona.lower.Vg[2].Vg0}</td>
              <td>{data.layers.corona.lower.Vg[2].Vg1}</td>
              <td>{data.layers.corona.mid.Vg[2].Vg0}</td>
              <td>{data.layers.corona.mid.Vg[2].Vg1}</td>
              <td>{data.layers.corona.upper.Vg[2].Vg0}</td>
              <td>{data.layers.corona.upper.Vg[2].Vg1}</td>
            </tr>
            <tr>
              <td>{data.iterations[3]}</td>
              <td>{data.layers.corona.lower.Vg[3].Vg0}</td>
              <td>{data.layers.corona.lower.Vg[3].Vg1}</td>
              <td>{data.layers.corona.mid.Vg[3].Vg0}</td>
              <td>{data.layers.corona.mid.Vg[3].Vg1}</td>
              <td>{data.layers.corona.upper.Vg[3].Vg0}</td>
              <td>{data.layers.corona.upper.Vg[3].Vg1}</td>
            </tr>
            <tr>
              <td>{data.iterations[4]}</td>
              <td>{data.layers.corona.lower.Vg[4].Vg0}</td>
              <td>{data.layers.corona.lower.Vg[4].Vg1}</td>
              <td>{data.layers.corona.mid.Vg[4].Vg0}</td>
              <td>{data.layers.corona.mid.Vg[4].Vg1}</td>
              <td>{data.layers.corona.upper.Vg[4].Vg0}</td>
              <td>{data.layers.corona.upper.Vg[4].Vg1}</td>
            </tr>
          </tbody>
        </Table_1>
      </div>
    </>
  );
};

export default Group_Velocity_results;
