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
              <th colSpan={3}>Lower Photosphere</th>
              <th colSpan={3}>Mid Photosphere</th>
              <th colSpan={3}>Upper Photosphere</th>
            </tr>
            <tr>
              <th>Bo(G)</th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>Bo(G)</th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>Bo(G)</th>
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
              <td>{data.iterations[0].lower["1st"]}</td>
              <td>{data.layers.photosphere.lower.Vg[0].Vg0}</td>
              <td>{data.layers.photosphere.lower.Vg[0].Vg1}</td>
              <td>{data.iterations[0].mid["1st"]}</td>
              <td>{data.layers.photosphere.mid.Vg[0].Vg0}</td>
              <td>{data.layers.photosphere.mid.Vg[0].Vg1}</td>
              <td>{data.iterations[0].upper["1st"]}</td>
              <td>{data.layers.photosphere.upper.Vg[0].Vg0}</td>
              <td>{data.layers.photosphere.upper.Vg[0].Vg1}</td>
            </tr>
            <tr>
              <td>{data.iterations[0].lower["2nd"]}</td>
              <td>{data.layers.photosphere.lower.Vg[1].Vg0}</td>
              <td>{data.layers.photosphere.lower.Vg[1].Vg1}</td>
              <td>{data.iterations[0].mid["2nd"]}</td>
              <td>{data.layers.photosphere.mid.Vg[1].Vg0}</td>
              <td>{data.layers.photosphere.mid.Vg[1].Vg1}</td>
              <td>{data.iterations[0].upper["2nd"]}</td>
              <td>{data.layers.photosphere.upper.Vg[1].Vg0}</td>
              <td>{data.layers.photosphere.upper.Vg[1].Vg1}</td>
            </tr>
            <tr>
              <td>{data.iterations[0].lower["3rd"]}</td>
              <td>{data.layers.photosphere.lower.Vg[2].Vg0}</td>
              <td>{data.layers.photosphere.lower.Vg[2].Vg1}</td>
              <td>{data.iterations[0].mid["3rd"]}</td>
              <td>{data.layers.photosphere.mid.Vg[2].Vg0}</td>
              <td>{data.layers.photosphere.mid.Vg[2].Vg1}</td>
              <td>{data.iterations[0].upper["3rd"]}</td>
              <td>{data.layers.photosphere.upper.Vg[2].Vg0}</td>
              <td>{data.layers.photosphere.upper.Vg[2].Vg1}</td>
            </tr>
            <tr>
              <td>{data.iterations[0].lower["4th"]}</td>
              <td>{data.layers.photosphere.lower.Vg[3].Vg0}</td>
              <td>{data.layers.photosphere.lower.Vg[3].Vg1}</td>
              <td>{data.iterations[0].mid["4th"]}</td>
              <td>{data.layers.photosphere.mid.Vg[3].Vg0}</td>
              <td>{data.layers.photosphere.mid.Vg[3].Vg1}</td>
              <td>{data.iterations[0].upper["4th"]}</td>
              <td>{data.layers.photosphere.upper.Vg[3].Vg0}</td>
              <td>{data.layers.photosphere.upper.Vg[3].Vg1}</td>
            </tr>
            <tr>
              <td>{data.iterations[0].lower["5th"]}</td>
              <td>{data.layers.photosphere.lower.Vg[4].Vg0}</td>
              <td>{data.layers.photosphere.lower.Vg[4].Vg1}</td>
              <td>{data.iterations[0].mid["5th"]}</td>
              <td>{data.layers.photosphere.mid.Vg[4].Vg0}</td>
              <td>{data.layers.photosphere.mid.Vg[4].Vg1}</td>
              <td>{data.iterations[0].upper["5th"]}</td>
              <td>{data.layers.photosphere.upper.Vg[4].Vg0}</td>
              <td>{data.layers.photosphere.upper.Vg[4].Vg1}</td>
            </tr>
          </tbody>
        </Table_1>
      </div>
      <div className="mt-4">
        <Table_1 caption_title="Summary of Results in the Chromosphere">
          <thead>
            <tr>
              <th colSpan={3}>Lower Chromosphere</th>
              <th colSpan={3}>Mid Chromosphere</th>
              <th colSpan={3}>Upper Chromosphere</th>
            </tr>
            <tr>
              <th>Bo(G)</th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>Bo(G)</th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>Bo(G)</th>
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
              <td>{data.iterations[1].lower["1st"]}</td>
              <td>{data.layers.chromosphere.lower.Vg[0].Vg0}</td>
              <td>{data.layers.chromosphere.lower.Vg[0].Vg1}</td>
              <td>{data.iterations[1].mid["1st"]}</td>
              <td>{data.layers.chromosphere.mid.Vg[0].Vg0}</td>
              <td>{data.layers.chromosphere.mid.Vg[0].Vg1}</td>
              <td>{data.iterations[1].upper["1st"]}</td>
              <td>{data.layers.chromosphere.upper.Vg[0].Vg0}</td>
              <td>{data.layers.chromosphere.upper.Vg[0].Vg1}</td>
            </tr>
            <tr>
              <td>{data.iterations[1].lower["2nd"]}</td>
              <td>{data.layers.chromosphere.lower.Vg[1].Vg0}</td>
              <td>{data.layers.chromosphere.lower.Vg[1].Vg1}</td>
              <td>{data.iterations[1].mid["2nd"]}</td>
              <td>{data.layers.chromosphere.mid.Vg[1].Vg0}</td>
              <td>{data.layers.chromosphere.mid.Vg[1].Vg1}</td>
              <td>{data.iterations[1].upper["2nd"]}</td>
              <td>{data.layers.chromosphere.upper.Vg[1].Vg0}</td>
              <td>{data.layers.chromosphere.upper.Vg[1].Vg1}</td>
            </tr>
            <tr>
              <td>{data.iterations[1].lower["3rd"]}</td>
              <td>{data.layers.chromosphere.lower.Vg[2].Vg0}</td>
              <td>{data.layers.chromosphere.lower.Vg[2].Vg1}</td>
              <td>{data.iterations[1].mid["3rd"]}</td>
              <td>{data.layers.chromosphere.mid.Vg[2].Vg0}</td>
              <td>{data.layers.chromosphere.mid.Vg[2].Vg1}</td>
              <td>{data.iterations[1].upper["3rd"]}</td>
              <td>{data.layers.chromosphere.upper.Vg[2].Vg0}</td>
              <td>{data.layers.chromosphere.upper.Vg[2].Vg1}</td>
            </tr>
            <tr>
              <td>{data.iterations[1].lower["4th"]}</td>
              <td>{data.layers.chromosphere.lower.Vg[3].Vg0}</td>
              <td>{data.layers.chromosphere.lower.Vg[3].Vg1}</td>
              <td>{data.iterations[1].mid["4th"]}</td>
              <td>{data.layers.chromosphere.mid.Vg[3].Vg0}</td>
              <td>{data.layers.chromosphere.mid.Vg[3].Vg1}</td>
              <td>{data.iterations[1].upper["4th"]}</td>
              <td>{data.layers.chromosphere.upper.Vg[3].Vg0}</td>
              <td>{data.layers.chromosphere.upper.Vg[3].Vg1}</td>
            </tr>
            <tr>
              <td>{data.iterations[1].lower["5th"]}</td>
              <td>{data.layers.chromosphere.lower.Vg[4].Vg0}</td>
              <td>{data.layers.chromosphere.lower.Vg[4].Vg1}</td>
              <td>{data.iterations[1].mid["5th"]}</td>
              <td>{data.layers.chromosphere.mid.Vg[4].Vg0}</td>
              <td>{data.layers.chromosphere.mid.Vg[4].Vg1}</td>
              <td>{data.iterations[1].upper["5th"]}</td>
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
              <th colSpan={3}>Lower Corona</th>
              <th colSpan={3}>Mid Corona</th>
              <th colSpan={3}>Upper Corona</th>
            </tr>
            <tr>
              <th>Bo(G)</th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>Bo(G)</th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>
                <span>B=0</span>
                <br /> <span>Vg(m/s)</span>
              </th>
              <th>Bo(G)</th>
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
              <td>{data.iterations[2].lower["1st"]}</td>
              <td>{data.layers.corona.lower.Vg[0].Vg0}</td>
              <td>{data.layers.corona.lower.Vg[0].Vg1}</td>
              <td>{data.iterations[2].mid["1st"]}</td>
              <td>{data.layers.corona.mid.Vg[0].Vg0}</td>
              <td>{data.layers.corona.mid.Vg[0].Vg1}</td>
              <td>{data.iterations[2].upper["1st"]}</td>
              <td>{data.layers.corona.upper.Vg[0].Vg0}</td>
              <td>{data.layers.corona.upper.Vg[0].Vg1}</td>
            </tr>
            <tr>
              <td>{data.iterations[2].lower["2nd"]}</td>
              <td>{data.layers.corona.lower.Vg[1].Vg0}</td>
              <td>{data.layers.corona.lower.Vg[1].Vg1}</td>
              <td>{data.iterations[2].mid["2nd"]}</td>
              <td>{data.layers.corona.mid.Vg[1].Vg0}</td>
              <td>{data.layers.corona.mid.Vg[1].Vg1}</td>
              <td>{data.iterations[2].upper["2nd"]}</td>
              <td>{data.layers.corona.upper.Vg[1].Vg0}</td>
              <td>{data.layers.corona.upper.Vg[1].Vg1}</td>
            </tr>
            <tr>
              <td>{data.iterations[2].lower["3rd"]}</td>
              <td>{data.layers.corona.lower.Vg[2].Vg0}</td>
              <td>{data.layers.corona.lower.Vg[2].Vg1}</td>
              <td>{data.iterations[2].mid["3rd"]}</td>
              <td>{data.layers.corona.mid.Vg[2].Vg0}</td>
              <td>{data.layers.corona.mid.Vg[2].Vg1}</td>
              <td>{data.iterations[2].upper["3rd"]}</td>
              <td>{data.layers.corona.upper.Vg[2].Vg0}</td>
              <td>{data.layers.corona.upper.Vg[2].Vg1}</td>
            </tr>
            <tr>
              <td>{data.iterations[2].lower["4th"]}</td>
              <td>{data.layers.corona.lower.Vg[3].Vg0}</td>
              <td>{data.layers.corona.lower.Vg[3].Vg1}</td>
              <td>{data.iterations[2].mid["4th"]}</td>
              <td>{data.layers.corona.mid.Vg[3].Vg0}</td>
              <td>{data.layers.corona.mid.Vg[3].Vg1}</td>
              <td>{data.iterations[2].upper["4th"]}</td>
              <td>{data.layers.corona.upper.Vg[3].Vg0}</td>
              <td>{data.layers.corona.upper.Vg[3].Vg1}</td>
            </tr>
            <tr>
              <td>{data.iterations[2].lower["5th"]}</td>
              <td>{data.layers.corona.lower.Vg[4].Vg0}</td>
              <td>{data.layers.corona.lower.Vg[4].Vg1}</td>
              <td>{data.iterations[2].mid["5th"]}</td>
              <td>{data.layers.corona.mid.Vg[4].Vg0}</td>
              <td>{data.layers.corona.mid.Vg[4].Vg1}</td>
              <td>{data.iterations[2].upper["5th"]}</td>
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
