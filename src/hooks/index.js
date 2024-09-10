import { useEffect, useState } from "react";

export function useLoadData(getData, size) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const load = () => {
    setIsLoading(true);

    getData()
      .then(data => {
        setData(data.splice(0, size ? size : data.length));
      })
      .catch(error => setError(error))
      .finally(() => {
        setIsLoading(false);
      })
  }

  useEffect(() => {
    load();
  }, []);

  return { data, isLoading, error }

}

export function useClicker(initValue) {
  const [click, setClick] = useState(initValue);

  const handlerClick = () => {
    setClick(click => click + 1);
  }

  useEffect(() => {
    window.addEventListener('click', handlerClick);
    return () => {
      window.removeEventListener('click', handlerClick);
    }
  }, []);

  return click;
}