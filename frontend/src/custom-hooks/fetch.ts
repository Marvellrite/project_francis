import { useCallback, useState, useEffect } from "react";

type valuesType = {
  url: string;
  inputValues: string;
};

const useSubmitandReceive = (values: valuesType) => {
  // const {url, inputValues} = values;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<null | Response>(null);

  const submitAndReceive = useCallback(async () => {
    try {
      setLoading(true);
      const fetchedData = await fetch(values.inputValues);
      setData(fetchedData);
    } catch (err) {
      setError(true);
      console.log(err);
      alert(err);
    } finally {
      setLoading(false);
    }
  }, [values]);

  useEffect(() => {
    submitAndReceive();
  }, [submitAndReceive]);
  return [loading, data, error];
};

export default useSubmitandReceive;
