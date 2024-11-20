import { useCallback, useState } from "react";

type valuesType = {
  url: string;
  inputValues: { [key: string]: string };
};

type speed_ratio_result = {
  layers: {
    photosphere: {
      lower: {
        FMSW: number[];
        SMSW: number[];
      };
      mid: {
        FMSW: number[];
        SMSW: number[];
      };
      upper: {
        FMSW: number[];
        SMSW: number[];
      };
    };
    chromosphere: {
      lower: {
        FMSW: number[];
        SMSW: number[];
      };
      mid: {
        FMSW: number[];
        SMSW: number[];
      };
      upper: {
        FMSW: number[];
        SMSW: number[];
      };
    };
    corona: {
      lower: {
        FMSW: number[];
        SMSW: number[];
      };
      mid: {
        FMSW: number[];
        SMSW: number[];
      };
      upper: {
        FMSW: number[];
        SMSW: number[];
      };
    };
  };
  iterations: number[];
};

type group_ratio_result = {
  layers: {
    photosphere: {
      lower: {
        Vg: {
          Vg0: number;
          Vg1: number;
        }[];
      };
      mid: {
        Vg: {
          Vg0: number;
          Vg1: number;
        }[];
      };
      upper: {
        Vg: {
          Vg0: number;
          Vg1: number;
        }[];
      };
    };
    chromosphere: {
      lower: {
        Vg: {
          Vg0: number;
          Vg1: number;
        }[];
      };
      mid: {
        Vg: {
          Vg0: number;
          Vg1: number;
        }[];
      };
      upper: {
        Vg: {
          Vg0: number;
          Vg1: number;
        }[];
      };
    };
    corona: {
      lower: {
        Vg: {
          Vg0: number;
          Vg1: number;
        }[];
      };
      mid: {
        Vg: {
          Vg0: number;
          Vg1: number;
        }[];
      };
      upper: {
        Vg: {
          Vg0: number;
          Vg1: number;
        }[];
      };
    };
  };
  iterations: {
    lower: {
      "1st": number;
      "2nd": number;
      "3rd": number;
      "4th": number;
      "5th": number;
    };
    mid: {
      "1st": number;
      "2nd": number;
      "3rd": number;
      "4th": number;
      "5th": number;
    };
    upper: {
      "1st": number;
      "2nd": number;
      "3rd": number;
      "4th": number;
      "5th": number;
    };
  }[];
  BAG: {
    alpha: number[];
    beta: number[];
    gamma: number[];
  };
};

type tan_result = {
  layers: {
    photosphere: {
      lower: {
        angles: number[];
      };
      mid: {
        angles: number[];
      };
      upper: {
        angles: number[];
      };
    };
    chromosphere: {
      lower: {
        angles: number[];
      };
      mid: {
        angles: number[];
      };
      upper: {
        angles: number[];
      };
    };
    corona: {
      lower: {
        angles: number[];
      };
      mid: {
        angles: number[];
      };
      upper: {
        angles: number[];
      };
    };
  };
  iterations: {
    T: number;
    lambda: number;
  }[];
};

export type fetchedData_json = speed_ratio_result &
  group_ratio_result &
  tan_result;

const useSubmitandReceive = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<null | fetchedData_json>(null);

  const submitAndReceive = useCallback(
    async (url: string, inputValues: valuesType["inputValues"]) => {
      try {
        setLoading(true);
        const fetchedData = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputValues),
        });
        const fetchedData_json: fetchedData_json = await fetchedData.json();
        console.log(fetchedData);

        setData(fetchedData_json);
      } catch (err) {
        setError(true);
        console.log(err);
        alert(err);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // useEffect(
  //   ()=>{
  //     if (values){
  //       submitAndReceive(values)

  //     }
  //   }, [])

  return { loading, data, error, submitAndReceive };
};

export default useSubmitandReceive;
