import { useState, useEffect } from "react";
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => {
       // console.log(res[currency])
        setData(res[currency])//here currency value type is STRING
      })
      
  }, [currency]);
  // console.log(data)
  return data;
}
export default useCurrencyInfo;

