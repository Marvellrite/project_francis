import { useCallback, useState } from "react";

type valuesType = {
  url: string;
  inputValues: {[key:string]:string};
};

const useSubmitandReceive = (url: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<null | Response>(null);

  const submitAndReceive = useCallback(async (inputValues: valuesType["inputValues"]) => {
    try {
      setLoading(true);
      const fetchedData = await fetch(url, {
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputValues)
      });
      setData(fetchedData);
    } catch (err) {
      setError(true);
      console.log(err);
      alert(err);
    } finally {
      setLoading(false);
    }
  }, [url]);

  // useEffect(
  //   ()=>{
  //     if (values){
  //       submitAndReceive(values)

  //     }
  //   }, [])

  return {loading, data, error, submitAndReceive};
};

export default useSubmitandReceive;
