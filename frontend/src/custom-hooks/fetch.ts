import { useCallback, useState } from "react";

type valuesType = {
  url: string;
  inputValues: { [key: string]: string };
};

export type fetchedData_json = {
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
